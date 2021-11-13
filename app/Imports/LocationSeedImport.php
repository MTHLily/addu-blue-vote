<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class LocationSeedImport implements WithMultipleSheets
{
    public function sheets(): array
    {
        return [
            "Region" => new LocationsImport(1),
            "Provinces" => new LocationsImport(2, 1),
            "Districts" => new LocationsImport(3, 2),
            "Cities&Municipalities" => new LocationsImport(4, 3),
            "Sites" => new PoIImport(1),
        ];
    }
}
