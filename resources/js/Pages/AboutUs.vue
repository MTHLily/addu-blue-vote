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
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-3">

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

export default {
    components: {
        Head,
        Link,
        GuestLayout,
        StepCard,
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
    }),
};
</script>

<style scoped>

</style>
