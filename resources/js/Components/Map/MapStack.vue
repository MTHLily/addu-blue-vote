<template>
  <div class="container">
    <div
      class="row mt-4"
      v-for="districtSection in districtAndPoi"
      :key="districtSection.id"
    >
      <div class="d-flex gap-2 flex-column" v-if="districtSection.sites.length">
        <h3 class="text-primary text-uppercase">
          <a href="#map" @click="$emit('districtClicked', districtSection)">{{
            districtSection.name
          }}</a>
        </h3>
        <div class="row row-cols-2 row-cols-md-3 gy-4">
          <div class="col" v-for="poi in districtSection.sites" :key="poi.id">
            <Card
              :poi="poi"
              class="h-100"
              @poi-clicked="$emit('poiClicked', $event)"
              @district-clicked="$emit('districtClicked', $event)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import Card from "./MapCard";

export default {
  emits: ["poiClicked", "districtClicked"],
  props: {
    pois: {
      type: Array,
      default: [],
    },
    districts: {
      type: Array,
      default: [],
    },
  },
  computed: {
    districtAndPoi() {
      return this.districts.map((district) => {
        return {
          ...district,
          sites: this.pois.filter((poi) => poi.district_id == district.id),
        };
      });
    },
  },
  components: {
    Card,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data: () => ({
    slideIndex: 1,
  }),
};
</script>

<style></style>
