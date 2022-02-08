<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreElectionProcessStepRequest;
use App\Http\Requests\UpdateElectionProcessStepRequest;
use App\Models\ElectionProcessStep;

class ElectionProcessStepController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreElectionProcessStepRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreElectionProcessStepRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ElectionProcessStep  $electionProcessStep
     * @return \Illuminate\Http\Response
     */
    public function show(ElectionProcessStep $electionProcessStep)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ElectionProcessStep  $electionProcessStep
     * @return \Illuminate\Http\Response
     */
    public function edit(ElectionProcessStep $electionProcessStep)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateElectionProcessStepRequest  $request
     * @param  \App\Models\ElectionProcessStep  $electionProcessStep
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateElectionProcessStepRequest $request, ElectionProcessStep $electionProcessStep)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ElectionProcessStep  $electionProcessStep
     * @return \Illuminate\Http\Response
     */
    public function destroy(ElectionProcessStep $electionProcessStep)
    {
        //
    }
}
