<?php

namespace Database\Seeders;

use App\Models\NewsSource;
use Illuminate\Database\Seeder;

class NewsSourceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sources = [
            "ABS-CBN" => "https://news.abs-cbn.com/",
            "Rappler" => "https://www.rappler.com/",
            "Phil-Star" => "https://www.philstar.com/",
            "Comelec" => "https://comelec.gov.ph/",
            "Manila Times" => "https://www.manilatimes.net/",
            "CNN Philippines" => "https://cnnphilippines.com/",
            "Inquirer.net" => "https://www.inquirer.net/",
            "GMA News" => "https://www.gmanetwork.com/news/",
            "TV5" => "https://news.tv5.com.ph/",
        ];

        foreach ($sources as $name => $link) {
            NewsSource::create([
                "name" => $name,
                "home_url" => $link,
            ]);
        }
    }
}
