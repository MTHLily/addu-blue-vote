<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropImageUrls extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table("candidates", function (Blueprint $table) {
            $table->string("slug");
            $table->dropColumn("profile_photo_url");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table("candidates", function (Blueprint $table) {
            $table->string("profile_photo_url");
            $table->dropColumn("slug");
        });
    }
}
