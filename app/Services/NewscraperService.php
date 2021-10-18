<?php

namespace App\Services;

use App\Models\NewsArticle;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Str;
use Weidner\Goutte\GoutteFacade as Goutte;

class NewscraperService
{
    private $sources_id = [
        "abs_cbn" => 1,
        "rappler" => 2,
        "phil_star" => 3,
        "comelec" => 4,
        "manila_times" => 5,
        "cnn_ph" => 6,
        "inquirer_net" => 7,
    ];

    private function getMetaDescriptionFromUrl(string $url): null|string
    {
        $descriptionArr = Goutte::request("GET", $url)
            ->filterXpath("//meta[@name='description']")
            ->extract(["content"]);
        if (empty($descriptionArr)) {
            return null;
        }
        return $descriptionArr[0];
    }

    public function abs_cbn(bool $getOnlyNew = true): array
    {
        $articles = [];
        $crawler = Goutte::request(
            "GET",
            "https://news.abs-cbn.com/list/tag/halalan?page=1"
        );

        parse_str(
            parse_url($crawler->filter("a.last")->attr("href"))["query"],
            $parsedQuery
        );

        if (!$parsedQuery["page"]) {
            return [];
        }

        $maxPage = (int) $parsedQuery["page"];

        for ($i = 1; $i <= $maxPage; $i++) {
            $crawler = Goutte::request(
                "GET",
                "https://news.abs-cbn.com/list/tag/halalan?page=" . $i
            );
            $newArticles = $crawler
                ->filter("article.clearfix")
                ->each(function ($node) {
                    $article = [
                        "title" => $node->filter("p.title")->text(),
                        "description" => Str::of(
                            $node->filter(".content p:last-child")->text()
                        )->limit(252),
                        "url" =>
                            "https://news.abs-cbn.com/" .
                            $node->filter("a")->attr("href"),
                        "date" => Carbon::parse(
                            $node->filter(".datetime")->text()
                        ),
                    ];

                    $article = NewsArticle::firstOrCreate(
                        [
                            "title" => $article["title"],
                            "news_source_id" => $this->sources_id["abs_cbn"],
                        ],
                        $article
                    );

                    return $article;
                });

            $articles = array_merge($articles, $newArticles);

            if ($getOnlyNew) {
                $articleCollection = collect($newArticles);

                $oldArticles = $articleCollection->map(function ($value) {
                    return $value->wasRecentlyCreated;
                });

                if ($oldArticles->contains(false)) {
                    break;
                }
            }
        }

        return $articles;
    }

    public function rappler(): array
    {
        $articles = [];
        $crawler = Goutte::request(
            "GET",
            "https://www.rappler.com/2022-philippine-elections"
        );

        $latestArticle = $crawler->filter(".text-block div a");

        $article = NewsArticle::firstOrNew([
            "url" => "https://www.rappler.com" . $latestArticle->attr("href"),
        ]);

        if (!$article->exists) {
            $article->title = $latestArticle->text();
            $article->description = Str::of($article->url)->limit(252);
            $article->news_source_id = $this->sources_id["rappler"];
            $article->date = Carbon::now();
            $article->save();
        }

        array_push($articles, $article);

        $newsArticles = $crawler
            ->filter(".StyledComponents__ArticleItemText-sc-7o38yj-6")
            ->each(function ($node) {
                $url =
                    "https://www.rappler.com" .
                    $node->filter("a.related-content-item")->attr("href");

                $article = NewsArticle::firstOrNew(["url" => $url]);

                if (!$article->exists) {
                    $article->title = $node
                        ->filter("a.related-content-item")
                        ->text();
                    $article->description = Str::of(
                        $this->getMetaDescriptionFromUrl($url)
                    )->limit(252);
                    $article->date = Carbon::parse(
                        $node->filter("time")->text()
                    );
                    $article->news_source_id = $this->sources_id["rappler"];
                    $article->save();
                }
                return $article;
            });

        $articles = array_merge($articles, $newsArticles);

        return $articles;
    }

    public function phil_star(): array
    {
        $articles = [];
        $crawler = Goutte::request(
            "GET",
            "https://www.philstar.com/tags/election"
        );

        $newsArticles = $crawler->filter(".tiles.late")->text();

        $newsArticles = $crawler->filter(".tiles.late")->each(function ($node) {
            $url = $node->filter("a")->attr("href");
            try {
                $date = Carbon::parse(
                    Str::of($node->filter(".dateOfFeature")->text())->remove(
                        "-"
                    )
                );
            } catch (Exception $e) {
                $date = Carbon::parse(
                    Str::of($node->filter(".dateOfFeature")->text())
                        ->remove("-")
                        ->explode("|")[1]
                );
            }

            $article = NewsArticle::firstOrNew(["url" => $url]);

            if (!$article->exists) {
                $article->title = $node->filter("a")->text();
                $article->description = Str::of(
                    $node->filter(".news_summary")->text()
                )->limit(252);
                $article->date = $date;
                $article->news_source_id = $this->sources_id["phil_star"];
                $article->save();
            }
            return $article;
        });

        $articles = array_merge($articles, $newsArticles);

        return $articles;
    }

    public function comelec()
    {
        $crawler = Goutte::request(
            "GET",
            "https://comelec.gov.ph/html-sys-tpls/homeNews.html"
        );

        $newsArticles = $crawler
            ->filter(".list-group-item")
            ->each(function ($node) {
                $article = NewsArticle::firstOrNew([
                    "url" => "https://comelec.gov.ph/" . $node->attr("href"),
                ]);

                $date = Carbon::parse(
                    Str::of(
                        $node->filter(".list-group-item-text")->text()
                    )->replace(".", "/")
                );

                if (!$article->exists) {
                    $article->title = $node
                        ->filter(".list-group-item-heading")
                        ->text();
                    $article->description = "A COMELEC announcement.";
                    $article->date = $date;
                    $article->news_source_id = $this->sources_id["comelec"];
                    $article->save();
                }

                return $article;
            });

        return $newsArticles;
    }

    public function get(): array
    {
        $articles = [];
        $articles = $this->comelec();

        return $articles;
    }
}
