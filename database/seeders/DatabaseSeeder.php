<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        DB::table('point_of_interest_types')->insert(
            [
                'type' => 'Registration Site'
            ]
        );

        // \App\Models\User::factory(10)->create();
        \App\Models\FrequentlyAskedQuestion::factory(5)->create();
        \App\Models\InformationSnippet::factory(3)->create();
        \App\Models\District::factory(3)->create();
    }
}
