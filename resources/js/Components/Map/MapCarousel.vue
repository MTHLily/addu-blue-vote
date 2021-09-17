<template>
  <carousel :items-to-show="1.5" snap-align="center">
    <slide v-for="poi in pois" :key="poi.id">
      <Card :poi="poi" @poi-clicked="$emit('poiClicked', $event)" />
    </slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import Card from "./Card";

export default {
  props: {
    pois: {
      type: Array,
      default: [],
    },
  },
  components: {
    Card,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>

<style></style>
