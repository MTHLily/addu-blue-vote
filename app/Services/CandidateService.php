<?php

namespace App\Services;

use App\Models\Candidate;
use Illuminate\Support\Arr;

class CandidateService
{
    public function updateOrCreate(
        $request,
        Candidate $candidate = null
    ): Candidate {
        $candidateData = Arr::only($request->validated(), [
            "name",
            "slug",
            "political_party_id",
            "running_position_id",
            "location_id",
            "twitter_timeline_feed_url",
        ]);

        if ($candidate == null) {
            $candidate = Candidate::create($candidateData);
        } else {
            $candidate->update($candidateData);
        }

        // Handle Candidate Backgrounds
        $background = collect(
            Arr::get($request->validated(), "background", [])
        );

        $candidate
            ->background()
            ->whereNotIn("id", $background->pluck("id"))
            ->delete();

        $background->each(function ($bg) use ($candidate) {
            $candidate
                ->background()
                ->updateOrCreate(["id" => Arr::get($bg, "id", null)], $bg);
        });

        // Handle Profile Photos
        (new MediaService())->attachOnlyOne(
            $candidate,
            Arr::get($request->validated(), "media"),
            "candidate-profile-photos"
        );

        // Handle Issue Stances
        $stances = collect(Arr::get($request->validated(), "stances", []));
        $records = $stances->mapWithKeys(function ($stance) {
            return [
                $stance["issue_id"] => Arr::only($stance, ["positive"]),
            ];
        });
        $candidate->stances()->sync($records);

        return $candidate;
    }
}