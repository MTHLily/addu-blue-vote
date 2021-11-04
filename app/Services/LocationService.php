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
        // Since locations only have 1 media...
        $firstMedia = $location->getFirstMedia();

        if ($firstMedia) {
            if (!$media || $location->getFirstMedia()->id != $media["id"]) {
                $location->getFirstMedia()->delete();
                if (isset($media["file"])) {
                    $location->addMedia($media["file"])->toMediaCollection();
                }
            }
        } else {
            if (isset($media["file"])) {
                $location->addMedia($media["file"])->toMediaCollection();
            }
        }

        return $location;
    }
}
