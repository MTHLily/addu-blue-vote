<template>
  <Slide>
    <div
      class="bg-primary text-white vw-100 p-5"
      style="height: clamp(200px, 60vh, 1000px)"
    >
      <h1>{{ info.title }}</h1>
      <p class="lead">{{ info.content }}</p>
    </div>
  </Slide>
</template>

<script>
import { Slide } from "vue3-carousel";
export default {
  components: { Slide },
  props: {
    info: {
      type: Object,
      default: () => ({
        title: "Defualt title",
        content: "Default content",
      }),
    },
  },
};
</script>

<style></style>
