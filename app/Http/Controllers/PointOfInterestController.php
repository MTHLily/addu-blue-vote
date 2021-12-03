<?php

namespace App\Http\Controllers;

use App\Http\Requests\PointOfInterestRequest;
use App\Models\District;
use App\Models\Location;
use App\Models\PointOfInterest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PointOfInterestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render("PointsOfInterest/Index", [
            "pois" => PointOfInterest::with(["location", "type"])->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $locations = Location::regions()
            ->with("children.children.children")
            ->get();

        return Inertia::render("PointsOfInterest/Create", [
            "locations" => $locations,
            "poi_types" => PointOfInterest::getTypes(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PointOfInterestRequest $request)
    {
        $poi = PointOfInterest::create($request->except("image"));

        return Redirect::route("poi.index")->with(
            "success",
            "Point of interest created!"
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PointOfInterest  $pointOfInterest
     * @return \Illuminate\Http\Response
     */
    public function show(PointOfInterest $pointOfInterest)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PointOfInterest  $pointOfInterest
     * @return \Illuminate\Http\Response
     */
    public function edit(PointOfInterest $poi)
    {
        $locations = Location::regions()
            ->with("children.children.children")
            ->get();
        return Inertia::render("PointsOfInterest/Edit", [
            "poi" => $poi,
            "locations" => $locations,
            "poi_types" => PointOfInterest::getTypes(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PointOfInterest  $pointOfInterest
     * @return \Illuminate\Http\Response
     */
    public function update(
        PointOfInterestRequest $request,
        PointOfInterest $poi
    ) {
        $poi->update($request->except("image"));

        return Redirect::route("poi.index")->with(
            "success",
            $poi->name . " has been updated!"
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PointOfInterest  $pointOfInterest
     * @return \Illuminate\Http\Response
     */
    public function destroy(PointOfInterest $poi)
    {
        $poi->delete();

        return Redirect::route("poi.index")->with(
            "message",
            $poi->name . " has been deleted!"
        );
    }
}
