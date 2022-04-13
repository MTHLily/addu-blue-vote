<?php

namespace Database\Seeders;

use App\Imports\CandidateSeedImport;
use Illuminate\Database\Seeder;

class CandidateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $import = new CandidateSeedImport();
        $path = "public/data/AdDU Blue Vote Locations.xlsx";
        $import->import($path);
    }
}
