<template>
  <div class="d-flex flex-column gap-4 mt-4">
    <span
      class="badge text-wrap text-whitefw-bolder p-3 fs-5 col-6 col-md-4 col-lg-2"
      :style="{
        'background-color': '#CE2029',
        'border-radius': '30px',
      }"
    >
    Voters Education
    </span>
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
        primaryColor: "#055094",
        secondaryColor: "#56A0D7",
      },
      {
        step: "STEP 2",
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        primaryColor: "#FAA728",
        secondaryColor: "#CE2029",
      },
      {
        step: "STEP 3",
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        primaryColor: "#379DD2",
        secondaryColor: "#FAA728",
      },
    ],
  }),
};
</script>

<style></style>
