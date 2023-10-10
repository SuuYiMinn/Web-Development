<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('unmessages', function (Blueprint $table) {
            $table->id();
            $table->string("unm_desc",1024);
            $table->time('unm_time',$precision = 0);
            $table->string('unm_vip',256)->nullable();
            $table->integer("del_flg")->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('unmessages');
    }
};
