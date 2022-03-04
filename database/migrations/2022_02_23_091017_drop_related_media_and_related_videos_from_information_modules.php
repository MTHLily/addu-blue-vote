<?php
use App\Models\InformationModule;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropRelatedMediaAndRelatedVideosFromInformationModules extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('information_modules', function (Blueprint $table) {
            $table->dropColumn('related_media');
            $table->dropColumn('related_video');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('information_modules', function (Blueprint $table) {
            //
        });
    }
}
