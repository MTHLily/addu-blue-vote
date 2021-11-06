<?php

namespace App\Http\Controllers;

use App\Http\Requests\PoliticalPartyRequest;
use App\Models\PoliticalParty;
use Illuminate\Http\Request;
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
        return Inertia::render("PoliticalParties/Index", [
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
        return Inertia::render("PoliticalParties/Create");
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
     * Display the specified resource.
     *
     * @param  \App\Models\PoliticalParty  $political_party
     * @return \Illuminate\Http\Response
     */
    public function show(PoliticalParty $political_party)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PoliticalParty  $political_party
     * @return \Illuminate\Http\Response
     */
    public function edit(PoliticalParty $political_party)
    {
        return Inertia::render("PoliticalParties/Edit", [
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
