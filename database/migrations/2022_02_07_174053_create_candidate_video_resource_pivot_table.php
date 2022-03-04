<?php

use App\Models\Candidate;
use App\Models\VideoResource;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCandidateVideoResourcePivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('candidate_video_resource', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Candidate::class)->constrained();
            $table->foreignIdFor(VideoResource::class)->constrained();
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
        Schema::dropIfExists('candidate_video_resource');
    }
}
