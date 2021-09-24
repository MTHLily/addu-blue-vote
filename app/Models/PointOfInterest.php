<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class PointOfInterest extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $appends = ["image_preview_url", "type"];

    // Static Functions
    public static function getTypes()
    {
        return DB::table("point_of_interest_types")->get();
    }

    // Calculated Attirbutes
    public function getImagePreviewUrlAttribute()
    {
        return Storage::url($this->image_url);
    }

    public function getTypeAttribute()
    {
        return DB::table("point_of_interest_types")->find(
            $this->point_of_interest_type_id
        )->type;
    }

    // Relationships
    public function district()
    {
        return $this->belongsTo(District::class);
    }
}
