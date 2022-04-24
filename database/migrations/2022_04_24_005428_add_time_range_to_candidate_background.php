<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTimeRangeToCandidateBackground extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table("candidate_backgrounds", function (Blueprint $table) {
            $table->string("time_range")->nullable();
            $table
                ->datetime("start_date")
                ->nullable()
                ->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table("candidate_backgrounds", function (Blueprint $table) {
            $table->dropColumn("time_range");
            $table->datetime("start_date")->change();
        });
    }
}
