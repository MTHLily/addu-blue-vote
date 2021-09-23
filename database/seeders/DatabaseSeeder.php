<?php

namespace Database\Seeders;

use App\Models\District;
use App\Models\PointOfInterest;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{

    public function run()
    {

        $faqs = [
            [
                'question' =>'What is voter registration?',
                'answer' => 'Registration refers to the act of accomplishing and filing of a sworn application by a
                        qualified voter before the Election Officer of the city or municipality, where the applicant resides,
                        and including the record in the book of voters upon approval by the Election Registration Board. 
                        <br><br>
                        To read more, please follow this *[link](https://comelec.gov.ph/index.html?r=VoterRegistration/WhatisVoterRegistration)* '
            ],
           
            [
                'question' =>'Why should I register myself as a voter?',
                'answer' => 'If a person is not a registered voter, he cannot vote in an election. This means that you cannot participate in choosing who your next 
                        public officials will be. You also would not be able to run for public office if you are not a registered voter.
                        <br><br>
                        See *[Art. XII, Sec. 115, Batas Pambansa Blg. 881](https://comelec.gov.ph/index.html?r=References/RelatedLaws/OmnibusElectionCode/OECArt12)*'
            ],

            [
                'question' =>'What are the requirements for registration?',
                'answer' => 'The basic requirements for any Filipino citizen to register as a voter are simple: he must be at least 18 
                        years old, and a resident of the Philippines for at least one year and of the city/municipality wherein he intends to vote for at least 6 months prior to an election.
                        There are also certain disqualifications prescribed by [law](https://comelec.gov.ph/index.html?r=References/RelatedLaws/RegistrationLaws/RA8189#sec11) which you should not possess.
                        <br><br>
                        To read more, please follow this *[link]( https://comelec.gov.ph/index.html?r=VoterRegistration/WhatisVoterRegistration/RegistrationRequirements)* '
            ],

            [
                'question' =>'Where should I go to register?',
                'answer' => 'By [law](https://comelec.gov.ph/index.html?r=References/RelatedLaws/RegistrationLaws/RA8189#sec8), filing of applications for registration shall be conducted at the Office of the Election Officer (OEO), your local COMELEC office. That happens during regular office hours.
                        The COMELEC has allowed the setting up of at least one satellite registration center for every barangay. 
                        There are also satellite registration centers for Person with Disabilities (PWDs), Indigenous Cultural Communities (ICCs/IPs), Senior Citizens (SCs) and Internally Displaced Persons (IDPs), subject to certain conditions.
                        <br><br>
                        To read more, please follow this *[link]( https://comelec.gov.ph/index.html?r=VoterRegistration/WhatisVoterRegistration/RegistrationCenters)* '
             ],
            [
                'question' =>'How often do I need to register?',
                'answer' => 'Under the present system of continuing registration, a qualified person needs to register only once. This registration is [permanent]( https://comelec.gov.ph/index.html?r=References/RelatedLaws/RegistrationLaws/RA8189#sec4), unless declared otherwise by law. Registering more than once constitutes an [election offence](https://comelec.gov.ph/index.html?r=References/RelatedLaws/OmnibusElectionCode/OECArt22#sec261y).
                            However, in cases when a voter transfers residence, he needs to apply for the transfer of his registration record.
                        There are also instances when a registration record may become deactivated due to some reasons stated by law, the most common of which is the failure to vote in two successive regular elections. When this happens, the concerned voter needs to apply for the reactivation of his registration record.'
            ],

            [
                'question' =>'I am already a registered voter. I voted in the last 2019 Elections. Do I need to register again in order to vote in the 2022 National and Local Elections (NLE)?',
                'answer' => 'No. As stated in the [previous FAQ](https://comelec.gov.ph/index.html?r=VoterRegistration%2FWhatisVoterRegistration%2Fqnavr#faq5), registration needs to be done only once. Your registration is good for further elections as long as you keep it active by participating in the elections by voting.
                            If your registration record gets deactivated, that is another story.'
            ],


            [
                'question' =>'When is the next schedule for registration?',
                'answer' => 'By [law](https://comelec.gov.ph/index.html?r=References/RelatedLaws/RegistrationLaws/RA8189#sec8), any qualified registrant may file an application for registration on any day until 120 days before a regular election and 90 days before a special election.
                            However, for operational and logistical reasons, the COMELEC schedules the period for the conduct of this activity before a scheduled election. For the 09 May 2022 National and Local Elections, it has been scheduled to take place from 20 January 2020 to 30 September 2021
                            <br><br>
                            To read more, please follow this *[link](https://comelec.gov.ph/index.html?r=VoterRegistration/WhatisVoterRegistration/VoterRegistrationSchedule)* '
      
                            
            ],

            [
                'question' =>'When is the registration schedule for the 2022 National and Local Elections?',
                'answer' => 'The period for filing applications for registration for the 2022 NLE will be from 20 January 2020 to 30 September 2021 pursuant to [Section 5 of Resolution No. 10635](https://comelec.gov.ph/VoterRegistration/Resolutions/res10635).'
            ],


            [
                'question' =>'How can I change my civil status in my registration record?',
                'answer' => 'Voters who have gotten married after registering as a single person, or married voters whose marriage has been annulled or declared a nullity by a competent court, including those married voters whose spouses have died, may apply for a correction of entry in their registration voters.
                            Concerned female voters whose family name may have been affected by such events may also file for a change of their name in their registration record.'
            ],


            [
                'question' =>'My registration record/voter ID has typographical or clerical errors. How do I go about having the incorrect information corrected?',
                'answer' => 'A registered voter whose registration record contains incorrect entries, including wrong or misspelled name, birth date, birth place or
                             typographical errors, may request for its correction at the concerned local COMELEC office.'
            ],


            [
                'question' =>'I have already moved residence to another city/municipality. How do I transfer my registration record to my new place of residence?',
                'answer' => 'During the scheduled registration period, an application for the transfer of the concerned registration record may be filed with the local COMELEC office of the new place of residence.'
            ],

            [
                'question' =>'If a record was deactivated, how can a voter have it reactivated again?',
                'answer' => 'During the next scheduled registration record, a voter with a deactivated registration record may file for the reactivation of his (or her) registration record with the local COMELEC office of the city/municipality where he (or she) is registered.'
            ],
        ];

        $districts = [
            [
                'district' => [
                    'name' => 'Davao City',
                    'color' => '#1616c9',
                    'longitude' => 125.455224275750000,
                    'latitude' => 7.187758712440400,
                ],
                'sites' => [
                    [
                        'name' => 'Davao City',
                        'description' => 'This is davao city.',
                        'longitude' => 7.0768944670836795, 
                        'latitude' => 125.64046020683766,
                        'point_of_interest_type_id' => 1
                    ]
                ]
            ],
            [
                'district' => [
                    'name' => 'Davao de Oro',
                    'color' => '#ccd9ff',
                    'longitude' => 125.455224275750000,
                    'latitude' => 7.187758712440400,
                ],
                'sites' => [
                    [
                        'name' => 'Compostela',
                        'description' => 'Compostela Municipal Hall, National Road, Compostela, Davao de Oro ',
                        'longitude' => '7.668177446', 
                        'latitude' => '126.0855942',
                        'point_of_interest_type_id' => 1
                    ],
                    [
                        'name' => 'Laak',
                        'description' => 'Laak Municipal Hall, Asuncion-San Isidro-Laak-Veruela Road, Laak, Davao de Oro ',
                        'longitude' => '7.819321289', 
                        'latitude' => '125.7931673',
                        'point_of_interest_type_id' => 1
                    ],
                    [
                        'name' => 'Mabini',
                        'description' => 'Mabini Municipal Hall, Surigao-Davao Coastal Road, Mabini, Davao de Oro ',
                        'longitude' => '7.309820844', 
                        'latitude' => '125.8553907',
                        'point_of_interest_type_id' => 1
                    ],
                    [
                        'name' => 'Maco',
                        'description' => 'Maco Municipal Hall, Maco, Davao de Oro ',
                        'longitude' => '7.370604437', 
                        'latitude' => '125.8620769',
                        'point_of_interest_type_id' => 1
                    ],
                    [
                        'name' => 'Maragusan',
                        'description' => 'Maragusan Municipal Gymnasium, Poblacion, Davao de Oro ',
                        'longitude' => '7.318022775', 
                        'latitude' => '126.1247323',
                        'point_of_interest_type_id' => 1
                    ],
                    [
                        'name' => 'Mawab',
                        'description' => 'Mawab Municipal Hall, Mawab, Davao de Oro ',
                        'longitude' => '7.50993117', 
                        'latitude' => '125.9226537',
                        'point_of_interest_type_id' => 1
                    ],
                    [
                        'name' => 'Monkayo',
                        'description' => 'Monkayo Municipal Hall, LS, Sarmiento St., Monkayo, Davao de Oro ',
                        'longitude' => '7.824401973', 
                        'latitude' => '126.0541731',
                        'point_of_interest_type_id' => 1
                    ],
                    [
                        'name' => 'Montevista',
                        'description' => 'Montevista Municipal Hall, Pan-Philippine Highway, Davao de Oro ',
                        'longitude' => '7.704554663', 
                        'latitude' => '125.9885213',
                        'point_of_interest_type_id' => 1
                    ],
                    [
                        'name' => 'New Bataan',
                        'description' => 'New Bataan Municipal Hall, L A Espanola Ave, New Bataan, Davao de Oro ',
                        'longitude' => '7.54876254', 
                        'latitude' => '126.1375616',
                        'point_of_interest_type_id' => 1
                    ],
                    [
                        'name' => 'Pantukan',
                        'description' => 'Pantukan Municipal Hall, Surigao - Davao Coastal Road, Pantukan, Davao de Oro ',
                        'longitude' => '7.127218068', 
                        'latitude' => '125.8983279',
                        'point_of_interest_type_id' => 1
                    ],
                ]
            ],
            [
                'district' => [
                    'name' => 'Davao del Norte',
                    'color' => '#7d79fc',
                    'longitude' => 125.455224275750000,
                    'latitude' => 7.187758712440400,
                ],
                'sites' => [
                    [
                        'name' => 'Asuncion',
                        'description' => 'Asuncion Municipal Hall, Tagum - Panabo Circumferential Road, Asuncion, Davao del Norte ',
                        'longitude' => '7.53842187', 
                        'latitude' => '125.7536358',
                        'point_of_interest_type_id' => 1
                    ],
                    [
                        'name' => 'Braulio E. Dujali',
                        'description' => 'Braulio E. Dujali Municipal Hall, Braulio E. Dujali, Davao del Norte ',
                        'longitude' => '7.448158689', 
                        'latitude' => '125.690606',
                        'point_of_interest_type_id' => 1
                    ],
                    [
                        'name' => 'Carmen',
                        'description' => 'Carmen Municipal Hall, Carmen, Davao del Norte ',
                        'longitude' => '7.3534157', 
                        'latitude' => '125.7053',
                        'point_of_interest_type_id' => 1
                    ],
                    [
                        'name' => 'Kapalong',
                        'description' => 'Municipal Hall Building, Quezon Boulevard, Maniki, Kapalong, Davao Del Norte ',
                        'longitude' => '7.605844931', 
                        'latitude' => '125.6089626',
                        'point_of_interest_type_id' => 1
                    ],
                    [
                        'name' => 'New Corella',
                        'description' => 'Municipal Hall Building, New Park 2, Poblacion, New Corella, Davao Del Norte ',
                        'longitude' => '7.59587439', 
                        'latitude' => '125.8809809',
                        'point_of_interest_type_id' => 1
                    ],
                    [
                        'name' => 'Panabo',
                        'description' => 'Old Regional Trial Court BuildingNew Pandan, Panabo City ',
                        'longitude' => '7.285439145', 
                        'latitude' => '125.6738739',
                        'point_of_interest_type_id' => 1
                    ],
                    [
                        'name' => 'Island Garden City of Samal',
                        'description' => 'Samal City Hall, Babak-Samal-Kaputian Road, Samal, Davao del Norte ',
                        'longitude' => '7.08234575', 
                        'latitude' => '125.7266342',
                        'point_of_interest_type_id' => 1
                    ],
                    [
                        'name' => 'San Isidro',
                        'description' => 'San Isidro Municipal Hall, San Isidro, Davao del Norte ',
                        'longitude' => '7.74651182', 
                        'latitude' => '125.7239165',
                        'point_of_interest_type_id' => 1
                    ],
                    [
                        'name' => 'Santo Tomas',
                        'description' => 'Sto. Tomas Municipal Hall, Ramon Magsaysay Avenue, Santo Tomas, Davao del Norte ',
                        'longitude' => '7.532906827', 
                        'latitude' => '125.6227195',
                        'point_of_interest_type_id' => 1
                    ],
                    [
                        'name' => 'Tagum',
                        'description' => 'Government Center, Tagum, Davao del Norte ',
                        'longitude' => '7.459040966', 
                        'latitude' => '125.7831256',
                        'point_of_interest_type_id' => 1
                    ],
                    [
                        'name' => 'Talaingod',
                        'description' => 'Talaingod Municipal Hall, Talaingod, Davao del Norte ',
                        'longitude' => '7.632657054', 
                        'latitude' => '125.5747554',
                        'point_of_interest_type_id' => 1
                    ],
                ]
            ],
            [
                'district' => [
                    'name' => 'Davao del Sur',
                    'color' => '#015070',
                    'longitude' => 125.455224275750000,
                    'latitude' => 7.187758712440400,
                ],
                'sites' => [
                ]
            ],
            [
                'district' => [
                    'name' => 'Davao Occidental',
                    'color' => '#16b9cc',
                    'longitude' => 125.455224275750000,
                    'latitude' => 7.187758712440400,
                ],
                'sites' => [
                ]
            ],
            [
                'district' => [
                    'name' => 'Davao Oriental',
                    'color' => '#6baee5',
                    'longitude' => 125.455224275750000,
                    'latitude' => 7.187758712440400,
                ],
                'sites' => [
                ]
            ],
        ];

        DB::table('point_of_interest_types')->truncate();
        DB::table('point_of_interest_types')->insert(
            ['type' => 'Registration Site'],
        );

        DB::table('point_of_interests')->truncate();
        DB::table('districts')->truncate();

        foreach( $districts as $districtData ){
            $district = District::firstOrCreate(
                [ 'name' => $districtData['district']['name'] ],
                [
                    'color' => $districtData['district']['color'],
                    'description' => "District Descrpition",
                    'longitude' => $districtData['district']['longitude'],
                    'latitude' => $districtData['district']['latitude']
                ],
            );

            foreach ($districtData['sites'] as $site ){
                PointOfInterest::firstOrCreate(
                    ['name' => $site['name'] ],
                    [
                        'description' => $site['description'],
                        'longitude' => $site['latitude'],
                        'latitude' => $site['longitude'],
                        'point_of_interest_type_id' => 1,
                        'district_id' => $district->id
                    ]
                );
            }
        }

        DB::table('information_snippets')->truncate();
        DB::table('information_snippets')->insert([
            'title' => 'Ateneo de Davao University BlueVote',
            'content' => 'Official website of the Ateneo de Davao University Blue Vote Campaign'
        ]);
            
        DB::table('users')->truncate();
        DB::table('users')->insert([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('adminadmin'),
        ]);
        
        DB::table('frequently_asked_questions')->truncate();
        foreach( $faqs as $faq ){
            DB::table('frequently_asked_questions')->insert($faq);
        }

        // \App\Models\User::factory(10)->create();
        //\App\Models\FrequentlyAskedQuestion::factory(5)->create();
        // \App\Models\InformationSnippet::factory(3)->create();
        // \App\Models\District::factory(3)->create();
    }
}
