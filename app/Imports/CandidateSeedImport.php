<?php

namespace App\Imports;

use App\Models\CandidateBackground;
use App\Models\CandidatePlatform;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Events\BeforeSheet;

class CandidateSeedImport implements WithMultipleSheets
{
    use Importable;

    public function sheets(): array
    {
        CandidateBackground::truncate();
        CandidatePlatform::truncate();

        return [
            "Political Parties" => new PoliticalPartiesImport(),
            "Candidates" => new CandidatesImport(),
            "Candidate Backgrounds" => new CandidateBackgroundsImport(),
            "Candidate Platforms" => new CandidatePlatformsImport(),
        ];
    }
}
