<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInformationModulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('information_modules', function (Blueprint $table) {
            $table->id();
            $table->string("description");
            $table->string("related_media");
            $table->string("related_video");
            $table->string("speakers");
            $table->boolean("featured")->default(false);
            $table->string("downloadables");
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
        Schema::dropIfExists('information_modules');
    }
}
