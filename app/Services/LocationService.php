<?php

namespace App\Services;

use App\Models\Location;
use App\Models\LocationType;
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

        if (!LocationType::find($request->location_type_id)->parent_type_id) {
            $locationData["parent_location_id"] = null;
        }

        if ($location == null) {
            $location = Location::create($locationData);
        } else {
            $location->update($locationData);
        }

        // Handle Media
        $media = Arr::get($request->validated(), "media", null);

        $location = (new MediaService())->attachOnlyOne(
            $location,
            $media,
            "location-preview"
        );

        return $location;
    }
}
