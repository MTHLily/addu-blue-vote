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
                "provinces" => [
                    [
                        "name" => "Davao de Oro",
                        "description" => "Region of the Philippines",
                        "color" => "#ff3232",
                        "latitude" => "7.50993117",
                        "longitude" => "125.9226537",
                        "logo_url" => "/images/District Logos/Davao de Oro.png",

                        "districts" => [
                            [
                                "name" => "Davao de Oro - 1st District",
                                "description" => "District",
                                "color" => "#ff3232",
                                "latitude" => "7.50993117",
                                "longitude" => "125.9226537",
                                "logo_url" =>
                                    "/images/District Logos/Davao de Oro.png",

                                "sites" => [
                                    [
                                        "name" => "Compostela",
                                        "description" =>
                                            "Compostela Municipal Hall, National Road, Compostela, Davao de Oro ",
                                        "latitude" => "7.668177446",
                                        "longitude" => "126.0855942",
                                        "point_of_interest_type_id" => 1,
                                    ],
                                    [
                                        "name" => "Laak",
                                        "description" =>
                                            "Laak Municipal Hall, Asuncion-San Isidro-Laak-Veruela Road, Laak, Davao de Oro ",
                                        "latitude" => "7.819321289",
                                        "longitude" => "125.7931673",
                                        "point_of_interest_type_id" => 1,
                                    ],
                                    [
                                        "name" => "Mabini",
                                        "description" =>
                                            "Mabini Municipal Hall, Surigao-Davao Coastal Road, Mabini, Davao de Oro ",
                                        "latitude" => "7.309820844",
                                        "longitude" => "125.8553907",
                                        "point_of_interest_type_id" => 1,
                                    ],
                                    [
                                        "name" => "Maco",
                                        "description" =>
                                            "Maco Municipal Hall, Maco, Davao de Oro ",
                                        "latitude" => "7.370604437",
                                        "longitude" => "125.8620769",
                                        "point_of_interest_type_id" => 1,
                                    ],
                                    [
                                        "name" => "Maragusan",
                                        "description" =>
                                            "Maragusan Municipal Gymnasium, Poblacion, Davao de Oro ",
                                        "latitude" => "7.318022775",
                                        "longitude" => "126.1247323",
                                        "point_of_interest_type_id" => 1,
                                    ],
                                    [
                                        "name" => "Mawab",
                                        "description" =>
                                            "Mawab Municipal Hall, Mawab, Davao de Oro ",
                                        "latitude" => "7.50993117",
                                        "longitude" => "125.9226537",
                                        "point_of_interest_type_id" => 1,
                                    ],
                                    [
                                        "name" => "Monkayo",
                                        "description" =>
                                            "Monkayo Municipal Hall, LS, Sarmiento St., Monkayo, Davao de Oro ",
                                        "latitude" => "7.824401973",
                                        "longitude" => "126.0541731",
                                        "point_of_interest_type_id" => 1,
                                    ],
                                    [
                                        "name" => "Montevista",
                                        "description" =>
                                            "Montevista Municipal Hall, Pan-Philippine Highway, Davao de Oro ",
                                        "latitude" => "7.704554663",
                                        "longitude" => "125.9885213",
                                        "point_of_interest_type_id" => 1,
                                    ],
                                    [
                                        "name" => "Nabuntaran",
                                        "description" =>
                                            "Municipal Health Office of Nabunturan,  Nabunturan, 8800 Compostela Valley, Davao de Oro",
                                        "latitude" => "7.6035221296833955",
                                        "longitude" => "125.96931732410262",
                                        "point_of_interest_type_id" => 1,
                                    ],
                                    [
                                        "name" => "New Bataan",
                                        "description" =>
                                            "New Bataan Municipal Hall, L A Espanola Ave, New Bataan, Davao de Oro ",
                                        "latitude" => "7.54876254",
                                        "longitude" => "126.1375616",
                                        "point_of_interest_type_id" => 1,
                                    ],
                                    [
                                        "name" => "Pantukan",
                                        "description" =>
                                            "Pantukan Municipal Hall, Surigao - Davao Coastal Road, Pantukan, Davao de Oro ",
                                        "latitude" => "7.127218068",
                                        "longitude" => "125.8983279",
                                        "point_of_interest_type_id" => 1,
                                    ],
                                ],
                            ],
                        ],
                    ],
                    [
                        "name" => "Davao del Norte",
                        "description" => "Region of the Philippines",
                        "color" => "#ff3232",
                        "latitude" => "7.50993117",
                        "longitude" => "125.9226537",
                        "logo_url" => "/images/District Logos/Davao de Oro.png",
                    ],
                    [
                        "name" => "Davao del Sur",
                        "description" => "Region of the Philippines",
                        "color" => "#ff3232",
                        "latitude" => "7.50993117",
                        "longitude" => "125.9226537",
                        "logo_url" => "/images/District Logos/Davao de Oro.png",
                    ],
                    [
                        "name" => "Davao Occidental",
                        "description" => "Region of the Philippines",
                        "color" => "#ff3232",
                        "latitude" => "7.50993117",
                        "longitude" => "125.9226537",
                        "logo_url" => "/images/District Logos/Davao de Oro.png",
                    ],
                    [
                        "name" => "Davao Oriental",
                        "description" => "Region of the Philippines",
                        "color" => "#ff3232",
                        "latitude" => "7.50993117",
                        "longitude" => "125.9226537",
                        "logo_url" => "/images/District Logos/Davao de Oro.png",
                    ],
                ],
                "districts" => [
                    [
                        "name" => "Davao City",
                        "description" => "Independent City District",
                        "color" => "#ff3232",
                        "longitude" => 125.45522427575,
                        "latitude" => 7.1877587124404,
                        "logo_url" => "/images/District Logos/Davao City.png",
                        "sites" => [
                            [
                                "name" => "Davao City",
                                "description" =>
                                    "Commission on Elections Office, Ramon Magsaysay Ave, Ramon Magsaysay Park, Davao City, 8000 Davao del Sur",
                                "latitude" => "7.0768944670836795",
                                "longitude" => "125.64046020683766",
                                "point_of_interest_type_id" => 1,
                            ],
                        ],
                    ],
                ],
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
