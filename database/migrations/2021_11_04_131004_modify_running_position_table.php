<?php

use App\Models\Location;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ModifyRunningPositionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table("running_positions", function (Blueprint $table) {
            $table->dropColumn("model_type");
            $table
                ->foreignIdFor(Location::class)
                ->nullable()
                ->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table("running_positions", function (Blueprint $table) {
            $table->string("model_type");
            $table->dropConstrainedForeignId("location_id");
        });
    }
}
