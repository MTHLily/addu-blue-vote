<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\InformationModule;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InformationModuleFrontendController extends Controller
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
     * Display the specified resource.
     *
     * @param  \App\Models\InformationModule  $informationModule
     * @return \Illuminate\Http\Response
     */
    public function show(InformationModule $informationModule)
    {
        $informationModule->load("media", "downloadables", "cover");

        $videos = $informationModule->relatedVideoResources()->paginate();

        return Inertia::render("Frontend/InformationModules/Show", [
            "information_module" => $informationModule,
            "videos" => $videos,
        ]);
    }
}
