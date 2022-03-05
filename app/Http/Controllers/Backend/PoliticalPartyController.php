<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\PoliticalPartyRequest;
use App\Models\PoliticalParty;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PoliticalPartyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render("Backend/PoliticalParties/Index", [
            "political_parties" => PoliticalParty::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render("Backend/PoliticalParties/Create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PoliticalPartyRequest $request)
    {
        PoliticalParty::create($request->validated());

        return Redirect::route("political-parties.index")->with(
            "success",
            "Party created!"
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PoliticalParty  $political_party
     * @return \Illuminate\Http\Response
     */
    public function edit(PoliticalParty $political_party)
    {
        return Inertia::render("Backend/PoliticalParties/Edit", [
            "political_party" => $political_party,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PoliticalParty  $political_party
     * @return \Illuminate\Http\Response
     */
    public function update(
        PoliticalPartyRequest $request,
        PoliticalParty $political_party
    ) {
        $political_party->update($request->validated());

        return Redirect::route("political-parties.index")->with(
            "success",
            $political_party->name . " updated!"
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PoliticalParty  $political_party
     * @return \Illuminate\Http\Response
     */
    public function destroy(PoliticalParty $political_party)
    {
        $political_party->delete();

        return Redirect::back()->with(
            "message",
            $political_party->name . " has been deleted!"
        );
    }
}
