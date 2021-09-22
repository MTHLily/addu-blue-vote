<template>
  <!-- Header -->
  <div class="min-vh-100 d-flex flex-column">
    <header class="navbar sticky-top navbar-dark bg-primary navbar-expand-lg">
      <div class="container-fluid mx-auto">
        <Link class="navbar-brand" href="/">
          <img :src="image" class="image-fluid" height="50" />
        </Link>
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
                class="dropdown-menu bg-primary"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item text-white" href="#voter-registration"
                    >Registration Process</a
                  >
                </li>
                <li>
                  <a class="dropdown-item text-white" href="#faqs">FAQs</a>
                </li>
                <li>
                  <a
                    class="dropdown-item text-white"
                    href="https://irehistro.comelec.gov.ph/"
                    target="_blank"
                    >iRehistro</a
                  >
                </li>
                <li>
                  <a class="dropdown-item text-white" href="#map"
                    >Registration Sites</a
                  >
                </li>
              </ul>
            </li>
            <!-- <li class="nav-item dropdown">
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
                  class="dropdown-menu bg-primary"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item text-white" href="#"
                      >Election Process Information</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item text-white" href="#"
                      >Election News and Issues</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item text-white" href="#"
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
              <li class="nav-item">
                <Link class="nav-link" :href="route('login')">Login</Link>
              </li> -->
          </ul>
        </div>
      </div>
    </header>

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
import image from "@/Components/assets/logo.png";

export default {
  components: {
    Link,
    ArisenFooter,
  },
  data: function () {
    return {
      image: image,
      // image2: image2,
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
.titles {
  font-family: "Times New Roman", Times, serif;
}

:target {
  padding-top: 90px;
  margin-top: -90px;
}
</style>
