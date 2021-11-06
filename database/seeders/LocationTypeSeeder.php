<?php

namespace Database\Seeders;

use App\Models\Location;
use App\Models\LocationType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

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
                    [
                        "name" => "Vice Governor",
                    ],
                    [
                        "name" => "Board Member",
                    ],
                ],
                "children" => [
                    [
                        "name" => "District",
                        "requires_parent" => false,
                        "positions" => [
                            [
                                "name" => "Congressman",
                            ],
                        ],
                        "children" => [
                            [
                                "name" => "City",
                                "positions" => [
                                    [
                                        "name" => "Mayor",
                                    ],
                                    [
                                        "name" => "Vice Mayor",
                                    ],
                                    [
                                        "name" => "Counselor",
                                    ],
                                ],
                            ],
                        ],
                    ],
                ],
            ],
            // [
            //     "name" => "Independent District",
            //     "positions" => [
            //         [
            //             "name" => "Independent District Senator",
            //         ],
            //     ],
            // ],
        ]);

        $types->each(function ($data) {
            $this->recursiveCreate($data);
        });
    }

    private function recursiveCreate(array $data, LocationType $parent = null)
    {
        if ($parent == null) {
            $type = LocationType::create(
                Arr::only($data, ["name", "requires_parent"])
            );
        } else {
            $type = $parent
                ->children()
                ->create(Arr::only($data, ["name", "requires_parent"]));
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
