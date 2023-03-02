<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();

            $table-> string('title', 128);
            $table-> text('description');
            $table-> integer('room_number');
            $table-> integer('bath_number');
            $table-> integer('mq2');
            $table-> string('address', 64);
            $table-> decimal('lat' , 10,8);
            $table-> decimal('lon' , 11,8);
            $table-> string('img' , 64) -> nullable();
            $table-> boolean('visible');
            $table-> decimal('price_per_night', 8,2);
            $table-> integer('bed_number');
            
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
        Schema::dropIfExists('properties');
    }
};
