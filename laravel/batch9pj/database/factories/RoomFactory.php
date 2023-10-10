<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Room>
 */
class RoomFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
           "r_status" => fake()->numberBetween($min = 0, $max = 2),
           "r_person" => fake()->numberBetween($min = 1, $max = 4),
           "r_price" => fake()->numberBetween ($min = 100, $max = 900)
        ];
    }
}
