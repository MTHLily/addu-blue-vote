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
            $table->string("place");
            $table->string("occupation");
            $table->string("position");
            $table->string("description");

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
