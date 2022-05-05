<?php

use App\Models\Candidate;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCandidateBackgroundsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('candidate_backgrounds', function (Blueprint $table) {
            $table->foreignIdFor(Candidate::class)->constrained();
            $table->datetime("start_date");
            $table->datetime("end_date")->nullable();
            $table->string("place")->nullable();
            $table->string("occupation")->nullable();
            $table->string("position")->nullable();
            $table->string("description")->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('candidate_backgrounds');
    }
}
