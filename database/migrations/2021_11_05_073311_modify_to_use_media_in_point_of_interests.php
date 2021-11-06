<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ModifyToUseMediaInPointOfInterests extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table("point_of_interests", function (Blueprint $table) {
            $table->dropColumn("image_url");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table("point_of_interests", function (Blueprint $table) {
            $table->string("image_url")->nullable();
        });
    }
}
