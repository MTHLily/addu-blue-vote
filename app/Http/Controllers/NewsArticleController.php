<?php

namespace App\Http\Controllers;

use App\Models\NewsArticle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class NewsArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $articles = NewsArticle::orderByDesc("date")
            ->with("newsSource")
            ->with("relatedCandidates:id,name")
            ->withCount("relatedCandidates")
            ->paginate($request->itemsPerPage);

        return Inertia::render("News/Index", [
            "articles" => $articles,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\NewsArticle  $news
     * @return \Illuminate\Http\Response
     */
    public function show(NewsArticle $news)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\NewsArticle  $news
     * @return \Illuminate\Http\Response
     */
    public function edit(NewsArticle $news)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\NewsArticle  $news
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, NewsArticle $news)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\NewsArticle  $news
     * @return \Illuminate\Http\Response
     */
    public function destroy(NewsArticle $news)
    {
        $news->delete();

        return Redirect::back()->with(
            "message",
            $news->title . " was deleted!"
        );
    }
}
