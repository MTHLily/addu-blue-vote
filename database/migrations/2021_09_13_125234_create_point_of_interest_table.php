<?php

use App\Models\District;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePointOfInterestTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("point_of_interests", function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->text("description");
            $table->foreignIdFor(District::class)->constrained();
            $table->foreignId("point_of_interest_type_id")->constrained();
            $table->decimal("longitude");
            $table->decimal("latitude");
            $table->string("image_url");
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
        Schema::dropIfExists("point_of_interests");
    }
}
