<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Location extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;
    protected $guarded = [];

    public function children()
    {
        return $this->hasMany(Location::class, "parent_location_id");
    }

    public function parent()
    {
        return $this->belongsTo(Location::class, "parent_location_id");
    }

    public function type()
    {
        return $this->belongsTo(LocationType::class, "location_type_id");
    }
}
