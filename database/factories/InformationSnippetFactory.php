<?php

namespace Database\Factories;

use App\Models\InformationSnippet;
use Illuminate\Database\Eloquent\Factories\Factory;

class InformationSnippetFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = InformationSnippet::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' =>$this->faker->sentence(),
            'content' => $this->faker->paragraph()
        ];
    }
}
