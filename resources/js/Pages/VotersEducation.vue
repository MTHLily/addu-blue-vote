<template>
  <div>
    <!-- <div>Voter's Registration</div> -->
    <!-- <pre>{{ articles }}</pre> -->
    <div class="container-md overflow-auto">
      <ElectionProcessInfo></ElectionProcessInfo>
      <h1 class="text-primary fw-bold my-5">Election News and Issues</h1>
      <NewsDisplay :articles="articles"></NewsDisplay>
      <pre>
        {{ articles }}
      </pre>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import NewsDisplay from "../Components/News/NewsDisplay.vue";
import ElectionProcessInfo from "../Components/ElectionProcessInfo.vue";

export default defineComponent({
  components: { NewsDisplay, ElectionProcessInfo },
  props: {
    articles: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>

<style></style>
