<template lang="">
  <ArisenHeader>
    <template #collapse-content>
      <div>Voters Registration</div>
      <div>Voters Education</div>
      <div>Candidate Profiles</div>
    </template>
  </ArisenHeader>
  <div class="" style="position: relative">
    <slot></slot>
  </div>
  <ArisenFooter></ArisenFooter>
</template>
<script>
import ArisenFooter from "../Components/Layout/ARISEnFooter.vue";
import ArisenHeader from "./Partials/Header.vue";

export default {
  components: {
    ArisenFooter,
    ArisenHeader,
  },
  data: () => ({}),
};
</script>
<style></style>
