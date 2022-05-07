<?php

namespace Database\Seeders;

use App\Models\FaqType;
use Illuminate\Database\Seeder;

class FAQTypeSeeder extends Seeder
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
                "name" => "Voter Registration",
            ],
            [
                "name" => "Voter Education",
            ],

        ];

        collect($types)->each(
            fn($type) => FaqType::create($type)
        );
    }
}
