<?php

namespace App\Models;

use App\Models\Media\BlueVoteMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class InformationModule extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = ["title", "description", "speakers", "featured"];
    protected $casts = [
        "featured" => "boolean",
    ];

    public function relatedVideoResources()
    {
        return $this->belongsToMany(VideoResource::class);
    }

    public function relatedMedia()
    {
        return $this->media();
    }

    public function downloadables()
    {
        return $this->media()->where(
            "collection_name",
            "information-module-files"
        );
    }

    public function cover()
    {
        return $this->morphOne(BlueVoteMedia::class, "model")->where(
            "collection_name",
            "information-module-covers"
        );
    }

    public function getRelatedMediaUrlAttribute()
    {
        return $this->media
            ->map(function ($media) {
                return $media->getUrl();
            })
            ->first();
    }

    public function getMediaUrlsAttribute()
    {
        return $this->media->map(function ($media) {
            return [
                "id" => $media->id,
                "url" => asset($media->getUrl()),
            ];
        });
    }
}
