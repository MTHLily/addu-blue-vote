<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\FrequentlyAskedQuestion;
use App\Models\InformationSnippet;
use App\Models\NewsArticle;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        $information_snippets = InformationSnippet::all();

        $articles = NewsArticle::with("newsSource")
            ->orderByDesc("date")
            ->paginate(10)
            ->onEachSide(1)
            ->withQueryString();

        $faqs = FrequentlyAskedQuestion::all();

        return Inertia::render(
            "Home",
            compact("information_snippets", "articles", "faqs")
        );
    }
}
