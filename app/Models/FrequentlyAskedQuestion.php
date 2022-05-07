<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FrequentlyAskedQuestion extends Model
{
    use HasFactory;
    protected $fillable = ["question", "answer", "faq_type_id"];

    public function scopeVotersRegistration($query)
    {
        return $query->where("faq_type_id", 1);
    }
    public function scopeVotersEducation($query)
    {
        return $query->where("faq_type_id", 2);
    }
}
