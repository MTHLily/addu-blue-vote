<?php

namespace Database\Seeders;

use App\Models\CandidateBackgroundType;
use Illuminate\Database\Seeder;

class BackgroundTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types = [
            [
                "name" => "Educational",
                "place_label" => "School/Academy/University",
                "occupation_label" => "Course",
                "position_label" => "College Degree",
                "description_label" => "Awards",
            ],
            [
                "name" => "Political",
                "place_label" => "Place",
                "occupation_label" => "Affiliation",
                "position_label" => "Position",
                "description_label" => "Additional Information",
            ],
            [
                "name" => "Professional",
                "place_label" => "Company/Organization",
                "occupation_label" => "Affiliation",
                "position_label" => "Position",
                "description_label" => "Additional Information",
            ],
        ];

        collect($types)->each(
            fn($type) => CandidateBackgroundType::create($type)
        );
    }
}
