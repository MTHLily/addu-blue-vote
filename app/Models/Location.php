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

    public function sites()
    {
        return $this->hasMany(PointOfInterest::class);
    }

    public static function getTree()
    {
        $regions = Location::where("location_type_id", "1")
            ->where("name", "Region XI - Davao Region")
            ->with([
                "children.children.sites.location",
                "children.children.sites.type",
            ])
            ->get();

        return $regions;
    }

    public static function regions()
    {
        return Location::where("location_type_id", "1");
    }
}
