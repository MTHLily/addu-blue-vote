<?php

namespace App\Services;

use App\Models\BlueVotePeople;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class BlueVotePersonService
{
    public function updateOrCreate($request, BlueVotePeople $person = null)
    {
        $data = $request->validated();

        if ($person !== null) {
            $person->update(
                Arr::only($data, ["name", "position", "volunteer"])
            );
            $person->refresh();
        } else {
            $person = BlueVotePeople::create(
                Arr::only($data, ["name", "position", "volunteer"])
            );
        }

        (new MediaService())->attachOnlyOne(
            $person,
            Arr::get($data, "profile_photo"),
            "bluevote-people-photos",
            Str::slug($person->name)
        );

        return $person;
    }
}
