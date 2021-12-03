<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CandidateBackgroundFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "start_date" => $this->faker->date(),
            "end_date" => $this->faker->date(),
            "place" => $this->faker->words(3, true),
            "occupation" => $this->faker->words(3, true),
            "position" => $this->faker->words(3, true),
            "description" => $this->faker->words(3, true),
            "candidate_background_type_id" => $this->faker->numberBetween(1, 3),
        ];
    }
}
