<template>
  <div ref="wrapper"></div>
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import Viewer from "@toast-ui/editor/dist/toastui-editor-viewer";
export default {
  props: {
    content: {
      type: String,
      default: "",
    },
  },
  mounted() {
    new Viewer({
      el: this.$refs.wrapper,
      initialValue: this.content,
    });
  },
};
</script>

<style></style>
