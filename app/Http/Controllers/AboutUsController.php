<?php

namespace App\Http\Controllers;

use App\Http\Requests\AboutUsRequest;
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
        $volunteers = BlueVotePeople::volunteer()
            ->with("profilePhoto")
            ->get();
        $bluevote_people = BlueVotePeople::staff()
            ->with("profilePhoto")
            ->get();
        $partner_offices = PartnerOffice::with("profilePhoto")->get();
        $volunteer_steps = VolunteerStep::sorted()->get();

        return Inertia::render("Backend/AboutUsConfig", [
            "bluevote_info" => $bluevote_info,
            "previous_projects" => $previous_projects,
            "volunteers" => $volunteers,
            "bluevote_people" => $bluevote_people,
            "partner_offices" => $partner_offices,
            "volunteer_steps" => $volunteer_steps,
        ]);
    }
    public function update(AboutUsRequest $request)
    {
        BlueVoteInfo::first()->update($request->validated());

        return Redirect::back()->with("success", "Updated description!");
    }
}
