<?php

namespace App\Http\Controllers;

use App\Models\InformationSnippet;
use Illuminate\Http\Request;
use Inertia\Inertia;


class InformationSnippetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Information');

    }    

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
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
     * @param  \App\Models\InformationSnippet  $informationSnippet
     * @return \Illuminate\Http\Response
     */
    public function show(InformationSnippet $informationSnippet)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\InformationSnippet  $informationSnippet
     * @return \Illuminate\Http\Response
     */
    public function edit(InformationSnippet $informationSnippet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\InformationSnippet  $informationSnippet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, InformationSnippet $informationSnippet)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\InformationSnippet  $informationSnippet
     * @return \Illuminate\Http\Response
     */
    public function destroy(InformationSnippet $informationSnippet)
    {
        //
    }
}
