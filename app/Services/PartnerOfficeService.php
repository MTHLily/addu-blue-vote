<?php

namespace App\Services;

use App\Models\PartnerOffice;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class PartnerOfficeService
{
    public function updateOrCreate(
        $request,
        PartnerOffice $partnerOffice = null
    ): PartnerOffice {
        $partnerOfficeData = Arr::only($request->validated(), [
            "name",
            "link",
        ]);

        if ($partnerOffice == null) {
            $partnerOffice = PartnerOffice::create($partnerOfficeData);
        } else {
            $partnerOffice->update($partnerOfficeData);
        }


        // Handle Profile Photos
        (new MediaService())->attachOnlyOne(
            $partnerOffice,
            Arr::get($request->validated(), "media"),
            "partner-office-media",
            Str::slug($partnerOffice->name)
        );


        return $partnerOffice;
    }
    public function syncPlatforms(PartnerOffice $partnerOffice, array|Collection $data)
    {
        $data = collect($data);
        $ids = $data
            ->filter(fn($item) => Arr::get($item, "id", false))
            ->pluck("id")
            ->toArray();

        if ($partnerOffice->platforms()->count() > 0) {
            $partnerOffice
                ->platforms()
                ->whereNotIn("id", $ids)
                ->delete();
        }

        $data->each(function ($platform) use ($partnerOffice) {
            $model = $partnerOffice
                ->platforms()
                ->firstOrNew(["id" => Arr::get($platform, "id", null)]);
            $model->fill(Arr::only($platform, ["name", "link"]));
            unset($model->id);
            $model->save();
        });

        return $partnerOffice;
    }
    
}
