<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CascadeDeleteOnPoi extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table("point_of_interests", function (Blueprint $table) {
            $table->dropForeign("point_of_interests_location_id_foreign");
            $table
                ->foreign("location_id")
                ->references("id")
                ->on("locations")
                ->cascadeOnDelete();
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
            $table->dropForeign("point_of_interests_location_id_foreign");
            $table
                ->foreign("location_id")
                ->references("id")
                ->on("locations")
                ->cascadeOnDelete();
        });
    }
}
