<?php

use App\Models\PoliticalParty;
use App\Models\RunningPosition;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddToCandidateTableForeignKeys extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('candidates', function(Blueprint $table){
            $table->foreignIdFor(PoliticalParty::class)->constrained();
            $table->foreignIdFor(RunningPosition::class)->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('candidates', function(Blueprint $table){
            $table->dropConstrainedForeignId('political_party_id')->constrained();
          $table->dropConstrainedForeignId('running_position_id')->constrained();
          });
    }
}
