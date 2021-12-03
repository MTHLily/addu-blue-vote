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
        $import = new LocationSeedImport();
        $path = "public/data/AdDU Blue Vote Locations.xlsx";

        $import->onlySheets(
            "Region"
            // "Provinces",
            // "Districts",
            // "Cities",
            // "Sites"
        );
        Excel::import($import, $path);
        $import->onlySheets("Provinces");
        Excel::import($import, $path);
        $import->onlySheets("Districts");
        Excel::import($import, $path);
        $import->onlySheets("Cities");
        Excel::import($import, $path);
        $import->onlySheets("Sites");
        Excel::import($import, $path);
    }
}
