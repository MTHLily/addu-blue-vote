<?php

namespace App\Imports;

use App\Models\Location;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Arr;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class LocationsImport implements
    ToModel,
    WithHeadingRow,
    WithChunkReading,
    ShouldQueue
{
    private $type_id, $parent_type_id;
    private $locations;

    public function __construct($type_id = 1, $parent_type_id = null)
    {
        $this->type_id = $type_id;
        $this->parent_type_id = $parent_type_id;
        $this->locations = Location::all();
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
        $parent = $this->locations
            ->where("location_type_id", $this->parent_type_id)
            ->where("name", $row["parent_location"])
            ->first();

        $model = $this->locations
            ->where("name", $row["name"])
            ->where("parent_location_id", $parent?->id)
            ->first();

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
        $data["parent_location_id"] = $parent?->id;

        // if ($this->parent_type_id) {
        //     $parent = Location::where([
        //         ["location_type_id", $this->parent_type_id],
        //         ["name", $row["parent_location"]],
        //     ])->first();

        //     $data["parent_location_id"] = $parent?->id;
        // } else {
        //     $data["parent_location_id"] = null;
        // }

        return new Location($data);
    }

    public function chunkSize(): int
    {
        return 1000;
    }
}
