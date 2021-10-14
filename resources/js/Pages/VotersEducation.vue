<template>
  <div>Voter's Registration</div>
  <pre>{{ articles }}</pre>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    articles: {
      type: Array,
      default: [],
    },
  },
});
</script>

<style></style>
