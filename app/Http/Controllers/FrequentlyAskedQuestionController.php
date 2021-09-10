<?php

namespace App\Http\Controllers;

use App\Models\FrequentlyAskedQuestion;
use Illuminate\Http\Request;
use Inertia\Inertia;


class FrequentlyAskedQuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('FAQs');

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FrequentlyAskedQuestion  $frequentlyAskedQuestion
     * @return \Illuminate\Http\Response
     */
    public function show(FrequentlyAskedQuestion $frequentlyAskedQuestion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FrequentlyAskedQuestion  $frequentlyAskedQuestion
     * @return \Illuminate\Http\Response
     */
    public function edit(FrequentlyAskedQuestion $frequentlyAskedQuestion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\FrequentlyAskedQuestion  $frequentlyAskedQuestion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FrequentlyAskedQuestion $frequentlyAskedQuestion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FrequentlyAskedQuestion  $frequentlyAskedQuestion
     * @return \Illuminate\Http\Response
     */
    public function destroy(FrequentlyAskedQuestion $frequentlyAskedQuestion)
    {
        //
    }
}
