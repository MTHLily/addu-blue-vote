<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class PartnerOffice extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    //protected $guarded = [];

    protected $fillable = ["name", "link"];

    // Picture Conversions
    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion("thumb")
            ->width(100)
            ->height(100)
            ->sharpen(10);
    }

    public function getProfilePhotoUrlAttribute()
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

    public function profilePhoto()
    {
        return $this->morphOne(config("media-library.media_model"), "model")
            ->where("collection_name", "partner-office-media")
            ->ofMany();
    }
}
