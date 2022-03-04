<?php

namespace App\Http\Controllers;

use App\Http\Requests\VideoResourceRequest;
use App\Models\VideoResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class VideoResourceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render("VideoResources/Index", [
            "video_resources" => VideoResource::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render("VideoResources/Create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(VideoResourceRequest $request)
    {
        VideoResource::create($request->validated());

        return Redirect::route("video-resources.index")->with(
            "success",
            "Video resource created!"
        );
    }

    /**
     * Check the video resource as featured.
     *
     * @param  \App\Models\VideoResource  $videoResource
     * @return \Illuminate\Http\Response
     */
    public function check(VideoResource $videoResource)
    {
        $videoResource->featured = !$videoResource->featured;
        $videoResource->save();

        return Redirect::back()->with(
            "success",
            "Updated " . $videoResource->title
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\VideoResource  $videoResource
     * @return \Illuminate\Http\Response
     */
    public function edit(VideoResource $videoResource)
    {
        return Inertia::render("VideoResources/Edit", [
            "video_resource" => $videoResource,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\VideoResource  $videoResource
     * @return \Illuminate\Http\Response
     */
    public function update(
        VideoResourceRequest $request,
        VideoResource $videoResource
    ) {
        $videoResource->update($request->validated());

        return Redirect::route("video-resources.index")->with(
            "success",
            $videoResource->title . " updated!"
        );
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\VideoResource  $videoResource
     * @return \Illuminate\Http\Response
     */
    public function destroy(VideoResource $videoResource)
    {
        $videoResource->delete();

        return Redirect::back()->with(
            "message",
            $videoResource->title . " has been deleted!"
        );
    }
}
