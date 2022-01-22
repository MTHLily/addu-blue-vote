<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOnDeleteCascadeToParentsInLocationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table("locations", function (Blueprint $table) {
            $table->dropForeign("locations_parent_location_id_foreign");
            $table
                ->foreign("parent_location_id")
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
        Schema::table("locations", function (Blueprint $table) {
            $table->dropForeign("locations_parent_location_id_foreign");
            $table
                ->foreign("parent_location_id")
                ->references("id")
                ->on("locations");
        });
    }
}
