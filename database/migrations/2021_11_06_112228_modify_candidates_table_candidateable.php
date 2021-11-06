<?php

use App\Models\Location;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ModifyCandidatesTableCandidateable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table("candidates", function (Blueprint $table) {
            $table->dropMorphs("candidate_location");
            $table
                ->foreignIdFor(Location::class)
                ->constrained()
                ->onDelete("cascade");
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
            $table->morphs("candidate_location");
            $table->dropConstrainedForeignId("location_id");
        });
    }
}
