<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLocationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("locations", function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->text("description");
            $table->string("color");
            $table->decimal("longitude", 18, 15);
            $table->decimal("latitude", 18, 15);
            $table
                ->foreignId("parent_location_id")
                ->nullable()
                ->constrained("locations");
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
        Schema::dropIfExists("locations");
    }
}
