<?php

namespace Database\Seeders;

use App\Models\FrequentlyAskedQuestion;
use Illuminate\Database\Seeder;

class TransitionToFaqTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        FrequentlyAskedQuestion::where("faq_type_id", null)->update([
            "faq_type_id" => 1,
        ]);
    }
}
