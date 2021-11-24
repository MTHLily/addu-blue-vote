<template lang="">
  <div>
    <ArisenHeader>
      <template #collapse-content>
        <ul
            class="navbar-nav navbar-dark ms-auto mb-2 mb-lg-0 gap-4"
          >
            <li class="nav-item">
              <a class="nav-link" :href="route('voters-registration')">
                Voters Registration
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :href="route('voters-education')">Voters Education</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :href="route('candidate-profiles.index')">Candidate Profiles</a>
            </li>
        </ul>
        <!-- <div>Voters Registration</div>
        <div>Voters Education</div>
        <div>Candidate Profiles</div> -->
      </template>
    </ArisenHeader>
    <div class="" style="position: relative">
      <slot></slot>
    </div>
    <ArisenFooter></ArisenFooter>
  </div>
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
