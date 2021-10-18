<template>
<div>

  <!-- <div>Voter's Registration</div> -->
  <!-- <pre>{{ articles }}</pre> -->
  <div>
    <ElectionProcessInfo></ElectionProcessInfo>
    <newsCard></newsCard>
  </div>
</div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import newsCard from "../Components/newsCard.vue";
import ElectionProcessInfo from "../Components/ElectionProcessInfo.vue";

export default defineComponent({
  components: {newsCard, ElectionProcessInfo, },
  props: {
    articles: {
      type: Array,
      default: [],
    },
  },
});
</script>

<style></style>
