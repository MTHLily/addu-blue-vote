<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RelatedMedia extends Model
{

    use HasFactory;
    protected $guarded = [];
    protected $casts = [
        "featured" => "boolean",
    ];

  /*  public function relatedInformationModule()
    {
        return $this->belongsTo(InformationModule::class);
    }*/
}
