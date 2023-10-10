<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Drug>
 */
class DrugFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "d_name" =>fake()->name(),
            "d_weight" =>fake()->numberBetween($min = 1, $max = 200),
            "d_quantity" =>fake()->numberBetween($min = 0, $max = 1000),
            "d_price" =>fake()->numberBetween($min = 1, $max = 100)
        ];
    }
}
