<?php

namespace App\Services;

use Illuminate\Support\Arr;

class MediaService
{
    public function sync( InformationModule $module, $data, string $collectionName, string $fileName){


    }
    
    public function attachOnlyOne(
        $mediable,
        $media,
        string $collectionName,
        string $fileName
    ) {
        // // Handle Media
        // $media = Arr::get($request->validated(), "media", null);

        if ($media !== null) {
            $mediable
                ->media()
                ->whereNotIn("id", Arr::wrap(Arr::get($media, "id")))
                ->delete();

            if ($mediable->media()->count() === 0 && isset($media["file"])) {
                $mediable
                    ->addMedia($media["file"])
                    ->usingName($fileName)
                    ->toMediaCollection($collectionName);
            }
        } else {
            $mediable->media()->delete();
        }

        return $mediable;
    }
}
