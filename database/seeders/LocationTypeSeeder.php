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
                "positions" => [
                    [
                        "name" => "Governor",
                    ],
                ],
                "children" => [
                    [
                        "name" => "District",
                        "positions" => [
                            [
                                "name" => "Senator",
                            ],
                        ],
                        "children" => [
                            ["name" => "City", "positions" => ["Mayor"]],
                        ],
                    ],
                ],
            ],
            [
                "name" => "Independent District",
                "positions" => [
                    [
                        "name" => "Independent District Senator",
                    ],
                ],
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

        $positions = collect($data["positions"]);
        $positions->each(function ($position) use ($type) {
            $type->positions()->create($position);
        });

        if (!empty($data["children"])) {
            $children = collect($data["children"]);
            $children->each(function ($child) use ($type) {
                $this->recursiveCreate($child, $type);
            });
        }
        return;
    }
}
