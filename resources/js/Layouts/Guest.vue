<template>
  <CandidateProfileLayout>
    <slot />
  </CandidateProfileLayout>
</template>

<script>
import { defineComponent } from "vue";
import CandidateProfileLayout from "./CandidateProfileLayout.vue";

export default defineComponent({
  components: {
    CandidateProfileLayout,
  },
});
</script>
