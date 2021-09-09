<template>
    <div class="container">
        <div class="d-flex flex-column">
            <h3 class="text-primary text-center">Voters Registration Sites</h3>
            <div class="row">
                <div class="col-sm-12">
                    <div class="map container bg-secondary justify-content-md-center">
                        
                        <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" class="img-fluid rounded-center justify-content-md-center" alt="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg">
                    </div>
                </div>
                <div class="col-12">
                    <carousel :items-to-show="3.5">
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
    
</style>