<?php

namespace App\Http\Controllers;

use App\Models\InformationSnippet;
use App\Http\Requests\InformationSnippetRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
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
        return Inertia::render('Information/Index', ['info' => InformationSnippet::paginate()]);

    }    

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Information/Create');

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //InformationSnippet::create( $request->validated() );
        $request->validate([
            'title' => 'required',
            'content' => 'required',
           ]);
        InformationSnippet::create([
            'title' => $request->input('title'),
            'content' => $request->input('content')
        ]);
        return Redirect::route('information.index')->with('success', 'Information Snippet Added!');

        /*$request->validate([
            'title' => 'required',
            'content' => 'required',
           ]);

        InformationSnippet::create([
            'title' => $request->input('title'),
            'content' => $request->input('content')
        ]);
        
        return Redirect::route('information.index');*/
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
    public function edit(InformationSnippet $info)
    {
        return Inertia::render('Information/Edit', [ 'info' =>  $info ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\InformationSnippet  $informationSnippet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, InformationSnippet $info)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
           ]);
        $info->update([
            'title' => $request->input('title'),
            'content' => $request->input('content')
        ]);
        
        return \Redirect::route('information.index');
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
