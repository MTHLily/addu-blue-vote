<?php

use App\Models\Candidate;
use App\Models\Issue;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CandidateIssue extends Migration
{
   
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("candidate_issue", function (Blueprint $table) {
            $table->foreignIdFor(Candidate::class)->constrained();
            $table->foreignIdFor(Issue::class)->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("candidate_issue");
    }
}
