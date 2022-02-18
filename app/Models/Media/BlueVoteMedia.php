<?php

namespace App\Models\Media;

use Spatie\MediaLibrary\MediaCollections\Models\Media;

class BlueVoteMedia extends Media
{
    protected $appends = ["url"];

    public function getUrlAttribute()
    {
        return $this->getUrl();
    }
}
