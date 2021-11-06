<?php

use App\Models\Candidate;
use App\Models\NewsArticle;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CandidateNewsArticle extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("candidate_news_article", function (Blueprint $table) {
            $table->foreignIdFor(Candidate::class)->constrained();
            $table->foreignIdFor(NewsArticle::class)->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("candidate_news_article");
    }
}
