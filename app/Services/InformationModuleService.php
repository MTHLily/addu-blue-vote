<?php

namespace App\Services;

use App\Models\InformationModule;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class InformationModuleService
{
    public function updateOrCreate(
        $request,
        InformationModule $informationModule = null
    ): InformationModule {
        $informationModuleData = Arr::only($request->validated(), [
            "description",
            "speakers",
            "downloadables",
        ]);

        if ($informationModule == null) {
            $informationModule = InformationModule::create(
                $informationModuleData
            );
        } else {
            $informationModule->update($informationModuleData);
        }

        $informationModule
            ->relatedVideoResources()
            ->sync(Arr::get($request->validated(), "related_videos"));

        (new MediaService())->sync(
            $informationModule,
            Arr::get($request->validated(), "media"),
            "information-module-files",
            "info-module"
        );

        return $informationModule;
    }
}
