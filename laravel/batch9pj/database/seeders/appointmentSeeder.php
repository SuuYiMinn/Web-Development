<?php

namespace Database\Seeders;

use App\Models\appointment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class appointmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        appointment::factory()->count(90)->create();
    }
}
