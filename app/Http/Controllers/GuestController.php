<?php

namespace App\Http\Controllers;

use App\Models\District;
use App\Models\FrequentlyAskedQuestion;
use App\Models\InformationSnippet;
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
            "registrationSites" => PointOfInterest::where(
                "point_of_interest_type_id",
                "=",
                1
            )
                ->with("district")
                ->get(),
        ]);
    }

    public function voters_education()
    {
        $articles = (new NewscraperService())->get();

        return Inertia::render("VotersEducation", [
            "articles" => $articles,
        ]);
    }

    public function candidate_profiles_index()
    {
        return "HELLO WROLD";
    }
}
