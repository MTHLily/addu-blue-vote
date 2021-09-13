<template>
<GuestLayout />
    <Head title="Welcome" />
    <div>

        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://scontent.fdvo4-1.fna.fbcdn.net/v/t1.6435-9/60694193_2283893781667971_6190575172496392192_n.png?_nc_cat=106&ccb=1-5&_nc_sid=973b4a&_nc_ohc=K9KXd5nJACYAX8YNrRZ&_nc_ht=scontent.fdvo4-1.fna&oh=3285a122e9552a0fb5e5e06d44584822&oe=6160E7DE" class="d-block w-100" alt="1">
                </div>
                <div class="carousel-item">
                    <img src="https://scontent.fdvo4-1.fna.fbcdn.net/v/t31.18172-8/12291787_981972371860125_5608758377325314852_o.png?_nc_cat=104&ccb=1-5&_nc_sid=973b4a&_nc_ohc=5FEyFSh8m2cAX9PgpJk&_nc_ht=scontent.fdvo4-1.fna&oh=482b086a5aa9cdda76f068958f26db0e&oe=616162B6" class="d-block w-100" alt="2">
                </div>
                <div class="carousel-item">
                    <img src="https://scontent.fdvo4-1.fna.fbcdn.net/v/t1.6435-9/65932238_2354332941290721_9038293276070772736_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=MARoGMRJnzoAX9gLUXP&_nc_ht=scontent.fdvo4-1.fna&oh=b845a75990a59a7faf2442f35da6e7cc&oe=6161A2B9" class="d-block w-100" alt="3">
                </div>
                <div class="carousel-item">
                    <img src="https://scontent.fdvo4-1.fna.fbcdn.net/v/t1.6435-9/65856258_2354333537957328_2038116639429361664_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=g5UPTITnr8cAX-BdDlo&_nc_ht=scontent.fdvo4-1.fna&oh=65bcf11a9397ca58f960cec393b937f0&oe=616106AC" class="d-block w-100" alt="4">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <FAQs />
        <Map />
    </div>
        <!-- <div>
            <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Link with href
                </a>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Button with data-bs-target
                </button>
            </p>
            <div class="collapse" id="collapseExample">
                <div class="card card-body">
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
            </div> -->
        <!-- <Map /> -->
        <!-- </div> -->
<GuestLayout />
</template>

<style scoped>
    /* .carousel{
        height: 100%;
        width: 100%;
    } */
    .bg-gray-100 {
        background-color: #f7fafc;
        background-color: rgba(247, 250, 252, var(--tw-bg-opacity));
    }

    .border-gray-200 {
        border-color: #edf2f7;
        border-color: rgba(237, 242, 247, var(--tw-border-opacity));
    }

    .text-gray-400 {
        color: #cbd5e0;
        color: rgba(203, 213, 224, var(--tw-text-opacity));
    }

    .text-gray-500 {
        color: #a0aec0;
        color: rgba(160, 174, 192, var(--tw-text-opacity));
    }

    .text-gray-600 {
        color: #718096;
        color: rgba(113, 128, 150, var(--tw-text-opacity));
    }

    .text-gray-700 {
        color: #4a5568;
        color: rgba(74, 85, 104, var(--tw-text-opacity));
    }

    .text-gray-900 {
        color: #1a202c;
        color: rgba(26, 32, 44, var(--tw-text-opacity));
    }

    @media (prefers-color-scheme: dark) {
        .dark\:bg-gray-800 {
            background-color: #2d3748;
            background-color: rgba(45, 55, 72, var(--tw-bg-opacity));
        }

        .dark\:bg-gray-900 {
            background-color: #1a202c;
            background-color: rgba(26, 32, 44, var(--tw-bg-opacity));
        }

        .dark\:border-gray-700 {
            border-color: #4a5568;
            border-color: rgba(74, 85, 104, var(--tw-border-opacity));
        }

        .dark\:text-white {
            color: #fff;
            color: rgba(255, 255, 255, var(--tw-text-opacity));
        }

        .dark\:text-gray-400 {
            color: #cbd5e0;
            color: rgba(203, 213, 224, var(--tw-text-opacity));
        }
    }
</style>

<script>
import { Head, Link } from '@inertiajs/inertia-vue3';
import GuestLayout from '../Layouts/Guest'
import Map from '../Components/Map/Map'
import FAQs from './FAQs'

export default {
    components: {
      Head,
      Link,
      GuestLayout,
      Map,
      FAQs,
    },
    props: {
        canLogin: Boolean,
        canRegister: Boolean,
        laravelVersion: String,
        phpVersion: String,
    },
}
</script>
