<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ModifyPositionOfPointsOfInterest extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('point_of_interests', function (Blueprint $table) {
            $table->decimal('longitude', 18, 15)->change();
            $table->decimal('latitude', 18, 15)->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('point_of_interests', function (Blueprint $table) {
            //
        });
    }
}
