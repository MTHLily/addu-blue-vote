<?php

namespace App\Imports;

use App\Models\Candidate;
use App\Models\CandidateBackground;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Events\BeforeSheet;

class CandidateBackgroundsImport implements
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

    private static Collection $parties, $locations, $positions;
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
            switch ($row["background_type"]) {
                case "Educational":
                    $bg_id = 1;
                    break;
                case "Political":
                    $bg_id = 2;
                    break;
                case "Professional":
                    $bg_id = 3;
                    break;
                default:
                    $bg_id = null;
            }
            if (!$bg_id) {
                continue;
            }
            $data = [
                "candidate_id" => $candidate_id,
                "candidate_background_type_id" => $bg_id,
                "place" => $row["place"] ?? "",
                "occupation" => $row["occupation"] ?? "",
                "position" => $row["position"] ?? "",
                "description" => $row["description"] ?? "",
            ];

            $bg = CandidateBackground::updateOrCreate(
                [
                    "start_date" => $row["start_date_yyyy_mm"] ?? now(),
                    "end_date" => $row["end_date_yyyy_mm"] ?? now(),
                ],
                $data
            );
        }
    }
}
