<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\appointment>
 */
class appointmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "a_name" =>fake()->name(),
            "a_room" =>fake()->numerify("###"),
            "a_date" =>fake()->date($format = 'Y/m/d'),
            "a_time" =>fake()->time($format = 'H:i'),
            // "am_pm" =>fake()->amPm()
            

        ];
    }
}
