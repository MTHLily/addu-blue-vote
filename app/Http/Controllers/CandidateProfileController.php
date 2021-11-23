<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\Location;
use App\Models\RunningPosition;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Inertia\Inertia;

class CandidateProfileController extends Controller
{
    public function index()
    {
        $locations = Location::where(
            ["name" => "Region XI - Davao Region"],
            ["location_type_id" => 1]
        )
            ->with([
                "children.candidates.media",
                "children.candidates.runningPosition",
                "children.candidates.politicalParty",
            ])
            ->with([
                "children.children.candidates.media",
                "children.children.candidates.runningPosition",
                "children.children.candidates.politicalParty",
            ])
            ->with([
                "children.children.children.candidates.media",
                "children.children.children.candidates.runningPosition",
                "children.children.children.candidates.politicalParty",
            ])
            // ->with("children.children.children.candidates.media")
            ->get();
        $nationalPositions = RunningPosition::where("location_type_id", null)
            ->with([
                "candidates.media",
                "candidates.politicalParty",
                "candidates.runningPosition",
            ])
            ->get();

        return Inertia::render("CandidateProfiles/Index", [
            "locations" => $locations,
            "nationalPositions" => $nationalPositions,
        ]);
    }

    public function show(Candidate $candidate)
    {
        $candidate->load([
            "educationalBackground",
            "politicalBackground",
            "runningPosition",
            "professionalBackground",
            "location.parent.parent.parent",
            "stances",
            "media",
        ]);

        return Inertia::render("CandidateProfiles/Show", [
            "candidate" => $candidate,
        ]);
    }

    public function location_show(Location $location, array $breadcrumbs = [])
    {
        $location->load([
            "candidates.media",
            "candidates.politicalParty",
            "candidates.runningPosition",
            "parent",
            "type",
            "children",
        ]);

        return Inertia::render("CandidateProfiles/LocationShow", [
            "location" => $location,
            "breadcrumbs" => $breadcrumbs,
        ]);
    }

    public function region_show(Location $region)
    {
        return $this->location_show($region, [$region]);
    }

    public function province_show(Location $region, Location $province)
    {
        return $this->location_show($province, [$region, $province]);
    }

    public function district_show(
        Location $region,
        Location $province,
        Location $district
    ) {
        return $this->location_show($district, [$region, $province, $district]);
    }
    public function city_show(
        Location $region,
        Location $province,
        Location $district,
        Location $city
    ) {
        return $this->location_show($city, [
            $region,
            $province,
            $district,
            $city,
        ]);
    }
}
