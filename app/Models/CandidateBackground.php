<?php

namespace App\Models;

use App\Casts\UnixMillisecondCarbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CandidateBackground extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $casts = [
        "start_date" => UnixMillisecondCarbon::class,
        "end_date" => UnixMillisecondCarbon::class,
    ];
}
