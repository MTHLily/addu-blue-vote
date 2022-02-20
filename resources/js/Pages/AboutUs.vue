<template>
    <Head title="About Us"></Head>
    <GuestLayout>
        <div class="container-md mt-5">
            <div class="row g-0 mb-3">
                <div class="col-12 col-md-5 order-2 order-sm-1">
                    <h1 class="text-primary fw-bold">What is Blue Vote?</h1>
                    <p class="text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Libero nunc consequat interdum varius sit amet. Fermentum posuere urna nec tincidunt. Nisl nunc mi ipsum faucibus vitae aliquet nec. 
                        Porta lorem mollis aliquam ut porttitor. Pharetra vel turpis nunc eget. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. 
                        Malesuada pellentesque elit eget gravida cum. 

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Libero nunc consequat interdum varius sit amet. Fermentum posuere urna nec tincidunt. Nisl nunc mi ipsum faucibus vitae aliquet nec. 
                        Porta lorem mollis aliquam ut porttitor. Pharetra vel turpis nunc eget. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. 
                        Malesuada pellentesque elit eget gravida cum. 
                    </p>
                </div>
                <div class="col-12 col-md-7 order-1 order-sm-2">
                    <img :src="image"  />
                </div>
            </div>

            <div class="row g-0 mb-3">
                <h2 class="text-primary fw-bold">Previous Projects</h2>
            </div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-3">
                <div class="col">
                    <Link
                        :href="PolitcalEducation"
                        class="text-white text-center text-decoration-none btn-primary btn-lg block p-4 mb-3"
                        style="padding: 20px; border-radius: 10px">
                        Political Education
                    </Link>
                </div>
                <div class="col">
                    <Link
                        :href="VotersEducation"
                        class="text-white text-center text-decoration-none btn-danger btn-lg block p-4 mb-3"
                        style="padding: 20px; border-radius: 10px">
                        Voters Education
                    </Link>
                </div>
                <div class="col">
                    <Link
                        :href="Surveys"
                        class="text-white text-center text-decoration-none btn-warning btn-lg block p-4 mb-3"
                        style="padding: 20px; border-radius: 10px">
                        Surveys
                    </Link>
                </div>
            </div>
            <div class="row g-0 mt-3 mb-3">
                <h2 class="text-primary fw-bold">People Behind Blue Vote</h2>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                    <template v-for="person in peopleBehind" :key="person.person">
                        <PeopleCard :people="person"></PeopleCard>
                    </template>
                </div>
            </div>
            <div class="row g-0 mt-3 mb-3">
                <h2 class="text-primary fw-bold">How to Volunteer</h2>
                <div class="d-flex flex-column gap-4 mt-4">
                <template v-for="step in volunteerProcess" :key="step.step">
                    <StepCard :processStep="step"></StepCard>
                </template>
                </div>
            </div>
        </div>
    </GuestLayout>
</template>
<script>
import { Head, Link } from "@inertiajs/inertia-vue3";
import GuestLayout from "../Layouts/Guest.vue";
import image from "@/Components/assets/blue vote logo.png";
import StepCard from "@/Components/AboutUs/VolunteerProcessCard.vue";
import PeopleCard from "@/Components/AboutUs/PeopleBehindCard.vue";

export default {
    components: {
        Head,
        Link,
        GuestLayout,
        StepCard,
        PeopleCard,
    },
    data: function () {
        return {
            image: image,
        };
    },
    data: () => ({
    volunteerProcess: [
        {
            step: "STEP 1",
            title: "Lorem ipsum dolor sit amet",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            primaryColor: "#055094",
            secondaryColor: "#56A0D7",
        },
        {
            step: "STEP 2",
            title: "Lorem ipsum dolor sit amet",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            primaryColor: "#FAA728",
            secondaryColor: "#CE2029",
        },
        {
            step: "STEP 3",
            title: "Lorem ipsum dolor sit amet",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            primaryColor: "#379DD2",
            secondaryColor: "#FAA728",
        },
        ],
    peopleBehind: [
        {
            person: 1,
            name: "University Community Engagement and Advocacy",
            img: "data:image/png;base64,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"
        },
        
        {
            person: 2,
            name: "Ramon Beleno III",
            img: "https://www.addu.edu.ph/wp-content/uploads/2020/08/UniversitySeal240px.png"
        },
        {
            person: 3,
            name: "Coordinator",
            img: "https://www.addu.edu.ph/wp-content/uploads/2020/08/UniversitySeal240px.png"
        },
        {
            person: 4,
            name: "Volunteer 1",
            img: "https://www.addu.edu.ph/wp-content/uploads/2020/08/UniversitySeal240px.png"
        },
    ]
    }),
};
</script>

<style scoped>

</style>
