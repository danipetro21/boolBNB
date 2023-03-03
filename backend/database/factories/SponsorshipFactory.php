<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Sponsorship>
 */
class SponsorshipFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'cost' => fake() -> randomNumber(3, true),
            'type' => fake() -> words(1, true),
            'duration' => fake() -> numerify(['24', '72', '144']),
        ];
    }
}