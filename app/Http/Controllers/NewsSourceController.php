<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewsSourceRequest;
use App\Models\NewsSource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class NewsSourceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $newsSources = NewsSource::all();
        return Inertia::render("Backend/NewsSources/Index", [
            "news-sources" => $newsSources,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render("Backend/NewsSources/Create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(NewsSourceRequest $request)
    {
        NewsSource::create($request->validated());

        return Redirect::route("news-sources.index")->with(
            "success",
            "A news source has been created!"
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\NewsSource  $newsSource
     * @return \Illuminate\Http\Response
     */
    public function edit(NewsSource $newsSource)
    {
        return Inertia::render("Backend/NewsSources/Edit", [
            "news-source" => $newsSource,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\NewsSource  $newsSource
     * @return \Illuminate\Http\Response
     */
    public function update(NewsSourceRequest $request, NewsSource $newsSource)
    {
        $newsSource->update($request->validated());

        return Redirect::route("news-sources.index")->with(
            "success",
            "A news source has been updated!"
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\NewsSource  $newsSource
     * @return \Illuminate\Http\Response
     */
    public function destroy(NewsSource $newsSource)
    {
        $newsSource->delete();

        return Redirect::back()->with(
            "message",
            $newsSource->name . " has been deleted!"
        );
    }
}
