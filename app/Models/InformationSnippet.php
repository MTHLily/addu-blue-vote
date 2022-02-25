<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class InformationSnippet extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $fillable = ["title", "content", "link"];

    public function getCoverAttribute()
    {
        if ($this->media) {
            return $this->media->first();
        }
        return $this->media()->first();
    }

    public function getCoverUrlAttribute()
    {
        if ($this->cover) {
            return $this->cover->url;
        } else {
            return null;
        }
    }
}
