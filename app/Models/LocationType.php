<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LocationType extends Model
{
    use HasFactory;

    public function children()
    {
        return $this->hasMany(LocationType::class, "parent_type_id");
    }

    public function parent()
    {
        return $this->belongsTo(LocationType::class, "parent_type_id");
    }

    public function locations()
    {
        return $this->hasMany(Location::class);
    }
}
