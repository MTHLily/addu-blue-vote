<?php

namespace Database\Seeders;

use App\Models\Location;
use App\Models\LocationType;
use Illuminate\Database\Seeder;

class LocationTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types = collect([
            [
                "name" => "Region",
                "children" => [
                    [
                        "name" => "District",
                        "children" => [["name" => "City"]],
                    ],
                ],
            ],
            [
                "name" => "Independent District",
            ],
        ]);

        $types->each(function ($data) {
            $this->recursiveCreate($data);
        });
    }

    private function recursiveCreate(array $data, LocationType $parent = null)
    {
        if ($parent == null) {
            $type = LocationType::create(["name" => $data["name"]]);
        } else {
            $type = $parent->children()->create(["name" => $data["name"]]);
        }
        if (!empty($data["children"])) {
            $children = collect($data["children"]);
            $children->each(function ($child) use ($type) {
                $this->recursiveCreate($child, $type);
            });
        }
        return;
    }
}
