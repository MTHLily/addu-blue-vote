<?php

namespace App\Services;

use Illuminate\Support\Arr;

class RelatedMediaService
{
    public function validate( $request){
        $request->validate([
            'related_media' => 'array',
            'related_media.*.id' => 'required',
            'related_media.*.media' => 'nullable',
        ]);
    }

    public function syncRelatedMedia($module, $data){
        $data = collect($data);

        $idsIncluded = $data->filter(fn($item) => Arr::get($item, 'id', false))->pluck('id')->toArray();
        $module->relatedMedia()->whereNotIn('id', $idsIncluded)->delete();

        $data->each( function($media) use ($module){
            $model = BlueVoteMedia::find($media['id']);
            if($model != null)
                return;
            $module->addMedia($media['file'])->toMediaCollection('information-module-files');
        });
    }
   
}
