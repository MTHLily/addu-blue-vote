<template>
  <div id="information">
    <Carousel :items-to-show="1">
      <InformationSlide
        v-for="info in information"
        :key="info.id"
        :info="info"
      ></InformationSlide>
    </Carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import InformationSlide from "./InformationSlide.vue";
import { Carousel } from "vue3-carousel";

export default {
  components: {
    Carousel,
    InformationSlide,
  },
  props: {
    information: {
      type: Array,
      default: [],
    },
  },
};
</script>
