<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnInBugsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('bugs', function (Blueprint $table) {
            $table->string('description')->nullable();
            $table->string('playbackSteps')->nullable();
            $table->string('expectedResult')->nullable();
            $table->string('actualResult')->nullable();
            $table->string('screenshot')->nullable();
            $table->string('bugStatus')->nullable();
            $table->string('seriousness')->nullable();
            $table->string('priority')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('bugs', function (Blueprint $table) {
            $table->dropColumn(['description', 'playbackSteps', 'expectedResult', 'actualResult', 'screenshot', 'bugStatus', 'seriousness', 'priority']);
        });
    }
}
