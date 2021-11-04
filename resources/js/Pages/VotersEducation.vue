<template>
  <div>
    <GuestLayout>
    <!-- <div>Voter's Registration</div> -->
    <!-- <pre>{{ articles }}</pre> -->
    <div class="container-md overflow-auto"  style="margin-top: 10%">
      <ElectionProcessInfo></ElectionProcessInfo>
      <h1 class="text-primary fw-bold my-5">Election News and Issues</h1>
      <NewsDisplay :articles="articles"></NewsDisplay>
      <Pagination />
      <!-- <pre>
        {{ articles }}
      </pre> -->
    </div>
    </GuestLayout>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import NewsDisplay from "../Components/News/NewsDisplay.vue";
import ElectionProcessInfo from "../Components/ElectionProcessInfo.vue";
import Pagination from "../Components/Pagination.vue";

import GuestLayout from "../Layouts/Guest.vue";

export default defineComponent({
  components: { NewsDisplay, ElectionProcessInfo, Pagination, GuestLayout },
  props: {
    articles: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>

<style></style>
