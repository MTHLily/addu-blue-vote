<?php

use App\Models\Candidate;
use App\Models\Issue;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ModyCandidateIssueTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table("candidate_issue", function (Blueprint $table) {
            $table->dropConstrainedForeignId("candidate_id");
            $table->dropConstrainedForeignId("issue_id");
        });
        Schema::table("candidate_issue", function (Blueprint $table) {
            $table
                ->foreignIdFor(Candidate::class)
                ->constrained()
                ->onDelete("cascade");
            $table
                ->foreignIdFor(Issue::class)
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
        Schema::table("candidate_issue", function (Blueprint $table) {
            $table->dropConstrainedForeignId("candidate_id");
            $table->dropConstrainedForeignId("issue_id");
        });
        Schema::table("candidate_issue", function (Blueprint $table) {
            $table->foreignIdFor(Candidate::class)->constrained();
            $table->foreignIdFor(Issue::class)->constrained();
        });
    }
}
