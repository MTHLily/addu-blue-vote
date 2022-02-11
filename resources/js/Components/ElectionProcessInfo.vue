<template>
  <div class="d-flex flex-column gap-4 mt-4">
    <div>
      <span
        class="badge text-wrap text-whitefw-bolder p-3 fs-5"
        :style="{
          'background-color': '#CE2029',
          'border-radius': '30px',
        }"
      >
        Voters Education
      </span>
    </div>
    <h1 class="text-primary fw-bold">Election Process</h1>

    <template v-for="step in electionProcess" :key="step.step">
      <StepCard :processStep="step"></StepCard>
    </template>
  </div>
</template>

<script>
import StepCard from "./ElectionProcess/ElectionProcessCard.vue";
export default {
  components: {
    StepCard,
  },
  props: {
    electionProcess: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style></style>
