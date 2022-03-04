<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class InformationModule extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'description',
        'speakers',
        'featured',
        'downloadables',
    ];
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

    public function getRelatedMediaUrlAttribute()
    {
        return $this->media
            ->map(function ($media) {
                return [
                    "id" => $media->id,
                    "url" => asset($media->getUrl()),
                    "thumbnailUrl" => $media->getUrl("thumb"),
                ];
            })
            ->first();
    }

    public function getMediaUrlsAttribute()
    {
        return $this->media->map(function ($media) {
            return [
                "id" => $media->id,
                "url" => asset($media->getUrl()),
                "thumbnailUrl" => $media->getUrl("thumb"),
            ];
        });
    }
}
