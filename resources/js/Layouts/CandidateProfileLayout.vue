<template>
  <div class="min-vh-100 d-flex flex-column">
    <ArisenHeader>
      <template #collapse-content>
        <ul class="nav navbar-nav navbar-dark ms-auto mb-2 mb-lg-0 gap-4">
          <li class="nav-item">
            <Link class="nav-link" :href="route('voters-registration')">
              Voters Registration
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" :href="route('voters-education')"
              >Voters Education</Link
            >
          </li>
          <li class="nav-item">
            <Link class="nav-link" :href="route('candidate-profiles.index')">
              Candidates Profile
            </Link>
          </li>
        </ul>
      </template>
    </ArisenHeader>
    <div class="flex-grow-1" style="position: relative">
      <slot></slot>
    </div>
    <ArisenFooter></ArisenFooter>
  </div>
</template>

<script>
import ArisenFooter from "../Components/Layout/ARISEnFooter.vue";
import ArisenHeader from "./Partials/Header.vue";

import { Link } from "@inertiajs/inertia-vue3";

export default {
  props: {
    locations: Array,
  },
  components: {
    ArisenFooter,
    ArisenHeader,
    Link,
  },
  data: () => ({}),
};
</script>

<style></style>
