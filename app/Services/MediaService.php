<?php

namespace App\Services;

use Illuminate\Support\Arr;

class MediaService
{
    public function attachOnlyOne($mediable, $media, string $collectionName)
    {
        // // Handle Media
        // $media = Arr::get($request->validated(), "media", null);

        if ($media !== null) {
            $mediable
                ->media()
                ->whereNotIn("id", Arr::pluck($media, "id"))
                ->delete();
            if ($mediable->media()->count() === 0 && isset($media["file"])) {
                $mediable
                    ->addMedia($media["file"])
                    ->toMediaCollection($collectionName);
            }
        } else {
            $mediable->media()->delete();
        }

        return $mediable;
    }
}
