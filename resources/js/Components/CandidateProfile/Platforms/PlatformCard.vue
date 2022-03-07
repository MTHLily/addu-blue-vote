<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">{{ platform.title }}</h2>
      <p>
        <MarkdownViewer :content="platform.description" />
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MarkdownViewer from "@/Components/MarkdownViewer.vue";

export default defineComponent({
  props: {
    platform: {
      type: Object,
      required: true,
    },
  },
  components: { MarkdownViewer },
});
</script>
