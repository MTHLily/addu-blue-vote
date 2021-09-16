<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class PointOfInterest extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $appends = ['image_preview_url'];

    public function getImagePreviewUrlAttribute(){
        // return asset($this->image_url);
        return str_replace( 'public/', 'storage/', $this->image_url,);
    }

    public static function getTypes(){
        return DB::table('point_of_interest_types')->get();
    }
}
