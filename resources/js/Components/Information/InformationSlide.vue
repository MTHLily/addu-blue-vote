<template>
  <div
    class="info-slide d-flex flex-column justify-content-center text-white w-full p-5 text-center min-h-screen mx-auto"
    :style="{
      background: coverImg
        ? `linear-gradient(rgba(8, 34, 141, 0.5), rgba(8, 34, 141, 0.5)), url('${coverImg}') top left / cover no-repeat`
        : `rgb(8, 34, 141)`,
    }"
  >
    <h1 class="text-uppercase display-1" style="font-family: Montserrat">
      {{ info.title }}
    </h1>

    <MarkdownViewer
      style="font-family: 'Josefin Sans'"
      class="text-white text-center w-full"
      :content="markedContent"
      size="lg"
    />

    <div v-if="info.link">
      <a :href="info.link" class="btn btn-primary btn-lg" target="_blank">
        Learn More
      </a>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import MarkdownViewer from "../MarkdownViewer.vue";
import { computed } from "vue";

export default {
  components: { MarkdownViewer },
  props: {
    info: {
      type: Object,
      default: () => ({
        title: "Defualt title",
        content: "Default content",
      }),
    },
    preview: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const markedContent = computed(() => marked(props.info.content));

    const coverImg = props.preview
      ? computed(() =>
          props.info.cover?.file
            ? URL.createObjectURL(props.info.cover.file)
            : props.info.cover?.url
        )
      : props.info.cover_url;

    console.log(coverImg);

    return {
      markedContent,
      coverImg,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&family=Montserrat:wght@700&display=swap");

.info-slide {
  height: clamp(200px, 100vh, 1000px);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
