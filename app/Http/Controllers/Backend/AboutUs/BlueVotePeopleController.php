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
     * @param  \App\Models\BlueVotePeople  $blueVotePeople
     * @return \Illuminate\Http\Response
     */
    public function edit(BlueVotePeople $blueVotePeople)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\BlueVotePeople  $blueVotePeople
     * @return \Illuminate\Http\Response
     */
    public function update(
        BlueVotePersonRequest $request,
        BlueVotePeople $blueVotePeople
    ) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BlueVotePeople  $blueVotePeople
     * @return \Illuminate\Http\Response
     */
    public function destroy(BlueVotePeople $blueVotePeople)
    {
        //
    }
}
