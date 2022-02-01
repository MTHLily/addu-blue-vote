<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Staudenmeir\LaravelAdjacencyList\Eloquent\HasRecursiveRelationships;

class Location extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia, HasRecursiveRelationships;
    protected $guarded = [];

    public function getParentKeyName()
    {
        return "parent_location_id";
    }

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

    public function candidates()
    {
        return $this->hasMany(Candidate::class);
    }

    public function positions()
    {
        return $this->hasManyThrough(
            RunningPosition::class,
            LocationType::class,
            "location_type_id",
            "location_type_id"
        );
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
