<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class BlueVotePeople extends Model implements HasMedia
{
    use InteractsWithMedia;
    use HasFactory;

    protected $fillable = ["name", "position", "volunteer"];

    public function profilePhoto()
    {
        return $this->morphOne(
            config("media-library.media_model"),
            "model"
        )->ofMany();
    }
}
