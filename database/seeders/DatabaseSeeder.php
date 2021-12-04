<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        DB::table("point_of_interests")->truncate();
        DB::table("point_of_interest_types")->insert([
            "type" => "Registration Site",
        ]);

        DB::table("information_snippets")->truncate();
        DB::table("information_snippets")->insert([
            "title" => "AdDU Blue Vote",
            "content" =>
                "Official website of the Ateneo de Davao University Blue Vote Campaign",
        ]);

        DB::table("users")->truncate();
        DB::table("users")->insert([
            "name" => config("admin.user"),
            "email" => config("admin.email"),
            "password" => bcrypt(config("admin.pass")),
        ]);

        $this->call([
            //DistrictSeeder::class,
            FrequentlyAskedQuestionSeeder::class,
            NewsSourceSeeder::class,
            LocationTypeSeeder::class,
            RunningPositionSeeder::class,
            PoliticalPartySeeder::class,
            BackgroundTypeSeeder::class,
            // LocationSeeder::class,
        ]);
    }
}
