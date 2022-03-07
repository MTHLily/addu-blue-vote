<template>
  <div class="card bg-primary p-3 mb-3">
    <div class="card-body">
      <h1
        class="card-header text-white border-0 text-center text-uppercase fw-bold lh-sm p-3 fs-1"
      >
        Platforms
      </h1>
      <div class="d-flex flex-column gap-4">
        <template v-for="platform in platforms">
          <PlatformCard :platform="platform" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import PlatformCard from "./Platforms/PlatformCard.vue";

export default defineComponent({
  components: { PlatformCard },
  props: {
    platforms: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
