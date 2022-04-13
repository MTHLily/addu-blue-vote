<?php

namespace App\Imports;

use App\Models\Candidate;
use App\Models\CandidatePlatform;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Events\BeforeSheet;

class CandidatePlatformsImport implements
    ToCollection,
    WithHeadingRow,
    WithEvents
{
    use RegistersEventListeners;
    private static Collection $candidates;

    public static function beforeSheet(BeforeSheet $event)
    {
        self::$candidates = Candidate::all();
    }

    /**
     * @param Collection $collection
     */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
            $candidate_id = self::$candidates
                ->where("name", "=", $row["candidate_name"])
                ->first()?->id;
            if (!$candidate_id) {
                continue;
            }
            $data = [
                "title" => $row["title"] ?? "",
                "candidate_id" => $candidate_id,
                "description" => $row["description"],
            ];

            CandidatePlatform::create($data);
        }
    }
}
