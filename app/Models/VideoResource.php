<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VideoResource extends Model
{
    
    public function relatedCandidate()
    {
        return $this->belongsToMany(Candidate::class);
    }  

    public function relatedInformationModule()
    {
        return $this->belongsToMany(InformationModule::class);
    }  

    use HasFactory;
    protected $guarded = [];
    protected $casts = [
        "featured" => "boolean",
    ];
}
