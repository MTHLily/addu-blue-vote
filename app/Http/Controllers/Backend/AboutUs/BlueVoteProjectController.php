<?php

namespace App\Http\Controllers\Backend\AboutUs;

use App\Http\Controllers\Controller;
use App\Http\Requests\BlueVoteProjectRequest;
use App\Models\BlueVoteProject;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class BlueVoteProjectController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render("Backend/AboutUs/BlueVoteProject/Create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BlueVoteProjectRequest $request)
    {
        BlueVoteProject::create($request->validated());

        return Redirect::route("about-us.config")->with(
            "success",
            "Added project!"
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BlueVoteProject  $previousProject
     * @return \Illuminate\Http\Response
     */
    public function edit(BlueVoteProject $previousProject)
    {
        return Inertia::render("Backend/AboutUs/BlueVoteProject/Edit", [
            "project" => $previousProject,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\BlueVoteProject  $previousProject
     * @return \Illuminate\Http\Response
     */
    public function update(
        BlueVoteProjectRequest $request,
        BlueVoteProject $previousProject
    ) {
        $previousProject->update($request->validated());

        return Redirect::route("about-us.config")->with(
            "success",
            "Updated project!"
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BlueVoteProject  $previousProject
     * @return \Illuminate\Http\Response
     */
    public function destroy(BlueVoteProject $previousProject)
    {
        $previousProject->delete();

        return Redirect::route("about-us.config")->with(
            "success",
            "Deleted project!"
        );
    }
}
