<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Unmessage>
 */
class UnmessageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "unm_desc" => fake()->sentence(),
            "unm_time" => fake()->time(),
            "unm_vip" => fake()->numberBetween($min = 0, $max = 1)
        ];
    }
}
