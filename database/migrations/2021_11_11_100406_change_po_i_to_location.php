<?php

use App\Models\District;
use App\Models\Location;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangePoIToLocation extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table("point_of_interests", function (Blueprint $table) {
            $table->foreignIdFor(Location::class)->constrained();
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
            $table->dropConstrainedForeignId("location_id");
        });
    }
}
