<?php

namespace App\Services;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class MediaService
{
    public function store(
        HasMedia $mediable,
        $file,
        string $collectionName = null
    ) {
        $media = $mediable->addMedia($file)->toMediaCollection($collectionName);
        return $media;
    }

    public function sync(HasMedia $mediable, $data, string $collectionName)
    {
        $data = collect($data);

        $idsIncluded = $data
            ->filter(fn($item) => Arr::get($item, "id", false))
            ->pluck("id")
            ->toArray();

        if (
            $mediable
                ->media()
                ->where("collection_name", $collectionName)
                ->count() > 0
        ) {
            $mediable
                ->media()
                ->where("collection_name", $collectionName)
                ->whereNotIn("id", $idsIncluded)
                ->delete();
        }

        $data->each(function ($media) use ($mediable, $collectionName) {
            $model = null;
            if (is_numeric($media["id"])) {
                $model = Media::find($media["id"]);
            }

            if ($model != null) {
                return;
            }
            $mediable
                ->addMedia($media["file"])
                ->setFileName($media["name"])
                ->toMediaCollection($collectionName);
        });

        return $mediable;
    }

    public function attachOnlyOne(
        HasMedia $mediable,
        ?array $media,
        string $collectionName,
        string $fileName = null
    ) {
        // // Handle Media
        // $media = Arr::get($request->validated(), "media", null);
        // dd($media);

        if ($media !== null) {
            if (
                $mediable
                    ->media()
                    ->where("collection_name", $collectionName)
                    ->count() > 0
            ) {
                $mediable
                    ->media()
                    ->where("collection_name", $collectionName)
                    ->whereNotIn("id", Arr::wrap(Arr::get($media, "id", [])))
                    ->delete();
            }

            if (
                $mediable
                    ->media()
                    ->where("collection_name", $collectionName)
                    ->count() === 0 &&
                isset($media["file"])
            ) {
                $mediable
                    ->addMedia($media["file"])
                    ->usingName($fileName ? $fileName : $media["name"])
                    ->toMediaCollection($collectionName);
            }
        } else {
            $mediable
                ->media()
                ->where("collection_name", $collectionName)
                ->delete();
        }

        return $mediable;
    }
}
