<?php

namespace Database\Seeders;

use App\Models\District;
use App\Models\PointOfInterest;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $faqs = [
            [
                "question" => "What is voter registration?",
                "answer" => 'Registration refers to the act of accomplishing and filing of a sworn application by a
                        qualified voter before the Election Officer of the city or municipality, where the applicant resides,
                        and including the record in the book of voters upon approval by the Election Registration Board. 
                        <br><br>
                        To read more, please follow this *[link](https://comelec.gov.ph/index.html?r=VoterRegistration/WhatisVoterRegistration)* ',
            ],

            [
                "question" => "Why should I register myself as a voter?",
                "answer" => 'If a person is not a registered voter, he cannot vote in an election. This means that you cannot participate in choosing who your next 
                        public officials will be. You also would not be able to run for public office if you are not a registered voter.
                        <br><br>
                        See *[Art. XII, Sec. 115, Batas Pambansa Blg. 881](https://comelec.gov.ph/index.html?r=References/RelatedLaws/OmnibusElectionCode/OECArt12)*',
            ],

            [
                "question" => "What are the requirements for registration?",
                "answer" => 'The basic requirements for any Filipino citizen to register as a voter are simple: he must be at least 18 
                        years old, and a resident of the Philippines for at least one year and of the city/municipality wherein he intends to vote for at least 6 months prior to an election.
                        There are also certain disqualifications prescribed by [law](https://comelec.gov.ph/index.html?r=References/RelatedLaws/RegistrationLaws/RA8189#sec11) which you should not possess.
                        <br><br>
                        To read more, please follow this *[link]( https://comelec.gov.ph/index.html?r=VoterRegistration/WhatisVoterRegistration/RegistrationRequirements)* ',
            ],

            [
                "question" => "Where should I go to register?",
                "answer" => 'By [law](https://comelec.gov.ph/index.html?r=References/RelatedLaws/RegistrationLaws/RA8189#sec8), filing of applications for registration shall be conducted at the Office of the Election Officer (OEO), your local COMELEC office. That happens during regular office hours.
                        The COMELEC has allowed the setting up of at least one satellite registration center for every barangay. 
                        There are also satellite registration centers for Person with Disabilities (PWDs), Indigenous Cultural Communities (ICCs/IPs), Senior Citizens (SCs) and Internally Displaced Persons (IDPs), subject to certain conditions.
                        <br><br>
                        To read more, please follow this *[link]( https://comelec.gov.ph/index.html?r=VoterRegistration/WhatisVoterRegistration/RegistrationCenters)* ',
            ],
            [
                "question" => "How often do I need to register?",
                "answer" => 'Under the present system of continuing registration, a qualified person needs to register only once. This registration is [permanent]( https://comelec.gov.ph/index.html?r=References/RelatedLaws/RegistrationLaws/RA8189#sec4), unless declared otherwise by law. Registering more than once constitutes an [election offence](https://comelec.gov.ph/index.html?r=References/RelatedLaws/OmnibusElectionCode/OECArt22#sec261y).
                            However, in cases when a voter transfers residence, he needs to apply for the transfer of his registration record.
                        There are also instances when a registration record may become deactivated due to some reasons stated by law, the most common of which is the failure to vote in two successive regular elections. When this happens, the concerned voter needs to apply for the reactivation of his registration record.',
            ],

            [
                "question" =>
                    "I am already a registered voter. I voted in the last 2019 Elections. Do I need to register again in order to vote in the 2022 National and Local Elections (NLE)?",
                "answer" => 'No. As stated in the [previous FAQ](https://comelec.gov.ph/index.html?r=VoterRegistration%2FWhatisVoterRegistration%2Fqnavr#faq5), registration needs to be done only once. Your registration is good for further elections as long as you keep it active by participating in the elections by voting.
                            If your registration record gets deactivated, that is another story.',
            ],

            [
                "question" => "When is the next schedule for registration?",
                "answer" => 'By [law](https://comelec.gov.ph/index.html?r=References/RelatedLaws/RegistrationLaws/RA8189#sec8), any qualified registrant may file an application for registration on any day until 120 days before a regular election and 90 days before a special election.
                            However, for operational and logistical reasons, the COMELEC schedules the period for the conduct of this activity before a scheduled election. For the 09 May 2022 National and Local Elections, it has been scheduled to take place from 20 January 2020 to 30 September 2021
                            <br><br>
                            To read more, please follow this *[link](https://comelec.gov.ph/index.html?r=VoterRegistration/WhatisVoterRegistration/VoterRegistrationSchedule)* ',
            ],

            [
                "question" =>
                    "When is the registration schedule for the 2022 National and Local Elections?",
                "answer" =>
                    "The period for filing applications for registration for the 2022 NLE will be from 20 January 2020 to 30 September 2021 pursuant to [Section 5 of Resolution No. 10635](https://comelec.gov.ph/VoterRegistration/Resolutions/res10635).",
            ],

            [
                "question" =>
                    "How can I change my civil status in my registration record?",
                "answer" => 'Voters who have gotten married after registering as a single person, or married voters whose marriage has been annulled or declared a nullity by a competent court, including those married voters whose spouses have died, may apply for a correction of entry in their registration voters.
                            Concerned female voters whose family name may have been affected by such events may also file for a change of their name in their registration record.',
            ],

            [
                "question" =>
                    "My registration record/voter ID has typographical or clerical errors. How do I go about having the incorrect information corrected?",
                "answer" => 'A registered voter whose registration record contains incorrect entries, including wrong or misspelled name, birth date, birth place or
                             typographical errors, may request for its correction at the concerned local COMELEC office.',
            ],

            [
                "question" =>
                    "I have already moved residence to another city/municipality. How do I transfer my registration record to my new place of residence?",
                "answer" =>
                    "During the scheduled registration period, an application for the transfer of the concerned registration record may be filed with the local COMELEC office of the new place of residence.",
            ],

            [
                "question" =>
                    "If a record was deactivated, how can a voter have it reactivated again?",
                "answer" =>
                    "During the next scheduled registration record, a voter with a deactivated registration record may file for the reactivation of his (or her) registration record with the local COMELEC office of the city/municipality where he (or she) is registered.",
            ],
        ];

        $districts = [
            [
                "district" => [
                    "name" => "Davao City",
                    "color" => "#ff3232",
                    "longitude" => 125.45522427575,
                    "latitude" => 7.1877587124404,
                    "logo_url" => "/images/District Logos/Davao City.png",
                ],
                "sites" => [
                    [
                        "name" => "Davao City",
                        "description" =>
                            "Commission on Elections Office, Ramon Magsaysay Ave, Ramon Magsaysay Park, Davao City, 8000 Davao del Sur",
                        "latitude" => "7.0768944670836795",
                        "longitude" => "125.64046020683766",
                        "point_of_interest_type_id" => 1,
                    ],
                ],
            ],
            [
                "district" => [
                    "name" => "Davao de Oro",
                    "color" => "#ff3232",
                    "latitude" => "7.50993117",
                    "longitude" => "125.9226537",
                    "logo_url" => "/images/District Logos/Davao de Oro.png",
                ],
                "sites" => [
                    [
                        "name" => "Compostela",
                        "description" =>
                            "Compostela Municipal Hall, National Road, Compostela, Davao de Oro ",
                        "latitude" => "7.668177446",
                        "longitude" => "126.0855942",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Laak",
                        "description" =>
                            "Laak Municipal Hall, Asuncion-San Isidro-Laak-Veruela Road, Laak, Davao de Oro ",
                        "latitude" => "7.819321289",
                        "longitude" => "125.7931673",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Mabini",
                        "description" =>
                            "Mabini Municipal Hall, Surigao-Davao Coastal Road, Mabini, Davao de Oro ",
                        "latitude" => "7.309820844",
                        "longitude" => "125.8553907",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Maco",
                        "description" =>
                            "Maco Municipal Hall, Maco, Davao de Oro ",
                        "latitude" => "7.370604437",
                        "longitude" => "125.8620769",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Maragusan",
                        "description" =>
                            "Maragusan Municipal Gymnasium, Poblacion, Davao de Oro ",
                        "latitude" => "7.318022775",
                        "longitude" => "126.1247323",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Mawab",
                        "description" =>
                            "Mawab Municipal Hall, Mawab, Davao de Oro ",
                        "latitude" => "7.50993117",
                        "longitude" => "125.9226537",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Monkayo",
                        "description" =>
                            "Monkayo Municipal Hall, LS, Sarmiento St., Monkayo, Davao de Oro ",
                        "latitude" => "7.824401973",
                        "longitude" => "126.0541731",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Montevista",
                        "description" =>
                            "Montevista Municipal Hall, Pan-Philippine Highway, Davao de Oro ",
                        "latitude" => "7.704554663",
                        "longitude" => "125.9885213",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Nabuntaran",
                        "description" =>
                            "Municipal Health Office of Nabunturan,  Nabunturan, 8800 Compostela Valley, Davao de Oro",
                        "latitude" => "7.6035221296833955",
                        "longitude" => "125.96931732410262",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "New Bataan",
                        "description" =>
                            "New Bataan Municipal Hall, L A Espanola Ave, New Bataan, Davao de Oro ",
                        "latitude" => "7.54876254",
                        "longitude" => "126.1375616",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Pantukan",
                        "description" =>
                            "Pantukan Municipal Hall, Surigao - Davao Coastal Road, Pantukan, Davao de Oro ",
                        "latitude" => "7.127218068",
                        "longitude" => "125.8983279",
                        "point_of_interest_type_id" => 1,
                    ],
                ],
            ],
            [
                "district" => [
                    "name" => "Davao del Norte",
                    "color" => "#ff3232",
                    "latitude" => "7.459040966",
                    "longitude" => "125.7831256",
                    "logo_url" => "/images/District Logos/Davao del Norte.png",
                ],
                "sites" => [
                    [
                        "name" => "Asuncion",
                        "description" =>
                            "Asuncion Municipal Hall, Tagum - Panabo Circumferential Road, Asuncion, Davao del Norte ",
                        "latitude" => "7.53842187",
                        "longitude" => "125.7536358",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Braulio E. Dujali",
                        "description" =>
                            "Braulio E. Dujali Municipal Hall, Braulio E. Dujali, Davao del Norte ",
                        "latitude" => "7.448158689",
                        "longitude" => "125.690606",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Carmen",
                        "description" =>
                            "Carmen Municipal Hall, Carmen, Davao del Norte ",
                        "latitude" => "7.3534157",
                        "longitude" => "125.7053",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Kapalong",
                        "description" =>
                            "Municipal Hall Building, Quezon Boulevard, Maniki, Kapalong, Davao Del Norte ",
                        "latitude" => "7.605844931",
                        "longitude" => "125.6089626",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "New Corella",
                        "description" =>
                            "Municipal Hall Building, New Park 2, Poblacion, New Corella, Davao Del Norte ",
                        "latitude" => "7.59587439",
                        "longitude" => "125.8809809",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Panabo",
                        "description" =>
                            "Old Regional Trial Court Building New Pandan, Panabo City ",
                        "latitude" => "7.285439145",
                        "longitude" => "125.6738739",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Island Garden City of Samal",
                        "description" =>
                            "Samal City Hall, Babak-Samal-Kaputian Road, Samal, Davao del Norte ",
                        "latitude" => "7.08234575",
                        "longitude" => "125.7266342",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "San Isidro",
                        "description" =>
                            "San Isidro Municipal Hall, San Isidro, Davao del Norte ",
                        "latitude" => "7.74651182",
                        "longitude" => "125.7239165",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Santo Tomas",
                        "description" =>
                            "Sto. Tomas Municipal Hall, Ramon Magsaysay Avenue, Santo Tomas, Davao del Norte ",
                        "latitude" => "7.532906827",
                        "longitude" => "125.6227195",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Tagum",
                        "description" =>
                            "Government Center, Tagum, Davao del Norte ",
                        "latitude" => "7.459040966",
                        "longitude" => "125.7831256",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Talaingod",
                        "description" =>
                            "Talaingod Municipal Hall, Talaingod, Davao del Norte ",
                        "latitude" => "7.632657054",
                        "longitude" => "125.5747554",
                        "point_of_interest_type_id" => 1,
                    ],
                ],
            ],
            [
                "district" => [
                    "name" => "Davao del Sur",
                    "color" => "#ff3232",
                    "latitude" => "6.688722257625669",
                    "longitude" => "125.29792751078921",
                    "logo_url" => "/images/District Logos/Davao del Sur.png",
                ],
                "sites" => [
                    [
                        "name" => "Bansalan",
                        "description" =>
                            "Bansalan Municipal Hall, Davao-Cotabato Roard, Bansalan, Davao del Sur",
                        "latitude" => "6.787704685113224",
                        "longitude" => "125.211508891369",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Digos",
                        "description" =>
                            "City Hall Compound, Digos City, Davao Del Sur <br> Contact: (082) 553 2650",
                        "latitude" => "6.744411136949697",
                        "longitude" => " 125.3564230966747",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Hagonoy",
                        "description" =>
                            "Hagonoy Municipal Hall, R. Sacedon St., Hagonoy, Davao del Sur",
                        "latitude" => "6.688722257625669",
                        "longitude" => "125.29792751078921",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Kiblawan",
                        "description" =>
                            "Kiblawan Municipal Hall, Kiblawan, Davao del Sur",
                        "latitude" => "6.622309396772927",
                        "longitude" => "125.25597151593428",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Magsaysay",
                        "description" =>
                            "Magsaysay Municipal Hall, Magsaysay, Davao del Sur",
                        "latitude" => "6.753514324517428",
                        "longitude" => " 125.1548627562381",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Malalag",
                        "description" =>
                            "Malalag Municipal Hall, Davao del Sur Provincial Highway, Malalag, Davao del Sur",
                        "latitude" => "6.591536917393736",
                        "longitude" => "125.40130966641901",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Matanao",
                        "description" =>
                            "Matanao Municipal Hall, Matanao, Davao del Sur",
                        "latitude" => "6.7097144147570065",
                        "longitude" => "125.21909218836547",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Padada",
                        "description" =>
                            "Padada Municipal Hall, Rizal St., Padada, Davao del Sur",
                        "latitude" => "6.639377577821367",
                        "longitude" => "125.3423998754497",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Santa Cruz ",
                        "description" =>
                            "Sta.Cruz Municipal Compound, Zone 3, Sta. Cruz, Davao City, 8000 Davao del Sur",
                        "latitude" => "6.8345896841744205",
                        "longitude" => "125.41501964872575",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Sulop",
                        "description" =>
                            "Sulop Municipal Hall, Sulop, Davao del Sur",
                        "latitude" => "6.600857074981361",
                        "longitude" => "125.34417037703689",
                        "point_of_interest_type_id" => 1,
                    ],
                ],
            ],
            [
                "district" => [
                    "name" => "Davao Occidental",
                    "color" => "#ff3232",
                    "latitude" => "6.197871060022843",
                    "longitude" => "125.6951180545738",
                    "logo_url" => "/images/District Logos/Davao Occidental.png",
                ],
                "sites" => [
                    [
                        "name" => "Don Marcelino",
                        "description" =>
                            "Don Marcelino Municipal Hall, Don Marcelino, Davao Occidental",
                        "latitude" => "6.197871060022843",
                        "longitude" => "125.6951180545738",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Jose Abad Santos",
                        "description" =>
                            "Jose Abad Santos Municipal Hall, Jose Abad Santos, Davao Occidental",
                        "latitude" => "5.912665515658501",
                        "longitude" => "125.6447010067082",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Malita",
                        "description" =>
                            "Malita Municipal Hall, Quirino St., Malita, Davao Occidental",
                        "latitude" => "6.414934776966255",
                        "longitude" => "125.61169041224392",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Santa Maria",
                        "description" =>
                            "Santa Maria Municipal Hall, Davao del Sur Provincial Highway, Davao Occidental",
                        "latitude" => "6.550534289240736",
                        "longitude" => "125.47543684874917",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Sarangani",
                        "description" =>
                            "Sarangani Municipal Hall, Sarangani, Davao Occidental",
                        "latitude" => "5.41247506810351",
                        "longitude" => "125.4229467478799",
                        "point_of_interest_type_id" => 1,
                    ],
                ],
            ],
            [
                "district" => [
                    "name" => "Davao Oriental",
                    "color" => "#ff3232",
                    "latitude" => " 7.049674610848557",
                    "longitude" => "126.44881989874978",
                    "logo_url" => "/images/District Logos/Davao Oriental.png",
                ],
                "sites" => [
                    [
                        "name" => "Baganga",
                        "description" =>
                            "Baganga Municipal Hall, Baganga, Davao Oriental <br> Contact: +639309642135",
                        "latitude" => "7.575130869088441",
                        "longitude" => " 126.56226804477079",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Banaybanay",
                        "description" =>
                            "Banaybanay Municipal Hall, Banaybanay, Davao Oriental <br> Contact: +639083847892",
                        "latitude" => "6.967338792626727",
                        "longitude" => "126.01117197360483",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Boston",
                        "description" =>
                            "Boston Municipal Hall, Boston, Davao Oriental <br> Contact: +639171381963",
                        "latitude" => "7.87014250008301",
                        "longitude" => "126.37655446807098",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Caraga",
                        "description" =>
                            "Caraga Municipal Hall, Caraga, Davao Oriental <br> Contact: +639504888005 ",
                        "latitude" => "7.328536115458501",
                        "longitude" => " 126.56625508467617",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Cateel",
                        "description" =>
                            "Cateel Municipal Hall, Cateel, Davao Oriental <br> Contact: +639389941976 ",
                        "latitude" => "7.790300739004287",
                        "longitude" => "126.45421870422456",
                        "point_of_interest_type_id" => 1,
                    ],

                    [
                        "name" => "Governor Generoso",
                        "description" =>
                            "Governor Generoso Municipal Hall, Governor Generoso, Davao Oriental <br> Contact: +639197441050 ",
                        "latitude" => "6.653741950376254",
                        "longitude" => " 126.0729338278739",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Lupon",
                        "description" =>
                            "Lupon Municipal Hall, E. Aguinaldo St., Lupon, Davao Oriental <br> Contact: +639394273617",
                        "latitude" => "6.897446626992547",
                        "longitude" => "126.01114056231174",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Manay",
                        "description" =>
                            "Manay Municipal Hall, Manay, Davao Oriental <br> Contact: +639518107229",
                        "latitude" => "7.210455148675985",
                        "longitude" => "126.53989700642002",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Mati",
                        "description" =>
                            "City Hall of Mati, Nazareno St, Mati, Davao Oriental <br> Contact: (087) 3883-416 ",
                        "latitude" => "6.952019447328853",
                        "longitude" => "126.21653684444138",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "San Isidro",
                        "description" =>
                            "San Isidro Municipal Hall, San Isidro, Davao Oriental <br> Contact: +639533665087 ",
                        "latitude" => "6.83148838918388",
                        "longitude" => "126.082540259340996",
                        "point_of_interest_type_id" => 1,
                    ],
                    [
                        "name" => "Tarragona",
                        "description" =>
                            "Tarragona Municipal Hall, Tarragona, Davao Oriental <br> Contact: +639773155140",
                        "latitude" => " 7.049674610848557",
                        "longitude" => "126.44881989874978",
                        "point_of_interest_type_id" => 1,
                    ],
                ],
            ],
        ];

        DB::table("point_of_interests")->truncate();
        // DB::table('districts')->truncate();
        // DB::table('point_of_interest_types')->truncate();
        DB::table("point_of_interest_types")->insert([
            "type" => "Registration Site",
        ]);

        foreach ($districts as $districtData) {
            $district = District::firstOrCreate(
                ["name" => $districtData["district"]["name"]],
                [
                    "color" => $districtData["district"]["color"],
                    "description" => "District Descrpition",
                    "latitude" => $districtData["district"]["latitude"],
                    "longitude" => $districtData["district"]["longitude"],
                ]
            );

            foreach ($districtData["sites"] as $site) {
                PointOfInterest::firstOrCreate(
                    ["name" => $site["name"]],
                    [
                        "description" => $site["description"],
                        "latitude" => $site["latitude"],
                        "longitude" => $site["longitude"],
                        "point_of_interest_type_id" => 1,
                        "district_id" => $district->id,
                        "image_url" => $districtData["district"]["logo_url"],
                    ]
                );
            }
        }

        DB::table("information_snippets")->truncate();
        DB::table("information_snippets")->insert([
            "title" => "AdDU Blue Vote",
            "content" =>
                "Official website of the Ateneo de Davao University Blue Vote Campaign",
        ]);

        DB::table("users")->truncate();
        DB::table("users")->insert([
            "name" => env("ADMIN_USER", "Admin"),
            "email" => env("ADMIN_EMAIL", "admin@admin.com"),
            "password" => bcrypt(env("ADMIN_PASSWORD", "adminadmin")),
        ]);

        DB::table("frequently_asked_questions")->truncate();
        foreach ($faqs as $faq) {
            DB::table("frequently_asked_questions")->insert($faq);
        }
    }
}
