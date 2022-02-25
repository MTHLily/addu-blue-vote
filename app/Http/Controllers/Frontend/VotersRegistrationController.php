<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\FrequentlyAskedQuestion;
use App\Models\InformationSnippet;
use App\Services\PointOfInterestService;
use Inertia\Inertia;

class VotersRegistrationController extends Controller
{
    public function __invoke(PointOfInterestService $service)
    {
        $information = InformationSnippet::with("media")->get();
        $information->append(["cover", "cover_url"]);

        $locations = $service->fetchPointsOfInterestByLocations(1);

        return Inertia::render("VotersRegistration", [
            "faqs" => FrequentlyAskedQuestion::all(),
            "information" => $information,
            "locations" => $locations,
        ]);
    }
}
