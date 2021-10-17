<?php

use App\Models\NewsArticle;
use App\Models\NewsTag;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsArticleNewsTagPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("news_article_news_tag", function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(NewsArticle::class)->constrained();
            $table->foreignIdFor(NewsTag::class)->constrained();
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
        Schema::dropIfExists("news_article_news_tag");
    }
}
