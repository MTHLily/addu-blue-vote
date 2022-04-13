<?php

namespace App\Imports;

use App\Models\PoliticalParty;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class PoliticalPartiesImport implements ToCollection, WithHeadingRow
{
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
            if (!$row["name"]) {
                continue;
            }
            PoliticalParty::updateOrCreate(
                [
                    "name" => $row["name"],
                ],
                [
                    "abbreviation" => $row["abbreviation"],
                    "representation" => $row["representation"],
                ]
            );
        }
    }
}
