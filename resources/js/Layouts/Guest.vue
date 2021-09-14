<template>
  <div
    class="
      min-h-screen
      flex flex-col
      sm:justify-center
      items-center
      pt-6
      sm:pt-0
      bg-gray-100
    "
  >
    <header>
      <slot name="header">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
          <div class="container-fluid mx-auto">
            <a class="navbar-brand" href="#">
              <img :src="image" width="230" height="70" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Voters Registration
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li><a class="dropdown-item" href="#FAQs">FAQs</a></li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="https://irehistro.comelec.gov.ph/"
                        target="_blank"
                        >iRehistro</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#Map"
                        >Registration Sites</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Voters Education
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="#"
                        >Election Process Information</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        >Election News and Issues</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        >Voters Responsibility and Rights</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" disabled>Candidate's Profile</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" disabled>Election Results</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </slot>
    </header>
    <!-- <main> -->
    <!-- We want main content here -->
    <!-- <slot name="content"></slot> -->
    <!-- </main> -->
    <!-- <footer> -->
    <!-- We want footer content here -->
    <!-- <slot name="footer"></slot> -->
    <!-- </footer> -->
    <!-- </div>   -->
    <!-- <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <main><slot></slot></main>
    </div> -->
    <footer>
      <slot name="footer">
        <div class="text-center p-3 text-white bg-primary">
          <b>Ateneo de Davao University Blue Vote</b> Copyright © 2021 |
          Developed by <b>ARISEn Lab</b>
        </div>
      </slot>
    </footer>
  </div>
</template>

<script>
import BreezeApplicationLogo from "@/Components/ApplicationLogo.vue";
import { Link } from "@inertiajs/inertia-vue3";
import image from "@/Components/assets/addu-bv-logo.png";

export default {
  components: {
    BreezeApplicationLogo,
    Link,
  },
  data: function () {
    return {
      image: image,
    };
  },
};
</script>

<style lang="css" scoped>
/* ul{
    display: flex;

} */
.navbar {
  padding-left: 220px;
  padding-right: 220px;
}
.dropdown-menu {
  background-color: #08228d;
}

.dropdown-item {
  color: white;
}

.dropdown-item:hover,
.dropdown-item:focus {
  color: #dee2e6;
  background-color: #061b71;
}

.nav-link {
  color: white;
}
.nav-link:hover {
  color: #dee2e6;
}
</style>
