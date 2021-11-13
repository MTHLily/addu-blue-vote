<?php

namespace Database\Seeders;

use App\Imports\LocationSeedImport;
use Illuminate\Database\Seeder;
use Maatwebsite\Excel\Facades\Excel;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Excel::import(
            new LocationSeedImport(),
            "data/AdDU Blue Vote Locations.xlsx"
        );
    }
}
