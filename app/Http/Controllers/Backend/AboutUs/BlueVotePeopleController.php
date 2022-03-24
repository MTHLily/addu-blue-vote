<?php

namespace App\Http\Controllers\Backend\AboutUs;

use App\Http\Controllers\Controller;
use App\Http\Requests\BlueVotePersonRequest;
use App\Models\BlueVotePeople;
use App\Services\BlueVotePersonService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class BlueVotePeopleController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render("Backend/AboutUs/BlueVotePeople/Create");
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(
        BlueVotePersonRequest $request,
        BlueVotePersonService $service
    ) {
        $person = DB::transaction(function () use ($request, $service) {
            return $service->updateOrCreate($request);
        });

        return Redirect::route("about-us.config")->with(
            "success",
            "Added " . $person->name . "!"
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BlueVotePeople  $bluevotePerson
     * @return \Illuminate\Http\Response
     */
    public function edit(BlueVotePeople $bluevotePerson)
    {
        return Inertia::render("Backend/AboutUs/BlueVotePeople/Edit", [
            "person" => $bluevotePerson,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\BlueVotePeople  $bluevotePerson
     * @return \Illuminate\Http\Response
     */
    public function update(
        BlueVotePersonRequest $request,
        BlueVotePeople $bluevotePerson,
        BlueVotePersonService $service
    ) {
        $person = DB::transaction(function () use (
            $request,
            $service,
            $bluevotePerson
        ) {
            return $service->updateOrCreate($request, $bluevotePerson);
        });

        return Redirect::route("about-us.config")->with(
            "success",
            "Updated " . $person->name . "!"
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BlueVotePeople  $bluevotePerson
     * @return \Illuminate\Http\Response
     */
    public function destroy(BlueVotePeople $bluevotePerson)
    {
        $bluevotePerson->delete();

        return Redirect::back()->with("success", "Removed person!");
    }
}
