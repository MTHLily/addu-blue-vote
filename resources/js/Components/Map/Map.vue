<template>
    <div class="container">
        <div class="d-flex flex-column">
            <h3 class="text-primary text-center">Voters Registration Sites</h3>
            <div class="row">
                <div class="col-sm-12">
                    <div class="mapcontainer bg-white">
                        <!-- add map here -->
                    </div>
                </div>
                <div class="col-12">
                    <carousel :items-to-show="1.5">
                        <slide v-for="slide in 10" :key="slide">
                            <Card />
                            <Card />
                        </slide>
                        <!-- <slide v-for="slide in 10" :key="slide">
                            <Card />
                        </slide> -->
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
}
</script>



<style scoped>
    
</style>