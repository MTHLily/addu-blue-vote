<template>
  <pre>
    {{ location }}
  </pre>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    location: Object,
  },
});
</script>

<style></style>
