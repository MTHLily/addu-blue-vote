<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\InformationModuleRequest;
use App\Models\InformationModule;
use App\Models\VideoResource;
use App\Models\RelatedMedia;
use App\Services\InformationModuleService;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class InformationModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render("Backend/InformationModules/Index", [
            "information_modules" => InformationModule::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $videos = VideoResource::all();

        return Inertia::render("Backend/InformationModules/Create", [
            "videos" => $videos,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(InformationModuleRequest $request)
    {
        $informationModule = (new InformationModuleService())->updateOrCreate(
            $request
        );

        return Redirect::route("information-modules.index")->with(
            "success",
            $informationModule->description . " has been created!"
        );
    }

  /**
     * Check the video resource as featured.
     *
     * @param  \App\Models\VideoResource  $videoResource
     * @return \Illuminate\Http\Response
     */
    public function check(InformationModule $informationModule)
    {
       /* $isExist = InformationModule::select("featured")
                        ->exists();
        if ($isExist) {
            dd('Record is available.');
        }else{
            dd('Record is not available.');s
        }*/
        //dd($informationModule);
        $informationModule->featured = !$informationModule->featured;
        $informationModule->save();

        return Redirect::back()->with(
            "success",
            "Updated " . $informationModule->description
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(InformationModule $informationModule)
    {
        $videos = VideoResource::all();
        $informationModule->load(
            "media",
            "relatedVideoResources",
            "cover",
            "downloadables"
        );

        return Inertia::render("Backend/InformationModules/Edit", [
            "information_module" => $informationModule,
            "videos" => $videos,
        ]);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(
        InformationModuleRequest $request,
        InformationModule $informationModule
    ) {
        //$informationModule = (new InformationModuleService())->updateOrCreate($request, $informationModule);
        $informationModule = (new InformationModuleService())->updateOrCreate(
            $request,
            $informationModule
        );

        return Redirect::route("information-modules.index")->with(
            "success",
            $informationModule->description . " has been updated!"
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(InformationModule $informationModule)
    {
        $informationModule->delete();

        return Redirect::back()->with(
            "message",
            $informationModule->description . " has been deleted!"
        );
    }

    public function unlink_video(
        InformationModule $informationModule,
        VideoResource $video_resource
    ) {
        $informationModule
            ->relatedVideoResources()
            ->detach($video_resource->id);

        return Redirect::back()->with(
            "success",
            $informationModule->id . " has been unlinked from resource!"
        );
    }
}
