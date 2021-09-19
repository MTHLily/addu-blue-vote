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
        return Inertia::render( 'Information/Index', [
            'info' => InformationSnippet::all()
        ]);
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
    public function edit(InformationSnippet $information)
    { 
        return Inertia::render('Information/Edit', [ 'information' =>  $information ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\InformationSnippet  $informationSnippet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, InformationSnippet $information)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
           ]);
        $information->update([
            'title' => $request->input('title'),
            'content' => $request->input('content')
        ]);
        
        return Redirect::route('information.index')->with('success', $information->title . ' has been updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\InformationSnippet  $informationSnippet
     * @return \Illuminate\Http\Response
     */
    public function destroy(InformationSnippet $information)
    {
        $information->delete();
        return Redirect::route('information.index')->with('message', 'Information Snippet Removed!');
    }
}
