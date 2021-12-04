<?php

namespace App\Imports;

use App\Models\Location;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Events\BeforeSheet;

class LocationsImport implements
    ToModel,
    WithHeadingRow,
    WithEvents,
    WithChunkReading,
    ShouldQueue
{
    use RegistersEventListeners;

    private static Collection $locations;

    protected int|null $parent_type_id;
    protected int $type_id;

    public function __construct(int $type_id = 1, int $parent_type_id = null)
    {
        $this->type_id = $type_id;
        $this->parent_type_id = $parent_type_id;
    }

    public static function beforeSheet(BeforeSheet $event): void
    {
        self::$locations = Location::all();
        dump("Getting locations...", self::$locations);
    }

    public function uniqueBy(): string
    {
        return "id";
    }

    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row): Location
    {
        dump("Finding model...");
        $parent = self::$locations
            ->where("location_type_id", $this->parent_type_id)
            ->where("name", $row["parent_location"])
            ->first();

        $model = self::$locations
            ->where("name", $row["name"])
            ->where("parent_location_id", $parent?->id)
            ->first();

        if ($model) {
            dump("Model found!" . $model->name);
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
        $data["slug"] = Str::slug($row["name"]);

        $loc = new Location($data);

        dump("Model not found, creating new model!", $loc);

        return $loc;
    }

    public function chunkSize(): int
    {
        return 1000;
    }
}
