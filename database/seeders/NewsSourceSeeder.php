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
        $sources = 
            [
                [
                  "name" => "ABS-CBN",
                  "home_url" => "https://news.abs-cbn.com/",
                  "color" => "#FFFFFF"
                ],
                [
                  "name" => "Rappler",
                  "home_url" => "https://www.rappler.com/",
                  "color" => "#FFFFFF"
                ],
                [
                  "name" => "Phil-Star",
                  "home_url" => "https://www.philstar.com/",
                  "color" => "#FFFFFF"
                ],
                [
                  "name" => "Comelec",
                  "home_url" => "https://comelec.gov.ph/",
                  "color" => "#FFFFFF"
                ],
                [
                  "name" => "Manila Times",
                  "home_url" => "https://www.manilatimes.net/",
                  "color" => "#FFFFFF"
                ],
                [
                  "name" => "CNN Philippines",
                  "home_url" => "https://cnnphilippines.com",
                  "color" => "#FFFFFF"
                ],
                [
                  "name" => "Inquirer.net",
                  "home_url" => "https://www.inquirer.net/",
                  "color" => "#FFFFFF"
                ],
                [
                  "name" => "GMA News",
                  "home_url" => "https://www.gmanetwork.com/news/",
                  "color" => "#FFFFFF"
                ],
                [
                    "name" => "TV 5",
                    "home_url" => "https://news.tv5.com.ph/",
                    "color" => "#FFFFFF"
                ],              
            ];
            /*"ABS-CBN" => "https://news.abs-cbn.com/" => "#FFFFF",
            "Rappler" => "https://www.rappler.com/" => "https://www.rappler.com/",
            "Phil-Star" => "https://www.philstar.com/" => "https://www.rappler.com/",
            "Comelec" => "https://comelec.gov.ph/" => "https://www.rappler.com/",
            "Manila Times" => "https://www.manilatimes.net/" => "https://www.rappler.com/",
            "CNN Philippines" => "https://cnnphilippines.com/" => "https://www.rappler.com/",
            "Inquirer.net" => "https://www.inquirer.net/" => "https://www.rappler.com/",
            "GMA News" => "https://www.gmanetwork.com/news/" => "https://www.rappler.com/",
            "TV5" => "https://news.tv5.com.ph/",*/
        

        foreach ($sources as $name ) {
            NewsSource::create([
                "name" => $name['name'],
                "home_url" => $name['home_url'],
                "color" => $name['color'],
            ]);
        }
    }
}
