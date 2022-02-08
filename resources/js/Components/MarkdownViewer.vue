<template>
  <div class="prose" v-html="markdown" />
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
    size: {
      type: String,
      default: "md",
    },
  },
  setup(props) {
    const markdown = computed(() => marked(props.content));
    const sizeStyle = computed(() => ({
      "prose-sm lg:prose-base 2xl:prose-xl": props.size === "sm",
      "prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl": props.size === "md",
      "prose-lg lg:prose-xl xl:prose-2xl": props.size === "lg",
    }));

    return {
      markdown,
    };
  },
};
</script>
