<?php

namespace Database\Seeders;

use App\Models\PoliticalParty;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

class PoliticalPartySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $parties = collect([
            [
                "name" => "Agricultural Sector Alliance of the Philippines",
                "short" => "AGAP",
                "sector" => "Farmers and fisherfolk",
            ],
            [
                "name" => "Kabalikat ng Mamamayan",
                "short" => "Kabayan Party-list",
                "sector" => "Multi-sectoral",
            ],
            [
                "name" => "An Waray",
                "short" => "An Waray",
                "sector" => "Visayas",
            ],
        ]);

        $parties->each(
            fn($party) => PoliticalParty::create(Arr::only($party, ["name"]))
        );
    }
}
