<template>
  <div class="min-vh-100 d-flex flex-column">
    <ArisenHeader>
      <template #collapse-content>
        <ul class="nav navbar-nav navbar-dark ms-auto mb-2 mb-lg-0 gap-4">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              id="votersRegistrationDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Voters Registration
            </a>
            <ul
              class="dropdown-menu"
              aria-labelledby="votersRegistrationDropdown"
            >
              <li>
                <Link
                  class="dropdown-item"
                  :href="`${route('voters-registration')}#voter-registration`"
                >
                  Registration Process
                </Link>
              </li>
              <li>
                <Link
                  class="dropdown-item"
                  :href="`${route('voters-registration')}#faqs`"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  class="dropdown-item"
                  :href="`${route('voters-registration')}#map`"
                >
                  Registration Sites
                </Link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <Link class="nav-link" :href="route('voters-education')">
              Voters Education
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" :href="route('candidate-profiles.index')">
              Candidates Profile
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" :href="route('voting-precints')">
              Voting Precints
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" :href="route('about-us')">
              About Us
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
  components: {
    ArisenFooter,
    ArisenHeader,
    Link,
  },
};
</script>
