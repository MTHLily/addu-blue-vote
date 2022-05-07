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
            "title",
            "description",
            "speakers",
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

        $mediaService = new MediaService();

        $mediaService->attachOnlyOne(
            $informationModule,
            Arr::get($request->validated(), "cover"),
            "information-module-covers"
        );
        $mediaService->sync(
            $informationModule,
            Arr::get($request->validated(), "downloadables"),
            "information-module-files",
            "info-module"
        );

        return $informationModule;
    }

    public function storeDownloadable(
        $request,
        InformationModule $informationModule
    ) {
        if ($request->file("file")) {
            $mediaService = new MediaService();
            $media = $mediaService->store(
                $informationModule,
                $request->file("file"),
                "information-module-files"
            );
            return $media;
        }
        return null;
    }
}
