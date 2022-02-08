<template>
  <div class="prose md:prose-lg" v-html="markdown" />
</template>

<script>
import marked from "marked";
import { computed } from "vue";

export default {
  props: {
    content: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const markdown = computed(() => marked(props.content));

    return {
      markdown,
    };
  },
};
</script>
