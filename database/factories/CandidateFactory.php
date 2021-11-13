<?php

namespace Database\Factories;

use App\Models\Location;
use App\Models\PoliticalParty;
use App\Models\RunningPosition;
use Illuminate\Database\Eloquent\Factories\Factory;

class CandidateFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $position = RunningPosition::inRandomOrder()->first();

        $location = Location::where(
            "location_type_id",
            $position->location_type_id
        )
            ->inRandomOrder()
            ->first();

        return [
            "name" => $this->faker->name(),
            "political_party_id" => PoliticalParty::inRandomOrder()->first()
                ->id,
            "running_position_id" => $position->id,
            "slug" => $this->faker->slug(),
            "location_id" => $location->id,
            "twitter_timeline_feed_url" =>
                "https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw",
        ];
    }
}
