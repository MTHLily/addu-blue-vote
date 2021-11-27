<?php

namespace App\Services;

use App\Models\Candidate;
use App\Models\NewsArticle;
use Carbon\Carbon;
use Exception;
use FuzzyWuzzy\Fuzz;
use Illuminate\Support\Arr;
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
        "gma" => 8,
        "tv_5" => 9,
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
                        "news_source_id" => $this->sources_id["abs_cbn"],
                    ];

                    $article = NewsArticle::firstOrCreate(
                        [
                            "url" => $article["url"],
                        ],
                        $article
                    );
                    dd($article);
                    return $article;
                });

            $articles = array_merge($articles, $newArticles);

            if ($getOnlyNew) {
                $articleCollection = collect($newArticles);

                $oldArticles = $articleCollection->map(function ($model) {
                    return $model->wasRecentlyCreated;
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
            $article->description = Str::of(
                $this->getMetaDescriptionFromUrl($article->url)
            )->limit(252);
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
                dd($article);
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
        dd($articles);
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
                dd($article);
                return $article;
            });

        return $newsArticles;
    }

    public function manila_times()
    {
        $crawler = Goutte::request(
            "GET",
            "https://www.manilatimes.net/tag/ELECTION/page/1"
        );

        for ($i = 1; $i <= 13; $i++) {
            $crawler = Goutte::request(
                "GET",
                "https://www.manilatimes.net/tag/ELECTION/page/" . $i
            );
            $newsArticles = $crawler
                ->filter(".article-title-h4")
                ->each(function ($node) {
                    $article = NewsArticle::firstOrNew([
                        "url" => $node->filter("a")->attr("href"),
                    ]);

                    if (!$article->exists) {
                        $article->title = $node
                            ->filter(".article-title-h4")
                            ->text();
                        $article->description = "A Manila Times Article.";
                        $article->date = Carbon::now();
                        $article->news_source_id =
                            $this->sources_id["manila_times"];
                        $article->save();
                    }
                   
                    return $article;
                });
        }
        return $newsArticles;
    }

    public function cnn_ph()
    {
        $crawler = Goutte::request(
            "GET",
            "https://cnnphilippines.com/news/"
        );
        //div.carousel-img-text span
        $newsArticles = $crawler
            ->filter(".widget.list.headline.xs-special")
            ->each(function ($node) {
                $article = NewsArticle::firstOrNew([
                    "url" =>
                        "https://cnnphilippines.com/" .
                        $node->filter("a")->attr("href"),
                ]);

                if (!$article->exists) {
                    $article->title = $node
                        ->filter("a")
                        ->text();
                    $article->description = "A CNN PH Article.";
                    $article->date = Carbon::now();
                    $article->news_source_id = $this->sources_id["cnn_ph"];
                    $article->save();
                }
               dump($article);
                return $article;
            });

        return $newsArticles;
    }

    public function inquirer_net()
    {
        $crawler = Goutte::request(
            "GET",
            "https://newsinfo.inquirer.net/tag/2022-national-elections"
        );

        $newsArticles = $crawler->filter("#ch-ls-box")->each(function ($node) {
            $article = NewsArticle::firstOrNew([
                "url" =>
                    "https://newsinfo.inquirer.net/" .
                    $node->filter("a")->attr("href"),
            ]);

            if (!$article->exists) {
                $article->title = $node->filter("#ch-ls-head")->text();
                $article->description = "An Inquirer.net Article.";
                $article->date = Carbon::now();
                $article->news_source_id = $this->sources_id["inquirer_net"];
                $article->save();
            }
            dd($article);
            return $article;
        });

        return $newsArticles;
    }

    public function gma()
    {
        $crawler = Goutte::request(
            "GET",
            "https://www.gmanetwork.com/news/tracking/eleksyon_2022/"
        );

        $newsArticles = $crawler
            ->filter("#grid_thumbnail_stories")
            ->each(function ($node) {
                $article = NewsArticle::firstOrNew([
                    "url" =>
                        "https://www.gmanetwork.com/news/" ,
                        $node->filter("a.story_link")->attr("href"),
                ]);

                if (!$article->exists) {
                    $article->title = $node
                        ->filter(".story_link")->attr("title")
                        ->text();
                    $article->description = "An GMA News Article.";
                    $article->date = Carbon::now();
                    $article->news_source_id = $this->sources_id["gma"];
                    $article->save();
                }
                dd($article);
                return $article;
            });

        return $newsArticles;
    }

    //https://www.gmanetwork.com/news/tracking/eleksyon_2022/
    //https://cnnphilippines.com/thefilipinovotes/

    public function relatedCandidates($id)
    {
        $relatedCandidates = collect([]);

        // get all the names candidates
        $candidateNames = Candidate::all(["id", "name"]);

        //$article = NewsArticle::findOrFail($id);
        $article = NewsArticle::where('news_source_id', 6)->first();
        // Visit with guzzler
        $crawler = Goutte::request("GET", $article->url);

        // Parser for ABS-CBN
        if ($article->news_source_id === $this->sources_id["abs_cbn"]) {
            $text = $crawler->filter(".article-block")->text();
            dump($text);
        }
       // Parser for Rappler
        if ($article->news_source_id === $this->sources_id["rappler"]) {
            $text = $crawler->filter(".ArticleWrapper__ArticleBodyWrapper-sc-36pn73-0")->text();
            dump($text);
        }

        // Parser for PhilStar
        if ($article->news_source_id === $this->sources_id["phil_star"]) {
            $text = $crawler->filter(".article__writeup")->text();
            dump($text);
        }

         // Parser for Comelec
        if ($article->news_source_id === $this->sources_id["comelec"]) {
            $text = $crawler->filter(".list-group-item")->text();
            dump($text);
        }

        // Parser for Manila Times
        if ($article->news_source_id === $this->sources_id["manila_times"]) {
            $text = $crawler->filter(".article-body")->text();
            dump($text);
        }

        // Parser for CNN
        if ($article->news_source_id === $this->sources_id["cnn_ph"]) {
            $text = $crawler->filter(".article-maincontent-p.cnn-life-body")->text();
            dump($text);
        }

        // Parser for Inquirer
        if ($article->news_source_id === $this->sources_id["inquirer_net"]) {
            $text = $crawler->filter(".article_align")->text();
            dump($text);
        }

        // Parser for gma
        if ($article->news_source_id === $this->sources_id["gma"]) {
            $text = $crawler->filter(".story_main")->text();
            dump($text);
        }

        $candidateNames->each(function ($candidate) use (
            $text,
            $relatedCandidates
        ) {
            if (
                Str::of($text)->contains(
                    Str::of($candidate->name)
                        ->explode(" ")
                        ->toArray()
                )
            ) {
                $relatedCandidates->push($candidate);
            }
        });

        return $relatedCandidates;

        // dd("Related Candidates: ", $relatedCandidates);
    }

    public function linkCandidates(): void
    {
        $candidates = $this->relatedCandidates(3);
       // dd($candidates);
    }

    public function get(): array
    {
        $articles = [];
        $articles = $this->abs_cbn();
        $articles = $this->phil_star();
        $articles = $this->rappler();
        $articles = $this->comelec();
        //$articles = $this->cnn_ph();
        $articles = $this->manila_times();
        $articles = $this->inquirer_net();
        //$articles = $this->gma();

        return $articles;
    }
}
