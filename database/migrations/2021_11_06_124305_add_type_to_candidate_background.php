<?php

use App\Models\CandidateBackgroundType;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTypeToCandidateBackground extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table("candidate_backgrounds", function (Blueprint $table) {
            $table->foreignIdFor(CandidateBackgroundType::class)->constrained();
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
            $table->dropConstrainedForeignId("candidate_background_type_id");
        });
    }
}
