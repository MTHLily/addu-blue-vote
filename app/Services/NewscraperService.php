<?php

namespace App\Services;

use App\Jobs\FindRelatedCandidatesForNewsArticle;
use App\Jobs\ScrapeNewsSite;
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
        $descriptionArr = [];
        array_push(
            $descriptionArr,
            Goutte::request("GET", $url)
                ->filterXpath("//meta[@name='description']")
                ->extract(["content"])
        );
        array_push(
            $descriptionArr,
            Goutte::request("GET", $url)
                ->filterXpath("//meta[@property='og:description']")
                ->extract(["content"])
        );
        for ($i = 0; $i < count($descriptionArr); $i++) {
            if (!empty($descriptionArr[$i])) {
                return $descriptionArr[$i][0];
            }
        }
        return null;
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
                    // dd($article);
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

        dump($articles);
        return $articles;
    }

    public function rappler(): array
    {
        $articles = [];
        $crawler = Goutte::request(
            "GET",
            "https://www.rappler.com/topic/2022-philippine-elections/"
        );

        $latestArticle = $crawler->filter(".archive-article__content");

        $article = NewsArticle::firstOrNew([
            "url" => $latestArticle->filter("a")->attr("href"),
        ]);

        if (!$article->exists) {
            $article->title = $latestArticle->text();
            $article->description = Str::of(
                $this->getMetaDescriptionFromUrl($article->url)
            )->limit(252);
            $article->news_source_id = $this->sources_id["rappler"];
            $article->date = Carbon::now();
            $article->save();

            FindRelatedCandidatesForNewsArticle::dispatch($article);
        }

        array_push($articles, $article);

        $newsArticles = $crawler
            ->filter("article")
            ->each(function ($node) use ($article) {
                $check = $node->filter("div h2");
                if ($check->count() === 0) {
                    return $article;
                }

                $url = $node->filter("h2 a")->attr("href");

                $article = NewsArticle::firstOrNew(["url" => $url]);

                if (!$article->exists) {
                    try {
                        $time = Str::remove(
                            "PHT",
                            $node->filter("time")->text()
                        );
                        $date = Carbon::parse($time);
                    } catch (Exception $e) {
                        dd($e, $time);
                    }
                    $article->title = $node->filter("h2 a")->text();
                    $article->description = Str::of(
                        $this->getMetaDescriptionFromUrl($url)
                    )->limit(252);
                    $article->date = $date;
                    $article->news_source_id = $this->sources_id["rappler"];
                    $article->save();

                    FindRelatedCandidatesForNewsArticle::dispatch($article);
                }
                // dd($article);
                return $article;
            });

        $articles = array_merge($articles, $newsArticles);

        dump($articles);
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
                FindRelatedCandidatesForNewsArticle::dispatch($article);
            }
            return $article;
        });

        $articles = array_merge($articles, $newsArticles);
        // dd($articles);
        dump($articles);
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
                    FindRelatedCandidatesForNewsArticle::dispatch($article);
                }
                // dd($article);
                return $article;
            });

        dump($newsArticles);
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
                        FindRelatedCandidatesForNewsArticle::dispatch($article);
                    }

                    return $article;
                });
        }

        dump($newsArticles);

        return $newsArticles;
    }

    public function cnn_ph()
    {
        $crawler = Goutte::request("GET", "https://cnnphilippines.com/news/");
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
                    $article->title = $node->filter("a")->text();
                    $article->description = "A CNN PH Article.";
                    $article->date = Carbon::now();
                    $article->news_source_id = $this->sources_id["cnn_ph"];
                    $article->save();
                    FindRelatedCandidatesForNewsArticle::dispatch($article);
                }
                // dump($article);
                return $article;
            });

        dump($newsArticles);
        return $newsArticles;
    }

    public function inquirer_net()
    {
        $crawler = Goutte::request(
            "GET",
            "https://newsinfo.inquirer.net/tag/2022-national-elections"
        );

        $newsArticles = $crawler->filter("#ch-ls-box")->each(function ($node) {
            $url = "";
            try {
                $url = $node->filter("a")->attr("href");
            } catch (Exception $e) {
                return;
            }
            $article = NewsArticle::firstOrNew([
                "url" => $url,
            ]);

            if (!$article->exists) {
                $article->title = $node->filter("#ch-ls-head h2")->text();
                $article->description = Str::of(
                    $this->getMetaDescriptionFromUrl($url)
                )->limit("252");
                $article->date = Carbon::parse(
                    $node->filter("#ch-postdate span")->text()
                );
                $article->news_source_id = $this->sources_id["inquirer_net"];
                $article->save();
                FindRelatedCandidatesForNewsArticle::dispatch($article);
            }
            return $article;
        });

        dump($newsArticles);
        return $newsArticles;
    }

    public function gma()
    {
        $crawler = Goutte::request(
            "GET",
            "https://www.gmanetwork.com/news/tracking/eleksyon_2022/"
        );

        $newsArticles = $crawler
            ->filter("grid_thumbnail_stories li")
            ->each(function ($node) {
                $article = NewsArticle::firstOrNew([
                    "url" => "https://www.gmanetwork.com/news/",
                    $node->filter("a.story_link")->attr("href"),
                ]);

                if (!$article->exists) {
                    $article->title = $node
                        ->filter(".story_link")
                        ->attr("title")
                        ->text();
                    $article->description = "An GMA News Article.";
                    $article->date = Carbon::now();
                    $article->news_source_id = $this->sources_id["gma"];
                    $article->save();
                    FindRelatedCandidatesForNewsArticle::dispatch($article);
                }
                // dd($article);
                return $article;
            });

        dump($newsArticles);

        return $newsArticles;
    }

    //https://www.gmanetwork.com/news/tracking/eleksyon_2022/
    //https://cnnphilippines.com/thefilipinovotes/

    public function relatedCandidates(NewsArticle $article)
    {
        $relatedCandidates = collect([]);

        // get all the candidate keywords
        $candidates = Candidate::all(["id", "name", "keywords"]);
        $keywords = $candidates->map(function ($candidate) {
            $name = Str::of($candidate->name)
                ->explode(" ")
                ->toArray();
            $keys = Str::of($candidate->keywords)
                ->explode(",")
                ->toArray();
            return [
                "name" => $name,
                "keywords" => $keys,
            ];
        });

        // Visit with guzzler
        $crawler = Goutte::request("GET", $article->url);

        // Parser for ABS-CBN
        if ($article->news_source_id === $this->sources_id["abs_cbn"]) {
            dump("ABS CBN");
            $text = $crawler->filter(".article-block")->text();
            dump($text);
        }
        // Parser for Rappler
        if ($article->news_source_id === $this->sources_id["rappler"]) {
            $text = $crawler->filter(".article-main-section")->text();
            dump($text);
        }

        // Parser for PhilStar
        if ($article->news_source_id === $this->sources_id["phil_star"]) {
            $text = $crawler->filter(".article__writeup")->text();
            dump($text);
        }

        // Parser for Comelec
        if ($article->news_source_id === $this->sources_id["comelec"]) {
            $text = "";
            dump($text);
        }

        // Parser for Manila Times
        if ($article->news_source_id === $this->sources_id["manila_times"]) {
            $text = $crawler->filter(".article-body")->text();
            dump($text);
        }

        // Parser for CNN
        if ($article->news_source_id === $this->sources_id["cnn_ph"]) {
            $text = "";
            // $text = $crawler
            //     ->filter(".article-maincontent-p.cnn-life-body")
            //     ->text();
            dump($text);
        }

        // Parser for Inquirer
        if ($article->news_source_id === $this->sources_id["inquirer_net"]) {
            // $text = Str::of("");
            $p = collect(
                $crawler
                    ->filter("#article_content > div >p ")
                    ->each(function ($node) {
                        return $node->text();
                    })
            );
            $text = $p->reduce(fn($carry, $string) => $carry . $string . " ");
            // $text = $crawler->filter("#article_content > div >p ")->text();
            dump($text);
        }

        // Parser for gma
        if ($article->news_source_id === $this->sources_id["gma"]) {
            // $text = $crawler->filter(".story_main")->text();
            $text = "";
            dump($text);
        }

        $keywords->each(function ($candidate) use ($text, $relatedCandidates) {
            $text = Str::of($text);
            if (
                $text->contains($candidate["name"]) ||
                $text->contains($candidate["keywords"])
            ) {
                $relatedCandidates->push($candidate);
            }
        });

        dump($relatedCandidates->pluck("name"));

        return $relatedCandidates;

        // dd("Related Candidates: ", $relatedCandidates);
    }

    public function linkCandidates(int $limit = 0, bool $fresh = false): void
    {
        if ($fresh) {
            $articles = NewsArticle::all();
        } else {
            $query = NewsArticle::has("relatedCandidates", ">", "0");
            if ($limit > 0) {
                $query = $query->limit($limit);
            }
            $articles = $query->get();
        }

        $articles->each(function (NewsArticle $article) {
            FindRelatedCandidatesForNewsArticle::dispatch($article);
        });
    }

    public function get(): array
    {
        // $articles = [];
        // dump("ABS-CBN");
        // $articles = $this->abs_cbn();
        // dump("Philstar");
        // $articles = $this->phil_star();
        // dump("Rappler");
        // $articles = $this->rappler();
        // dump("Comelec");
        // $articles = $this->comelec();
        // dump("CNN");
        // /**
        //  * No section for electiosn
        //  */
        // // $articles = $this->cnn_ph();
        // dump("Manila Times");
        // $articles = $this->manila_times();
        // dump("Inquirer");
        // $articles = $this->inquirer_net();
        // dump("GMA");
        /**
         * Uses JS to load articles
         */
        // $articles = $this->gma();

        $articles = [];

        ScrapeNewsSite::dispatch("abs_cbn");
        ScrapeNewsSite::dispatch("phil_star");
        ScrapeNewsSite::dispatch("rappler");
        ScrapeNewsSite::dispatch("comelec");
        ScrapeNewsSite::dispatch("manila_times");
        ScrapeNewsSite::dispatch("inquirer_net");
        ScrapeNewsSite::dispatch("gma");

        dump($articles);
        return $articles;
    }
}
