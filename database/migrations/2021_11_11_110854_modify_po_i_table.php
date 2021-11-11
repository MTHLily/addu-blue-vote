<?php

use App\Models\District;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ModifyPoITable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table("point_of_interests", function (Blueprint $table) {
            $table->dropConstrainedForeignId("district_id");
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
            $table->foreignIdFor(District::class)->constrained();
        });
    }
}
