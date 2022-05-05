<?php

namespace App\Imports;

use App\Models\Location;
use App\Models\PointOfInterest;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Collection;
use Illuminate\Support\Arr;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class PoIImport implements
    ToCollection,
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

    public function collection(Collection $rows)
    {
	foreach ($rows as $row)
	{
		if(!Arr::get($row, "site", false)){
		continue;
	}
        $model = $this->points_of_interests
            ->where("name", Arr::get($row, "site", "xxx"))
            ->first();

        $data = Arr::only($row->toArray(), [
            "description",
            "longitude",
            "latitude",
	]);
	$data["name"] = $row["site"];

        $data["point_of_interest_type_id"] = $this->type_id;
        $loc = Location::where("name", Arr::get($row, "location_id", "xxx"))->first();
	dump($row);
	$data["location_id"] = $loc->id;
	PointOfInterest::create($data);
	}
    }

    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {

        $model = $this->points_of_interests
            ->where("name", Arr::get($row, "name", "xxx"))
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

        $loc = Location::where("name", Arr::get($row, "location_name", "xxx"))->first();
	if(!$loc) {
		return null;
	}
	$data["location_id"] = $loc->id;

        return new PointOfInterest($data);
    }
}
