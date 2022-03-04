<?php

namespace App\Services;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class MediaService
{
    public function sync(
        HasMedia $mediable,
        $data,
        string $collectionName,
        string $baseFileName
    ) {
        $data = collect($data);

        $idsIncluded = $data
            ->filter(fn($item) => Arr::get($item, "id", false))
            ->pluck("id")
            ->toArray();

        $mediable
            ->media()
            ->where("collection_name", $collectionName)
            ->whereNotIn("id", $idsIncluded)
            ->delete();

        $data->each(function ($media) use (
            $mediable,
            $collectionName,
            $baseFileName
        ) {
            $model = Media::find($media["id"]);
            if ($model != null) {
                return;
            }
            $uuid = Str::uuid();
            $ext = $media["file"]->getClientOriginalExtension();
            $mediable
                ->addMedia($media["file"])
                ->setFileName("$uuid.$ext")
                ->toMediaCollection($collectionName);
        });

        return $mediable;
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
