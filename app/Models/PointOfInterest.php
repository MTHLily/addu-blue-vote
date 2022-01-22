<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class PointOfInterest extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $appends = ["image_preview_url"];

    // Static Functions
    public static function getTypes()
    {
        return DB::table("point_of_interest_types")->get();
    }

    // Calculated Attirbutes
    public function getImagePreviewUrlAttribute()
    {
        if (Storage::exists($this->image_url)) {
            return Storage::url($this->image_url);
        } else {
            return $this->image_url;
        }
    }

    public function type()
    {
        return $this->belongsTo(
            PointOfInterestType::class,
            "point_of_interest_type_id"
        );
    }

    // public function getTypeAttribute()
    // {
    //     return DB::table("point_of_interest_types")->find(
    //         $this->point_of_interest_type_id
    //     )->type;
    // }

    // Relationships
    public function location()
    {
        return $this->belongsTo(Location::class);
    }

    public function scopeWithLocationAttribs(Builder $query): Builder
    {
        return $query
            ->join(
                "locations",
                "point_of_interests.location_id",
                "=",
                "locations.id"
            )
            ->select(
                "point_of_interests.*",
                "locations.name as location_name",
                "locations.color as location_color"
            );
    }
}
