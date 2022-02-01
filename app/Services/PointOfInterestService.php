<?php

namespace App\Services;

use App\Models\Location;
use App\Models\PointOfInterest;
use Illuminate\Support\Arr;

class PointOfInterestService
{
    public function updateOrCreate($request, PointOfInterest $poi = null)
    {
        $poiData = Arr::except($request->validated(), ["image"]);

        if ($poi == null) {
            $poi = PointOfInterest::create($poiData);
        } else {
            $poi->update($poiData);
        }

        // Handle Media
        $media = Arr::get($request->validated(), "image", null);

        $poi = (new MediaService())->attachOnlyOne($poi, $media, "poi-preview");

        return $poi;
    }

    public function fetchPointsOfInterestByLocations(int $type = 1)
    {
        $locations = Location::tree()
            ->depthFirst()
            ->with([
                "sites" => fn($query) => $query
                    ->where("point_of_interest_type_id", $type)
                    ->withLocationAttribs(),
            ])
            ->get()
            ->toTree();

        return $locations;
    }

    public function fetchPointsOfInterest(int $type = 1)
    {
        $points = PointOfInterest::where(
            "point_of_interest_type_id",
            "=",
            $type
        )
            ->join(
                "locations",
                "point_of_interests.location_id",
                "=",
                "locations.id"
            )
            ->select(
                "point_of_interests.*",
                "locations.name as location_name",
                "locations.color as location_color"
            )
            ->with("location")
            ->get();

        return $points;
    }
}
