<?php

namespace App\Http\Controllers;

use App\Http\Requests\LocationRequest;
use App\Models\Location;
use App\Models\LocationType;
use App\Services\LocationService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class LocationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $locations = Location::with("type", "parent")->paginate();
        return Inertia::render("Locations/Index", compact("locations"));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $types = LocationType::all();
        $locations = Location::all()->groupBy("location_type_id");
        return Inertia::render("Locations/Create", [
            "types" => $types,
            "locations" => $locations,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LocationRequest $request)
    {
        $location = (new LocationService())->updateOrCreate($request);

        return Redirect::route("locations.index")->with(
            "success",
            "Location has been created!"
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function show(Location $location)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function edit(Location $location)
    {
        $types = LocationType::all();
        $locations = Location::all()->groupBy("location_type_id");

        $location->load("media");

        return Inertia::render("Locations/Edit", [
            "location" => $location,
            "types" => $types,
            "locations" => $locations,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function update(LocationRequest $request, Location $location)
    {
        (new LocationService())->updateOrCreate($request, $location);

        return Redirect::route("locations.index")->with(
            "success",
            $location->name . " has been updated!"
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function destroy(Location $location)
    {
        $location->delete();

        return Redirect::back()->with(
            "error",
            $location->name . " has been deleted!"
        );
    }
}
