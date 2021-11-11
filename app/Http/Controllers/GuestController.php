<?php

namespace App\Http\Controllers;

use App\Models\District;
use App\Models\FrequentlyAskedQuestion;
use App\Models\InformationSnippet;
use App\Models\Location;
use App\Models\NewsArticle;
use App\Models\PointOfInterest;
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
        return Inertia::render("CandidateProfiles/Index");
    }
    public function candidate_profile()
    {
        return Inertia::render("CandidateProfiles/Show");
    }
}
