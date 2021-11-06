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
}
