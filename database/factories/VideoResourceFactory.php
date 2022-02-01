<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class VideoResourceFactory extends Factory
{
    private static $videoIds = [
        "ErtdxWaxKGA",
        "Opp9nqiN5m0",
        "OADE_5fErgo",
        "hH7e2Ky5l64",
        "NL5ZuWmrisA",
    ];

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $guests = [];
        for ($i = 0; $i < $this->faker->randomDigit(); $i++) {
            $guests[] = $this->faker->name();
        }

        $guests = implode(", ", $guests);

        return [
            "title" => $this->faker->text(20),
            "description" => $this->faker->text(50),
            "information" => $this->faker->text(50),
            "guests" => $guests,
            "link" =>
                "https://www.youtube.com/embed/" .
                $this->faker->randomElement(static::$videoIds),
            "featured" => $this->faker->boolean(5),
        ];
    }
}
