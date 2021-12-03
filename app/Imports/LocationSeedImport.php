<?php

namespace App\Imports;

use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithConditionalSheets;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class LocationSeedImport implements WithMultipleSheets
{
    use WithConditionalSheets;

    public function conditionalSheets(): array
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
