<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\InformationSnippet;
use App\Http\Requests\InformationSnippetRequest;
use App\Services\MediaService;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class InformationSnippetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render("Backend/Information/Index", [
            "info" => InformationSnippet::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render("Backend/Information/Create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(
        InformationSnippetRequest $request,
        MediaService $mediaService
    ) {
        //InformationSnippet::create( $request->validated() );
        // $request->validate([
        //     "title" => "required",
        //     "content" => "required",
        // ]);
        $snippet = InformationSnippet::create(
            Arr::only($request->validated(), ["title", "content", "link"])
        );

        /** InformationSnipper $snippet */
        $mediaService->attachOnlyOne(
            $snippet,
            Arr::get($request->validated(), "cover"),
            "snippet-covers",
            Str::slug($snippet->title)
        );

        return Redirect::route("information.index")->with(
            "success",
            "Information Snippet Added!"
        );

        /*$request->validate([
            'title' => 'required',
            'content' => 'required',
           ]);

        InformationSnippet::create([
            'title' => $request->input('title'),
            'content' => $request->input('content')
        ]);
        
        return Redirect::route('information.index');*/
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\InformationSnippet  $informationSnippet
     * @return \Illuminate\Http\Response
     */
    public function show(InformationSnippet $information)
    {
        return Inertia::render("Backend/Information/Show", [
            "information" => $information,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\InformationSnippet  $informationSnippet
     * @return \Illuminate\Http\Response
     */
    public function edit(InformationSnippet $information)
    {
        $information->append("cover");

        return Inertia::render("Backend/Information/Edit", [
            "information" => $information,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\InformationSnippet  $informationSnippet
     * @return \Illuminate\Http\Response
     */
    public function update(
        InformationSnippetRequest $request,
        InformationSnippet $information,
        MediaService $mediaService
    ) {
        // $request->validate([
        //     'title' => 'required',
        //     'content' => 'required',
        //    ]);
        $information->update(
            Arr::only($request->validated(), ["title", "content", "link"])
        );

        /** InformationSnipper $snippet */
        $mediaService->attachOnlyOne(
            $information,
            Arr::get($request->validated(), "cover"),
            "snippet-covers",
            Str::slug($information->title)
        );

        return Redirect::route("information.index")->with(
            "success",
            $information->title . " has been updated!"
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\InformationSnippet  $informationSnippet
     * @return \Illuminate\Http\Response
     */
    public function destroy(InformationSnippet $information)
    {
        $information->delete();
        return Redirect::route("information.index")->with(
            "message",
            "Information Snippet Removed!"
        );
    }
}
