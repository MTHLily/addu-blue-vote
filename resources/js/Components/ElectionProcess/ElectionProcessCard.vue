<template>
  <div
    class="card p-3 shadow"
    :style="`background-color: ${
      processStep.primary_color || '#055094'
    }; border-radius: 20px`"
  >
    <div class="m-4">
      <span
        class="text-wrap text-white fw-bolder px-3 py-2 fs-4"
        :style="`background-color: ${
          processStep.secondary_color || processStep.primary_color || '#ce2029'
        }; border-radius: 30px; max-width: 75%; line-height: 1.65`"
      >
        {{ processStep.title }}
      </span>
    </div>
    <div class="text-white fs-6 mx-5 mb-4">
      <MarkdownViewer
        class="text-white"
        :content="processStep.description"
        size="lg"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import MarkdownViewer from "../MarkdownViewer.vue";

export default defineComponent({
  props: {
    processStep: {
      type: Object,
      default: () => ({
        step: "STEP DEFAULT",
        title: "Default Title",
        description: "Default Description",
        primary_color: "#055094",
        secondary_color: "#ce2029",
      }),
    },
  },
  components: { MarkdownViewer },
});
</script>
