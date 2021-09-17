<template>
  <Slide>
    <div
      class="bg-primary text-white vw-100 p-5"
      style="height: clamp(200px, 60vh, 1000px)"
    >
      <h1>{{ info.title }}</h1>
      <!-- <div class="text-white">
        <MarkdownViewer
          :content="info.content"
          class="text-white"
        ></MarkdownViewer>
      </div> -->
      <!-- <p class="lead">{{ info.content }}</p> -->
      <div v-html="markedContent"></div>
    </div>
  </Slide>
</template>

<script>
import { Slide } from "vue3-carousel";
import marked from "marked";

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
  computed: {
    markedContent() {
      return marked(this.info.content);
    },
  },
};
</script>

<style></style>
