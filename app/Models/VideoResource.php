<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VideoResource extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $casts = [
        "featured" => "boolean",
    ];
}