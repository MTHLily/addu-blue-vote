<template>
<GuestLayout />
    <Head title="Welcome" />
    <div>

        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://scontent.fdvo4-1.fna.fbcdn.net/v/t1.6435-9/65932238_2354332941290721_9038293276070772736_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=MARoGMRJnzoAX9gLUXP&_nc_ht=scontent.fdvo4-1.fna&oh=b845a75990a59a7faf2442f35da6e7cc&oe=6161A2B9" class="d-block w-100" alt="1">
                    <div class="info">
                        <h1 class="p-2">What is Blue Vote?</h1>
                        <h5 class="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Et pharetra pharetra massa massa ultricies mi quis hendrerit. Interdum posuere lorem ipsum dolor.
                        </h5>   
                        <a href="https://www.facebook.com/AdDUBlueVote" target="_blank">
                            <button class="btn btn-primary btn-lg" role="button">Learn More</button>  
                        </a>
                    </div>      
                </div>
                <div class="carousel-item">
                    <img src="https://scontent.fdvo4-1.fna.fbcdn.net/v/t1.6435-9/65856258_2354333537957328_2038116639429361664_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=g5UPTITnr8cAX-BdDlo&_nc_ht=scontent.fdvo4-1.fna&oh=65bcf11a9397ca58f960cec393b937f0&oe=616106AC" class="d-block w-100" alt="2">
                    <div class="info">
                        <h1 class="p-2">iRehistro</h1>
                        <h5 class="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Et pharetra pharetra massa massa ultricies mi quis hendrerit. Interdum posuere lorem ipsum dolor.
                        </h5>   
                        <a href="https://irehistro.comelec.gov.ph/" target="_blank">
                            <button class="btn btn-primary btn-lg" role="button">Register</button>  
                        </a>
                    </div>  
                </div>
                <div class="carousel-item">
                    <img src="https://scontent.fceb1-3.fna.fbcdn.net/v/t1.6435-9/65896675_2354334194623929_8450868180930265088_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHF7QP4XCdqAsGlybqQZQ58ooqOb4jUwleiio5viNTCV-2nU3BAAODgEyRDTGDcqRYxvGQBGFHg1ju4DI1IqjR8&_nc_ohc=HqriDtg-ToEAX9mXFTW&_nc_ht=scontent.fceb1-3.fna&oh=241264545b99c2d76ebcb80d14e5ddff&oe=6166D1E3" class="d-block w-100" alt="3">
                    <div class="info">
                        <h1 class="p-2">Voters Registration Sites</h1>
                        <h5 class="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Et pharetra pharetra massa massa ultricies mi quis hendrerit. Interdum posuere lorem ipsum dolor.
                        </h5>   
                        <a href="#Map">
                            <button class="btn btn-primary btn-lg" role="button">See More</button>  
                        </a>
                    </div>  
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
<GuestLayout />
</template>

<style scoped>
    .carousel-item:after {
        content:"";
        display:block;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background:rgba(8, 34, 141,0.6);
    }
    img{
        filter: gray; /* IE6-9 */
        -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
        filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
    }
    .info {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 3;
        color: #fff;
        text-align: center;
        -webkit-transform: translate3d(-50%,-50%,0);
            -moz-transform: translate3d(-50%,-50%,0);
            -ms-transform: translate3d(-50%,-50%,0);
            -o-transform: translate3d(-50%,-50%,0);
                transform: translate3d(-50%,-50%,0);
    }
    .info h1{
        font-size: 4em;    
        font-weight: bold;
        margin: 0;
        padding: 0;
    }
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
