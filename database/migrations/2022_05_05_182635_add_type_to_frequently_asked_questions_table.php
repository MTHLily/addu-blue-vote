<?php

use App\Models\FAQType;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTypeToFrequentlyAskedQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('frequently_asked_questions', function (Blueprint $table) {
            $table->foreignIdFor(FAQType::class)->nullable()->constrained(); 

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('frequently_asked_questions', function (Blueprint $table) {
            $table->dropConstrainedForeignId("faq_type_id");

        });
    }
}
