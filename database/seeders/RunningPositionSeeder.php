<?php

namespace Database\Seeders;

use App\Models\RunningPosition;
use Illuminate\Database\Seeder;

class RunningPositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $independentPositions = collect([
            [
                "name" => "President",
            ],
            [
                "name" => "Vice-President",
            ],
            [
                "name" => "Senator",
            ],
            [
                "name" => "Party List Representative",
            ],
        ]);

        $independentPositions->each(
            fn($position) => RunningPosition::create($position)
        );
    }
}
