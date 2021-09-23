<template>
  <div class="container">
    <div
      class="row"
      v-for="districtSection in districtAndPoi"
      :key="districtSection.id"
    >
      <div class="d-flex flex-column" v-if="districtSection.sites.length">
        <h3 class="text-primary text-uppercase">{{ districtSection.name }}</h3>
        <div class="row">
          <div
            class="col-12 col-sm-6 col-md-4"
            v-for="poi in districtSection.sites"
            :key="poi.id"
          >
            <Card
              :poi="poi"
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
