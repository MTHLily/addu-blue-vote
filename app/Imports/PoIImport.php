<?php

namespace App\Imports;

use App\Models\Location;
use App\Models\PointOfInterest;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Arr;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class PoIImport implements
    ToModel,
    WithHeadingRow,
    WithChunkReading,
    ShouldQueue
{
    private int $type_id;
    private Collection $points_of_interests;

    public function __construct(int $type_id = 1)
    {
        $this->type_id = $type_id;
        $this->points_of_interests = PointOfInterest::all();
    }

    public function uniqueBy()
    {
        return "id";
    }

    public function chunkSize(): int
    {
        return 1000;
    }

    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        $model = $this->points_of_interests
            ->where("name", $row["name"])
            ->first();
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
