<?php

namespace App\Http\Controllers;

use App\Models\BlueVoteInfo;
use App\Models\BlueVotePeople;
use App\Models\BlueVoteProject;
use App\Models\PartnerOffice;
use App\Models\VolunteerStep;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AboutUsController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        return Inertia::render("AboutUs", []);
    }

    public function config()
    {
        $bluevote_info = BlueVoteInfo::first();
        $previous_projects = BlueVoteProject::all();
        // $volunteers = BlueVotePeople
        $bluevote_people = BlueVotePeople::with("profilePhoto")->get();
        $partner_offices = PartnerOffice::all();
        $volunteer_steps = VolunteerStep::all();

        return Inertia::render("Backend/AboutUsConfig", [
            "bluevote_info" => $bluevote_info,
            "previous_projects" => $previous_projects,
            "bluevote_people" => $bluevote_people,
            "partner_offices" => $partner_offices,
            "volunteer_steps" => $volunteer_steps,
        ]);
    }
}
