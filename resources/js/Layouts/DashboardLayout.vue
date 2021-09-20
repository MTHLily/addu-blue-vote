<template>
  <div
    class="position-fixed mt-4 start-50 translate-middle"
    style="z-index: 11"
  >
    <div
      class="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      ref="messageToast"
    >
      <div class="toast-header">
        <i class="me-1" :class="toastMessage.icon"></i>
        <strong class="me-auto">{{ toastMessage.title }}</strong>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">{{ toastMessage.message }}</div>
    </div>
  </div>

  <!-- Header -->
  <div class="min-vh-100 d-flex flex-column">
    <header>
      <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
        <div class="nav-header px-4">
          <a data-bs-toggle="offcanvas" href="#mainMenu" role="button" aria-controls="main-menu">
            <i class="bi bi-list text-white fs-1"></i>
          </a> 
        </div>
        <div class="container-fluid mx-auto">
          <Link class="navbar-brand" href="/">
            <img :src="image2" width="140" height="70" />
            <img :src="image" class="image-fluid" width="230" height="70" />
          </Link>
          <!-- <button
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
                  <li><a class="dropdown-item text-white" href="#FAQs">FAQs</a></li>
                  <li>
                    <a
                      class="dropdown-item text-white"
                      href="https://irehistro.comelec.gov.ph/"
                      target="_blank"
                      >iRehistro</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item text-white" href="#Map">Registration Sites</a>
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
              </li>
            </ul>
          </div> -->
        </div>
      </nav>
    </header>

    <!-- Content -->
    <main class="mt-4 flex-grow-1">
      <slot></slot>
    </main>

    <!-- Footer -->
    <footer>
      <div class="text-center p-3 text-white bg-primary row">
        <div class="col-9">
          <b>Ateneo de Davao University Blue Vote</b> Copyright © 2021 |
          Developed by <b>ARISEn Lab</b>
        </div>
        <div class="col-1 row">
          <div class="col-1">
            <a href="https://www.facebook.com/adduarisen/" target="_blank">
              <i class="bi bi-facebook text-white"></i>
            </a>
          </div>
          <div class="col-1">
            <a href="https://twitter.com/addu_arisen?lang=en" target="_blank">
              <i class="bi bi-twitter text-white"></i>
            </a>
          </div>
          <div class="col-1">
            <a href="mailto:arisen.lab@addu.edu.ph?subject=subject text" target="_blank">
              <i class="bi bi-google text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Sidebar -->
    <nav class="main-menu offcanvas offcanvas-start" tabindex="-1" id="mainMenu">
      <Link
        :href="route('dashboard')"
        class="text-decoration-none"
      ><div class="container bg-white mx-auto mt-3 align-middle text-center p-3">
          <img :src="image2" width="60" height="30" />
          <span class="header text-primary align-middle fw-bolder ps-sm-3">AdDU Blue Vote</span>
        </div></Link
      >
      <ul class="mt-3">
        <li class="ms-4">
          <a class="nav-link active" data-bs-toggle="collapse" href="#subMenu" role="button" aria-expanded="false" aria-controls="collapseExample">
            <i class="bi bi-pen-fill text-primary text-center align-middle fs-3 p-2"></i>
            <span class="nav-text text-primary align-middle fs-6 fw-bolder p-2">
              Voters Registration
            </span>
          </a>
          <ul class="sub-menu collapse bg-primary p-3 my-2" id="subMenu">
            <li class="ms-4">
              <Link
                :href="route('information.index')"
                class="text-white fs-6 align-middle fw-bold p-2"
                >Information</Link
              >
            </li>
            <li class="ms-4">
              <Link
                :href="route('faqs.index')"
                class="text-white fs-6 align-middle fw-bold p-2"
                >FAQs</Link
              >
            </li>
            <li class="ms-4"><a class="text-white align-middle fw-bold p-2" data-bs-toggle="collapse" href="#moreMenu" role="button" aria-expanded="false" aria-controls="collapseExample">Registration Sites</a>
              <ul class="more-menu collapse mt-2" id="moreMenu">
                <li class="ms-4"><a class="text-white align-middle p-2" href="#">Cities</a></li>
                <li class="ms-4">
                  <Link
                    :href="route('districts.index')"
                    class="text-white align-middle p-2"
                  >Districts</Link>
                </li>
                <li class="ms-4">
                  <Link
                    :href="route('poi.index')"
                    class="text-white align-middle p-2"
                  >Point of Interest</Link>
                </li>
              </ul>
            </li>
            
          </ul>
        </li>
        <li class="ms-4">
          <a href="#">
            <i class="bi bi-info-circle-fill text-primary text-center align-middle fs-3 p-2"></i>
            <span class="nav-text text-primary align-middle fs-6 fw-bolder p-2">
              Voters Education
            </span>
          </a>
        </li>
        <li class="ms-4">
          <a href="#">
            <i class="bi bi-file-earmark-person-fill text-primary text-center align-middle fs-3 p-2"></i>
            <span class="nav-text text-primary align-middle fs-6 fw-bolder p-2">
              Candidates Profile
            </span>
          </a>
        </li>
        <li class="ms-4">
          <a href="#">
            <i class="bi bi-archive-fill text-primary text-center align-middle fs-3 p-2"></i>
            <span class="nav-text text-primary align-middle fs-6 fw-bolder p-2">
              Election Results
            </span>
          </a>
        </li>
      </ul>
    
      <ul class="logout mb-3">
        <li class="ms-4">
          <a href="#">
            <i class="bi bi-person-circle text-primary text-center align-middle fs-3 p-2"></i>
            <span class="nav-text text-primary align-middle fs-6 fw-bolder p-2">
              Logout
            </span>
          </a>
        </li>  
      </ul>
    </nav>
    <!-- <div class="content flex-grow-1">
      {{ $page.props.flash }}
      <slot />
    </div> -->
