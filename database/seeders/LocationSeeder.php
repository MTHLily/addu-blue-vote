<?php

namespace Database\Seeders;

use App\Models\LocationType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $regionType = LocationType::where("name", "Region")->first();
        $regions = [
            [
                "name" => "National Capital Region",
                "description" => "Region of the Philippines",
                "color" => "#FFFFFF",
                "longitude" => 125.45522427575,
                "latitude" => 7.1877587124404,
            ],
            [
                "name" => "Cordillera Administrative Region",
                "description" => "Region of the Philippines",
                "color" => "#FFFFFF",
                "longitude" => 125.45522427575,
                "latitude" => 7.1877587124404,
            ],
            [
                "name" => "Bangsamoro",
                "description" => "Region of the Philippines",
                "color" => "#FFFFFF",
                "longitude" => 125.45522427575,
                "latitude" => 7.1877587124404,
            ],
            [
                "name" => "Region I- Ilocos Region",
                "description" => "Region of the Philippines",
                "color" => "#FFFFFF",
                "longitude" => 125.45522427575,
                "latitude" => 7.1877587124404,
            ],
            [
                "name" => "Region II- Cagayan Valley",
                "description" => "Region of the Philippines",
                "color" => "#FFFFFF",
                "longitude" => 125.45522427575,
                "latitude" => 7.1877587124404,
            ],
            [
                "name" => "Region III - Central Luzon",
                "description" => "Region of the Philippines",
                "color" => "#FFFFFF",
                "longitude" => 125.45522427575,
                "latitude" => 7.1877587124404,
            ],
            [
                "name" => "Region IV-A - Calabarzon",
                "description" => "Region of the Philippines",
                "color" => "#FFFFFF",
                "longitude" => 125.45522427575,
                "latitude" => 7.1877587124404,
            ],
            [
                "name" => "Region IV-B - Mimaropa",
                "description" => "Region of the Philippines",
                "color" => "#FFFFFF",
                "longitude" => 125.45522427575,
                "latitude" => 7.1877587124404,
            ],
            [
                "name" => "Region V - Bicol Region",
                "description" => "Region of the Philippines",
                "color" => "#FFFFFF",
                "longitude" => 125.45522427575,
                "latitude" => 7.1877587124404,
            ],
            [
                "name" => "Region VI - Western Visayas",
                "description" => "Region of the Philippines",
                "color" => "#FFFFFF",
                "longitude" => 125.45522427575,
                "latitude" => 7.1877587124404,
            ],
            [
                "name" => "Region VII - Central Visayas",
                "description" => "Region of the Philippines",
                "color" => "#FFFFFF",
                "longitude" => 125.45522427575,
                "latitude" => 7.1877587124404,
            ],
            [
                "name" => "Region VIII - Eastern Visayas",
                "description" => "Region of the Philippines",
                "color" => "#FFFFFF",
                "longitude" => 125.45522427575,
                "latitude" => 7.1877587124404,
            ],
            [
                "name" => "Region IX - Zamboanga Peninsula",
                "description" => "Region of the Philippines",
                "color" => "#FFFFFF",
                "longitude" => 125.45522427575,
                "latitude" => 7.1877587124404,
            ],
            [
                "name" => "Region X - Northern Mindanao",
                "description" => "Region of the Philippines",
                "color" => "#FFFFFF",
                "longitude" => 125.45522427575,
                "latitude" => 7.1877587124404,
            ],
            [
                "name" => "Region XI - Davao Region",
                "description" => "Region of the Philippines",
                "color" => "#FFFFFF",
                "longitude" => 125.45522427575,
                "latitude" => 7.1877587124404,
            ],
            [
                "name" => "Region XII - Soccsksargen",
                "description" => "Region of the Philippines",
                "color" => "#FFFFFF",
                "longitude" => 125.45522427575,
                "latitude" => 7.1877587124404,
            ],
            [
                "name" => "Region XIII - Caraga",
                "description" => "Region of the Philippines",
                "color" => "#FFFFFF",
                "longitude" => 125.45522427575,
                "latitude" => 7.1877587124404,
            ],
        ];

        collect($regions)->each(function ($region) use ($regionType) {
            $regionType
                ->locations()
                ->create(
                    Arr::only($region, [
                        "name",
                        "description",
                        "color",
                        "longitude",
                        "latitude",
                    ])
                );
        });
    }
}
