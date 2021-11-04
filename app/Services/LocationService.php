<?php

namespace App\Services;

use App\Models\Location;
use Illuminate\Support\Arr;

class LocationService
{
    public function updateOrCreate($request, Location $location = null)
    {
        $locationData = Arr::only($request->validated(), [
            "name",
            "description",
            "color",
            "longitude",
            "latitude",
            "location_type_id",
            "parent_location_id",
        ]);

        if ($location == null) {
            $location = Location::create($locationData);
        } else {
            $location->update($locationData);
        }

        // Handle Media
        $media = Arr::get($request->validated(), "media", null);

        if ($media !== null) {
            $location
                ->media()
                ->whereNotIn("id", Arr::pluck($media, "id"))
                ->delete();
            if ($location->media()->count() === 0 && isset($media["file"])) {
                $location
                    ->addMedia($media["file"])
                    ->toMediaCollection("location-preview");
            }
        } else {
            $location->media()->delete();
        }

        // if ($firstMedia) {
        //     if (!$media || $location->getFirstMedia()->id != $media["id"]) {
        //         $location->getFirstMedia()->delete();
        //         if (isset($media["file"])) {
        //             $location
        //                 ->addMedia($media["file"])
        //                 ->toMediaCollection("location-preview");
        //         }
        //     }
        // } else {
        //     if (isset($media["file"])) {
        //         $location
        //             ->addMedia($media["file"])
        //             ->toMediaCollection("location-preview");
        //     }
        // }

        return $location;
    }
}