</div>
</template>

<script>
import BreezeApplicationLogo from "@/Components/ApplicationLogo.vue";
import image from "@/Components/assets/addu-bv-logoText.png";
import image2 from "@/Components/assets/blueVoteLogo.png";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { Toast } from "bootstrap";

export default {
  components: {
    BreezeApplicationLogo,
    Head,
    Link,
  },
  data: () => ({ toast: null }),
  computed: {
    toastMessage() {
      return {
        icon: this.$page.props.flash.success
          ? "bi-check-circle text-success"
          : "bi-exclamation-circle text-warning",
        title: this.$page.props.flash.success ? "Success" : "Warning",
        message:
          this.$page.props.flash.success || this.$page.props.flash.message,
      };
    },
  },
  data(){
    return {
      image: image,
      image2: image2,
    };
  },
  mounted() {
    const message = new Toast(this.$refs.messageToast);
    if (this.$page.props.flash.success || this.$page.props.flash.message)
      message.show();
    this.toast = message;
  },
  watch: {
    "$page.props.flash": function () {
      this.toast.show();
    },
  },
};
</script>

<style scoped>
/* Header Navbar */
.container-fluid {
  padding-left: 130px;
  padding-right: 250px;
}
.dropdown-item:hover,
.dropdown-item:focus {
  color: #dee2e6;
  background-color: #061b71;
}
.nav-link:hover {
  color: #dee2e6;
}
/* Sidebar */
.bi {
  display: table-cell;
  width: 60px;
  height: 45px;
}
/* Header */
.container{
  border-radius: 10px;
  width: 250px;
}
.main-menu .header {
  font-size: 18px;
}
/* Main Menu */
.main-menu {
  background:#ECECEC;
  width:300px;
}
.main-menu li {
  display:block;
  width:260px;
}
.main-menu li>a {
  position:relative;
  display:table;
  border-collapse:collapse;
  text-decoration:none;
  transition:all .1s linear;
}
.main-menu .nav-text {
  display:table-cell;
  width:190px;
}
.main-menu li:hover>a, .main-menu li:active>a{
  color:#fff;
  background-color:#D6D6D6;
  border-radius: 10px;
}
/* Sub Menu */
.sub-menu{
  width: 250px;
  border-radius: 10px;
}
.main-menu .sub-menu a{
  display:table-cell;
  width:190px;
}
.main-menu .sub-menu li:hover>a, .main-menu .sub-menu li:active>a{
  color:#fff;
  background-color:#1E419B;
  border-radius: 5px;
}
/* More Menu */
.sub-menu .more-menu a{
  display:table-cell;
  font-size:14px;
  width:165px;
}
.sub-menu .more-menu li:hover>a, .main-menu .sub-menu li:active>a{
  color:#fff;
  background-color:#061b71;
  border-radius: 6px;
}
/* Log Out */
.main-menu>ul.logout {
  position:absolute;
  left:0;
  bottom:0;
}
/* General CSS */
a:hover,a:focus {
  text-decoration:none;
}

nav ul,nav li {
  outline:0;
  margin:0;
  padding:0;
}
</style>