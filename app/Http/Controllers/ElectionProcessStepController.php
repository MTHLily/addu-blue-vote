<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreElectionProcessStepRequest;
use App\Http\Requests\UpdateElectionProcessStepRequest;
use App\Models\ElectionProcessStep;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ElectionProcessStepController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $steps = ElectionProcessStep::sorted()->get();

        return Inertia::render("ElectionProcessSteps/Index", [
            "steps" => $steps,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render("ElectionProcessSteps/Create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreElectionProcessStepRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreElectionProcessStepRequest $request)
    {
        ElectionProcessStep::create($request->validated());

        return Redirect::route("election-process-steps.index");
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
        return Inertia::render("ElectionProcessSteps/Edit", [
            "step" => $electionProcessStep,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateElectionProcessStepRequest  $request
     * @param  \App\Models\ElectionProcessStep  $electionProcessStep
     * @return \Illuminate\Http\Response
     */
    public function update(
        UpdateElectionProcessStepRequest $request,
        ElectionProcessStep $electionProcessStep
    ) {
        $electionProcessStep->update($request->validated());

        return Redirect::route("election-process-steps.index");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ElectionProcessStep  $electionProcessStep
     * @return \Illuminate\Http\Response
     */
    public function destroy(ElectionProcessStep $electionProcessStep)
    {
        $electionProcessStep->delete();

        return Redirect::back()->with("error", "Election step deleted!");
    }

    public function reorder(
        ElectionProcessStep $item1,
        ElectionProcessStep $item2
    ) {
        $item1->moveBefore($item2);

        return Redirect::back()->with(
            "success",
            "Changed Election Step Order!"
        );
    }
}
