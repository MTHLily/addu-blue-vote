<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Candidate extends Model implements HasMedia
{
    use InteractsWithMedia;
    use HasFactory;
    protected $guarded = [];

    public function background()
    {
        return $this->hasMany(CandidateBackground::class);
    }

    public function educationalBackground()
    {
        return $this->background()->where("candidate_background_type_id", 1);
    }

    public function politicalBackground()
    {
        return $this->background()->where("candidate_background_type_id", 2);
    }

    public function professionalBackground()
    {
        return $this->background()->where("candidate_background_type_id", 3);
    }

    public function stances()
    {
        return $this->belongsToMany(Issue::class)->withPivot("positive");
    }

    public function runningPosition()
    {
        return $this->belongsTo(RunningPosition::class);
    }

    public function location()
    {
        return $this->belongsTo(Location::class);
    }

    public function politicalParty()
    {
        return $this->belongsTo(PoliticalParty::class);
    }

    // Picture Conversions
    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion("thumb")
            ->width(100)
            ->height(100)
            ->sharpen(10);
    }

    public function getMediaUrlsAttribute()
    {
        return $this->media->map(function ($media) {
            return [
                "id" => $media->id,
                "url" => $media->getUrl(),
                "thumbnailUrl" => $media->getUrl("thumb"),
            ];
        });
    }
}
