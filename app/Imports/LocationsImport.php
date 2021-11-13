<?php

namespace App\Imports;

use App\Models\Location;
use Illuminate\Support\Arr;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class LocationsImport implements ToModel, WithHeadingRow
{
    private $type_id, $parent_type_id;

    public function __construct($type_id = 1, $parent_type_id = null)
    {
        $this->type_id = $type_id;
        $this->parent_type_id = $parent_type_id;
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
        $model = Location::where("name", $row["name"])->first();
        if ($model) {
            return $model;
        }

        $data = Arr::only($row, [
            "name",
            "description",
            "longitude",
            "latitude",
            "color",
        ]);

        $data["location_type_id"] = $this->type_id;

        if ($this->parent_type_id) {
            $parent = Location::where([
                ["location_type_id", $this->parent_type_id],
                ["name", $row["parent_location"]],
            ])->first();

            $data["parent_location_id"] = $parent?->id;
        } else {
            $data["parent_location_id"] = null;
        }

        return new Location($data);
    }
}
