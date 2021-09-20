<template>
  <Slide>
    <div
      class="bg-primary text-white vw-100 p-5"
      style="height: clamp(200px, 60vh, 1000px);background-size: cover;background-repeat: no-repeat;background-position: center;background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-9/65932238_2354332941290721_9038293276070772736_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=973b4a&_nc_ohc=zGMPHZYV8E8AX-EcwRS&_nc_ht=scontent.fmnl8-2.fna&oh=fe3f8b351ab6dd028e4bc323b591cce1&oe=616D8039'); "
      
    >
      <h1>{{ info.title }}</h1>
      <!-- <div class="text-white">
        <MarkdownViewer
          :content="info.content"
          class="text-white"
        ></MarkdownViewer>
      </div> -->
      <p class="lead">{{ info.content }}</p>
    </div>
  </Slide>
</template>

<script>
import { Slide } from "vue3-carousel";
import MarkdownViewer from "../MarkdownViewer.vue";

export default {
  components: { Slide, MarkdownViewer },
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
