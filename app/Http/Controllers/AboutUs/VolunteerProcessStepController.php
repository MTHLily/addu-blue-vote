<?php

namespace App\Http\Controllers\AboutUs;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreVolunteerProcessStepRequest;
use App\Http\Requests\UpdateVolunteerProcessStepRequest;
use App\Models\VolunteerStep;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class VolunteerProcessStepController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $steps = VolunteerStep::sorted()->get();

        return Inertia::render("Backend/VolunteerProcessSteps/Index", [
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
        return Inertia::render("Backend/VolunteerProcessSteps/Create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreVolunteerProcessStepRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreVolunteerProcessStepRequest $request)
    {
        VolunteerStep::create($request->validated());

        return Redirect::route("volunteer-process-steps.index");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\VolunteerProcessStep  $volunteerProcessStep
     * @return \Illuminate\Http\Response
     */
    public function show(VolunteerStep $volunteerProcessStep)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\VolunteerProcessStep  $volunteerProcessStep
     * @return \Illuminate\Http\Response
     */
    public function edit(VolunteerStep $volunteerProcessStep)
    {
        return Inertia::render("Backend/VolunteerProcessSteps/Edit", [
            "step" => $volunteerProcessStep,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateVolunteerProcessStepRequest  $request
     * @param  \App\Models\VolunteerProcessStep  $volunteerProcessStep
     * @return \Illuminate\Http\Response
     */
    public function update(
        UpdateVolunteerProcessStepRequest $request,
        VolunteerStep $volunteerProcessStep
    ) {
        $volunteerProcessStep->update($request->validated());

        return Redirect::route("volunteer-process-steps.index")->with(
            "Update success!",
          
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\VolunteerProcessStep  $volunteerProcessStep
     * @return \Illuminate\Http\Response
     */
    public function destroy(VolunteerStep $volunteerProcessStep)
    {
        $volunteerProcessStep->delete();

        return Redirect::back()->with("error", "Volunteer step deleted!");
    }

    public function reorder(
        VolunteerStep $item1,
        VolunteerStep $item2
    ) {
        $item1->moveBefore($item2);

        return Redirect::back()->with(
            "success",
            "Changed Volunteer Step Order!"
        );
    }
}
