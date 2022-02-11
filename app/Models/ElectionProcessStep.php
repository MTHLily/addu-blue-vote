<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Rutorika\Sortable\SortableTrait;

class ElectionProcessStep extends Model
{
    use HasFactory;
    use SortableTrait;

    protected $fillable = [
        "title",
        "description",
        "primary_color",
        "secondary_color",
        "position",
    ];
}
