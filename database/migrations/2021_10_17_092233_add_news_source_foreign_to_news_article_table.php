<?php

use App\Models\NewsSource;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewsSourceForeignToNewsArticleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table("news_articles", function (Blueprint $table) {
            $table->foreignIdFor(NewsSource::class)->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table("news_articles", function (Blueprint $table) {
            $table->dropConstrainedForeignId("news_source_id");
        });
    }
}
