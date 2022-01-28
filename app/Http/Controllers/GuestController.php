<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\FrequentlyAskedQuestion;
use App\Models\InformationSnippet;
use App\Models\Location;
use App\Models\NewsArticle;
use App\Models\RunningPosition;
use App\Services\PointOfInterestService;
use Inertia\Inertia;

class GuestController extends Controller
{
    public function voters_registration(PointOfInterestService $service)
    {
        $locations = $service->fetchPointsOfInterestByLocations(1);

        return Inertia::render("VotersRegistration", [
            "faqs" => FrequentlyAskedQuestion::all(),
            "information" => InformationSnippet::all(),
            "locations" => $locations,
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

    public function voting_precints(PointOfInterestService $service)
    {
        $locations = $service->fetchPointsOfInterestByLocations(2); // Get All Voting Precints

        return Inertia::render("VotingPrecints", [
            "locations" => $locations,
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
    public function candidate_profile(Candidate $candidate)
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
}
