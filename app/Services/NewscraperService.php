<?php

namespace App\Services;

use App\Models\NewsArticle;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Weidner\Goutte\GoutteFacade as Goutte;

class NewscraperService
{
    public function abs_cbn(bool $getOnlyNew = true)
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
                            "news_source_id" => 1,
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

    public function get()
    {
        $articles = [];
        $this->abs_cbn(false);

        return $articles;
    }
}
