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
  data: () => ({
    electionProcess: [
      {
          step: "STEP 1",
          title: "Lorem ipsum dolor sit amet",
          description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          primaryColor: "#083b74",
          secondaryColor: "#065194",
      },
      {
          step: "STEP 2",
          title: "Lorem ipsum dolor sit amet",
          description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          primaryColor: "#fdb338",
          secondaryColor: "#b5231b",
      },
      {
          step: "STEP 3",
          title: "Lorem ipsum dolor sit amet",
          description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          primaryColor: "#065194",
          secondaryColor: "#fdb338",
      },
    ],
  }),
};
</script>

<style></style>
