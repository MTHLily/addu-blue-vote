<?php

namespace App\Imports;

use App\Models\Candidate;
use App\Models\Location;
use App\Models\PoliticalParty;
use App\Models\RunningPosition;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Events\BeforeSheet;

class CandidatesImport implements ToCollection, WithHeadingRow, WithEvents
{
    use RegistersEventListeners;

    private static Collection $parties, $locations, $positions;

    public static function beforeSheet(BeforeSheet $event)
    {
        self::$parties = PoliticalParty::all();
        self::$locations = Location::all();
        self::$positions = RunningPosition::all();
    }

    /**
     * @param Collection $collection
     */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
            if (!$row["name"]) {
                continue;
            }
            $position_id = self::$positions
                ->where("name", "=", $row["position"])
                ->first()?->id;
            $party_id = self::$parties
                ->where("name", "=", $row["political_party"])
                ->first()?->id;
            $location_id = self::$locations
                ->where("name", "=", $row["location"])
                ->first()?->id;
            $data = [
                "slug" => $row["slug"] ?? Str::slug($row["name"]),
                "running_position_id" => $position_id ?? 1,
                "political_party_id" => $party_id ?? 1,
                "location_id" => $location_id,
                "twitter_timeline_feed_url" => $row["twitter_feed_url"],
                "keywords" => $row["keywords"],
            ];

            Candidate::updateOrCreate(
                [
                    "name" => $row["name"],
                ],
                $data
            );
        }
    }
}
