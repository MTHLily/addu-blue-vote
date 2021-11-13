<?php

namespace App\Imports;

use App\Models\Location;
use App\Models\PointOfInterest;
use Illuminate\Support\Arr;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class PoIImport implements ToModel, WithHeadingRow
{
    private $type_id;

    public function __construct($type_id = 1)
    {
        $this->type_id = $type_id;
    }

    public function uniqueBy()
    {
        return "id";
    }

    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        $model = PointOfInterest::where("name", $row["name"])->first();
        if ($model) {
            return $model;
        }

        $data = Arr::only($row, [
            "name",
            "description",
            "longitude",
            "latitude",
        ]);

        $data["point_of_interest_type_id"] = $this->type_id;

        $loc = Location::where("name", $row["location_name"])->first();
        $data["location_id"] = $loc->id;

        return new PointOfInterest($data);
    }
}
