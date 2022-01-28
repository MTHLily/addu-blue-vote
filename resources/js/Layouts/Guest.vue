<template>
  <!-- Header -->
  <div class="min-vh-100 d-flex flex-column">
    <ArisenHeader>
      <template #collapse-content>
        <ul class="navbar-nav navbar-dark ms-auto mb-2 mb-lg-0 gap-4">
          <li class="nav-item">
            <Link class="nav-link" :href="route('voters-education')"
              >Voters Education</Link
            >
          </li>
          <li class="nav-item">
            <Link class="nav-link" :href="route('candidate-profiles.index')"
              >Candidate Profiles</Link
            >
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Registration Process
            </a>
            <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#voter-registration">Voter Registration</a>
              </li>
              <li>
                <a class="dropdown-item" href="#faqs">FAQs</a>
              </li>
              <!-- <li>
                <a
                  class="dropdown-item"
                  href="https://irehistro.comelec.gov.ph/"
                  target="_blank"
                >
                  iRehistro
                </a>
              </li> -->
              <li>
                <a class="dropdown-item" href="#map">Registration Sites</a>
              </li>
            </ul>
          </li>


          <li class="nav-item">
            <a class="nav-link" href="#faqs">FAQs</a>
          </li>
          <!-- <li class="nav-item">
            <a
              class="nav-link"
              href="https://irehistro.comelec.gov.ph/"
              target="_blank"
            >
              iRehistro
            </a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link" href="#map">Registration Sites</a>
          </li>
        </ul>
      </template>
    </ArisenHeader>

    <!-- Content -->
    <main class="flex-grow-1">
      <slot></slot>
    </main>

    <!-- Footer -->
    <ArisenFooter></ArisenFooter>
  </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";
import ArisenFooter from "../Components/Layout/ARISEnFooter.vue";
import ArisenHeader from "./Partials/Header.vue";

export default {
  components: {
    Link,
    ArisenFooter,
    ArisenHeader,
  },
};
</script>

<style lang="css" scoped>
.navbar-logo {
  max-height: 50px;
  max-width: 80%;
}
</style>
