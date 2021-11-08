<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPositiveToCandidateIssueTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table("candidate_issue", function (Blueprint $table) {
            $table->boolean("positive");
            $table->string("positive_string")->nullable();
            $table->string("negative_string")->nullable();
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
            $table->dropColumn("positive");
            $table->dropColumn("positive_string");
            $table->dropColumn("negative_string");
        });
    }
}
