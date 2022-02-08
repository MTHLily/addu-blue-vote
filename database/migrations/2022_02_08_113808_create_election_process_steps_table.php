<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateElectionProcessStepsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("election_process_steps", function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->longText("description");
            $table->integer("position");
            $table->string("primary_color");
            $table->string("secondary_color");
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
        Schema::dropIfExists("election_process_steps");
    }
}
