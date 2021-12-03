<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\Location;
use App\Models\LocationType;
use App\Models\RunningPosition;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CandidateProfileController extends Controller
{
    public function index()
    {
        $locations = Location::where("name", "Region XI - Davao Region")->get();

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
            "location.ancestorsAndSelf",
            "stances",
            "media",
        ]);

        $relatedArticles = $candidate
            ->relatedArticles()
            ->orderByDesc("date")
            ->with("newsSource")
            ->paginate(5)
            ->onEachSide(1);

        return Inertia::render("CandidateProfiles/Show", [
            "candidate" => $candidate,
            "relatedArticles" => $relatedArticles,
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
            "children.type",
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

    public function location_redirect(Location $location)
    {
        $location->ancestorsAndSelf;

        // dd($location->ancestorsAndSelf->pluck("id"));

        $args = $location->ancestorsAndSelf->mapWithKeys(function ($loc) {
            $locName = strtolower(
                LocationType::find($loc->location_type_id)->name
            );

            return [$locName => $loc->id];
        });

        switch ($location->location_type_id) {
            case 1:
                $route = "locations.region.show";
                break;
            case 2:
                $route = "locations.province.show";
                break;
            case 3:
                $route = "locations.district.show";
                break;
            case 4:
                $route = "locations.city.show";
                break;
        }

        $args = $args->toArray();

        return Redirect::route($route, $args);
    }
}
