<?php

namespace App\Services;

use Weidner\Goutte\GoutteFacade as Goutte;

class NewscraperService
{
    public function get()
    {
        $articles = [];

        $crawler = Goutte::request(
            "GET",
            "https://news.abs-cbn.com/list/tag/halalan"
        );
        $abs_cbn = $crawler->filter("article.clearfix")->each(function ($node) {
            $article = [
                "title" => $node->filter("p.title")->text(),
                "description" => $node->filter(".content p:last-child")->text(),
                "link" =>
                    "https://news.abs-cbn.com/" .
                    $node->filter("a")->attr("href"),
            ];

            return $article;
        });

        $articles = array_merge($articles, $abs_cbn);

        return $articles;
    }
}
