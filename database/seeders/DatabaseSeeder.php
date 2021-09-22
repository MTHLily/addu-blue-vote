<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{

    public function run()
    {

        DB::table('point_of_interest_types')->insert(
            [
                'type' => 'Registration Site'
         ]
        );

        DB::table('users')->insert([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('adminadmin'),
        ]);

        DB::table('frequently_asked_questions')->insert([

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
            [ //this is where i stopped
                'question' =>'How often do I need to register?',
                'answer' => 'Under the present system of continuing registration, a qualified person needs to register only once. This registration is permanent, unless declared otherwise by law. Registering more than once constitutes an election offense.
                            However, in cases when a voter transfers residence, he needs to apply for the transfer of his registration record.
                        There are also instances when a registration record may become deactivated due to some reasons stated by law, the most common of which is the failure to vote in two successive regular elections. When this happens, the concerned voter needs to apply for the reactivation of his registration record.'
            ],

            [
                'question' =>'I am already a registered voter. I voted in the last 2019 Elections. Do I need to register again in order to vote in the 2022 National and Local Elections (NLE)?',
                'answer' => 'No. As stated in the previous FAQ, registration needs to be done only once. Your registration is good for further elections as long as you keep it active by participating in the elections by voting.
                            If your registration record gets deactivated, that is another story.'
            ],


            [
                'question' =>'When is the next schedule for registration?',
                'answer' => 'By law, any qualified registrant may file an application for registration on any day until 120 days before a regular election and 90 days before a special election.
                            However, for operational and logistical reasons, the COMELEC schedules the period for the conduct of this activity before a scheduled election. For the 09 May 2022 National and Local Elections, it has been scheduled to take place from 20 January 2020 to 30 September 2021'
            ],

            [
                'question' =>'When is the registration schedule for the 2022 National and Local Elections?',
                'answer' => 'The period for filing applications for registration for the 2022 NLE will be from 20 January 2020 to 30 September 2021 pursuant to Section 5 of Resolution No. 10635.'
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


        ]);

        // \App\Models\User::factory(10)->create();
        //\App\Models\FrequentlyAskedQuestion::factory(5)->create();
        \App\Models\InformationSnippet::factory(3)->create();
        \App\Models\District::factory(3)->create();
    }
}
