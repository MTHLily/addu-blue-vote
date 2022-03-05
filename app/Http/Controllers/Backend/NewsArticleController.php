<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
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

        return Inertia::render("Backend/News/Index", [
            "articles" => $articles,
        ]);
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
