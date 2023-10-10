<?php

namespace Database\Seeders;

use App\Models\Unmessage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UnmessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Unmessage::factory()->count(100)->create();
    }
}
