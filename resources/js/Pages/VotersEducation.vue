<template>
<div>

  <div>Voter's Registration</div>
  <pre>{{ articles }}</pre>
  <div>
    <newsCard></newsCard>
  </div>
</div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import newsCard from "../Components/newsCard.vue";

export default defineComponent({
  components: {newsCard,  },
  props: {
    articles: {
      type: Array,
      default: [],
    },
  },
});
</script>

<style></style>
