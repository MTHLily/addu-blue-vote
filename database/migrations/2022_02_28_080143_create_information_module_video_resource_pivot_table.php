<?php

use App\Models\InformationModule;
use App\Models\VideoResource;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInformationModuleVideoResourcePivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('information_module_video_resource', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(InformationModule::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(VideoResource::class)->constrained()->cascadeOnDelete();
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
        Schema::dropIfExists('information_module_video_resource');
    }
}
