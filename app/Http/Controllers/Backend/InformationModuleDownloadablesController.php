<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\InformationModule;
use App\Services\InformationModuleService;
use App\Services\MediaService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InformationModuleDownloadablesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(InformationModule $informationModule)
    {
        return response()->json($informationModule->downloadables);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(
        Request $request,
        InformationModule $informationModule,
        InformationModuleService $service
    ) {
        return response()->json($request);
        $downloadable = DB::transaction(function () use (
            $request,
            $informationModule,
            $service
        ) {
            $service->storeDownloadable($request, $informationModule);
        });

        return response()->json($downloadable);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\InformationModule  $informationModule
     * @return \Illuminate\Http\Response
     */
    public function show(InformationModule $informationModule)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\InformationModule  $informationModule
     * @return \Illuminate\Http\Response
     */
    public function update(
        Request $request,
        InformationModule $informationModule
    ) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\InformationModule  $informationModule
     * @return \Illuminate\Http\Response
     */
    public function destroy(InformationModule $informationModule)
    {
        //
    }
}
