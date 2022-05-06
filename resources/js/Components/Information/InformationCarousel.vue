<template>
  <div id="information">
    <!-- <Carousel :items-to-show="1" :autoplay="100" :wrap-around="true">
      <InformationSlide
        v-for="info in information"
        :key="info.id"
        :info="info"
      ></InformationSlide>
    </Carousel> -->
    <n-carousel
      autoplay
      draggable
      show-arrow
      :interval="5000"
      dot-placement="top"
    >
      <n-carousel-item v-for="info in information" :key="info.id">
        <InformationSlide :info="info"></InformationSlide>
      </n-carousel-item>
    </n-carousel>
  </div>
</template>

<script>
import InformationSlide from "./InformationSlide.vue";
import { NCarousel, NCarouselItem } from "naive-ui";

export default {
  components: {
    NCarousel,
    NCarouselItem,
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
