<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\District;
use App\Models\FrequentlyAskedQuestion;
use App\Models\InformationSnippet;
use App\Models\Location;
use App\Models\NewsArticle;
use App\Models\PointOfInterest;
use App\Models\RunningPosition;
use App\Services\NewscraperService;
use Inertia\Inertia;

class GuestController extends Controller
{
    public function voters_registration()
    {
        return Inertia::render("Welcome", [
            "faqs" => FrequentlyAskedQuestion::all(),
            "information" => InformationSnippet::all(),
            "districts" => District::all(),
            "locations" => Location::all(),
            "locationTree" => Location::getTree(),
            "registrationSites" => PointOfInterest::where(
                "point_of_interest_type_id",
                "=",
                1
            )
                ->with("location")
                ->get(),
        ]);
    }

    public function voters_education()
    {
        $articles = NewsArticle::with("newsSource")
            ->orderByDesc("date")
            ->paginate(10);

        return Inertia::render("VotersEducation", [
            "articles" => $articles,
        ]);
    }

    public function candidate_profiles_index()
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
    public function candidate_profile(Candidate $candidate)
    {
        $candidate->load([
            "educationalBackground",
            "politicalBackground",
            "professionalBackground",
            "location.parent.parent.parent",
            "stances",
            "media",
        ]);

        return Inertia::render("CandidateProfiles/Show", [
            "candidate" => $candidate,
        ]);
    }
}
