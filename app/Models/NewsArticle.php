<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsArticle extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function newsSource()
    {
        return $this->belongsTo(NewsSource::class);
    }

    public function relatedCandidates()
    {
        return $this->belongsToMany(Candidate::class);
    }
}
