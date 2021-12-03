<template>
  <div>
    <GuestLayout>
      <div class="container-md overflow-auto">
        <ElectionProcessInfo></ElectionProcessInfo>
        <h1 class="text-primary fw-bold my-5">Election News and Issues</h1>
        <NewsDisplay :articles="articles"></NewsDisplay>
      </div>
    </GuestLayout>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import NewsDisplay from "../Components/News/NewsDisplay.vue";
import ElectionProcessInfo from "../Components/ElectionProcessInfo.vue";

import GuestLayout from "../Layouts/Guest.vue";

export default defineComponent({
  components: { NewsDisplay, ElectionProcessInfo, GuestLayout },
  props: {
    articles: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>

<style></style>
