<template>
  <div class="min-vh-100 d-flex flex-column">
    <header>
      <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
        <div class="container-fluid mx-auto">
          <Link class="navbar-brand" href="/">
            <img :src="image2" width="230" height="70" />
            <img :src="image" class="image-fluid" width="230" height="70" />
          </Link>
          <!-- <div class="row ">
            <h3 class="titles" style="color:white">Ateneo de Davao University</h3>
            <h4 class="titles" style="color:white">Blue Vote</h4>
          </div> -->
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
            <!-- <ul class="navbar-nav ms-auto">
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
                    <a class="dropdown-item" href="#Map">Registration Sites</a>
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
              <li class="nav-item">
                <Link class="nav-link" :href="route('login')">Login</Link>
              </li>
            </ul> -->
          </div>
        </div>
      </nav>
    </header>
    <main class="mt-4 flex-grow-1">
      <slot></slot>
    </main>
    <footer>
      <div class="text-center p-3 text-white bg-primary row">
        <div class="col-9">
          <b>Ateneo de Davao University Blue Vote</b> Copyright © 2021 |
          Developed by <b>ARISEn Lab</b>
        </div>
        <div class="col-1 row">
          <div class="col-1">
            <a href="https://www.facebook.com/adduarisen/">
              <i class="bi bi-facebook" style="color: #ffffff"></i>
            </a>
          </div>
          <div class="col-1">
            <a href="https://twitter.com/addu_arisen?lang=en">
              <i class="bi bi-twitter" style="color: #ffffff"></i>
            </a>
          </div>
          <div class="col-1">
            <a href="mailto:arisen.lab@addu.edu.ph?subject=subject text">
              <i class="bi bi-google" style="color: #ffffff"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import BreezeApplicationLogo from "@/Components/ApplicationLogo.vue";
import { Link } from "@inertiajs/inertia-vue3";
// import image from "@/Components/assets/addu-bv-logo.png";
import image from "@/Components/assets/addu-bv-logoText.png";
// import image from "@/Components/assets/adduLogo.png";
import image2 from "@/Components/assets/blueVoteLogo.png";

export default {
  components: {
    BreezeApplicationLogo,
    Link,
  },
  data: function () {
    return {
      image: image,
      image2: image2,
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
.titles{
  font-family: 'Times New Roman', Times, serif;
}
</style>
