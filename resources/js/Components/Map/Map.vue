<template>
    <div class="map container" id="Map">
        <div class="d-flex flex-column">
            <h2 class="text-primary text-center p-3 fw-bolder">Voters Registration Sites</h2>
            <div class="row">
                <!-- map -->
                <div class=" col-12">
                    <div class=" container bg-secondary">
                        <img src="https://www.google.com/maps/vt/data=3gGHqQyK3Znb6Kx7eE7_nx6P49wJ5EPY2Z2D07DxeIqJZedngTXei4FRI1CoEVkVSBcKJWr0NsabqS03OPfdX70S8Y1BBq1B1j01zNt9Y5RhR_RbeRSRWYG1zDpSgp7Z3UOr1v112VG__LJlFWsHzwqgV0qUddOf4bUfpA6KkeUBgalHl2MYtMhtfcmcywx5d_1DA7-Dla-7BXWhj-7ONgFg9C1lzlkE11cWDZ6uNwr6ADEKenjzIsZI" alt="map">
                    </div>
                </div>
                
                <div class="row overlap">    
                    <!-- filters -->
                    <div class="container header row">
                        <div class="filters row col-8">
                            <div class="btn-group col-2 px-2">
                                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Barangay
                                </button>
                                <ul class="dropdown-menu">
                                    ...
                                </ul>
                            </div>
                            <div class="btn-group col-2 px-2">
                                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    District
                                </button>
                                <ul class="dropdown-menu">
                                    ...
                                </ul>
                            </div>
                        </div>
                        <form class="d-flex col-2 w-25">
                            <input class="form-control me-2" type="search" placeholder="Search 🔎" aria-label="Search">
                        </form>
                    </div>

                    <!-- legend -->
                    <div class="legend gy-2 col-auto mb-3">
                        <div class="card">
                            <!-- <div class="card-body"> -->
                                <h5>🔴 District 1</h5>
                                <h5>🟡 District 2</h5>
                                <h5>🔵 District 3</h5>
                            <!-- </div> -->
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <carousel :items-to-show="2">
                        <slide v-for="slide in 10" :key="slide">
                            <Card />
                        </slide>
                        <slide v-for="slide in 10" :key="slide">
                            <Card />
                        </slide>
                        <template #addons>
                            <navigation />
                            <pagination />
                        </template>
                    </carousel>
                </div>
            </div>
        </div>
        <!-- <div class="d-flex flex-column">
            <h3>Voters Registration Sites</h3>
            <Card />
        </div> -->
    </div>
</template>



<script>
import Card from './Card'
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    components: {
        Card,
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
        data: () => ({
            // carousel settings
            settings: {
                itemsToShow: 3.5,
                snapAlign: 'center',
            },
            locations:[
                { 
                    img:"",
                    district:"District 1",
                    name:"Ateneo de Davao University",
                    address:"",
                    contact:"",
                },
            ],

            // breakpoints are mobile first
            // any settings not specified will fallback to the carousel settings
            breakpoints: {
            // 700px and up
                300: {
                    itemsToShow: 1.5,
                    snapAlign: 'center',
                },
                700: {
                    itemsToShow: 3.5,
                    snapAlign: 'center',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 5,
                    snapAlign: 'start',
                },
            },
        }),
}
</script>



<style scoped>

    .map{
        position: relative;
    }
    .overlap{
        position: absolute;
    }
    .legend{
        align-content: flex-end;
        width: 150px;
        height: 20px;
    }
    :target{
        padding-top:120px;
        margin-top:-120px;
    }
</style>