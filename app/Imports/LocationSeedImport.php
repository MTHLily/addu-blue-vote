<?php

namespace App\Imports;

use Illuminate\Database\Eloquent\Collection;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class LocationSeedImport implements WithMultipleSheets
{
    use Importable;

    private Collection $locations;

    public function sheets(): array
    {
        dump("Starting imports...");
        return [
            "Region" => new LocationsImport(1, null),
            "Provinces" => new LocationsImport(2, 1),
            "Districts" => new LocationsImport(3, 2),
            "Cities/Municipalities" => new LocationsImport(4, 3),
            "Sites" => new PoIImport(1),
        ];
    }
}
