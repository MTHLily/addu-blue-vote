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
        <div class="nav-header px-3">
          <a data-bs-toggle="offcanvas" href="#mainMenu" role="button" aria-controls="main-menu">
            <i class="bi bi-list"></i>
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
          <div class="collapse navbar-collapse" id="navbarNavDropdown"> -->
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
          <!-- </div> -->
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
      <div class="container">
          <img :src="image2" width="60" height="30" />
            <span class="header">AdDU Blue Vote</span>
      </div>
      <ul>
        <li>
          <a class="nav-link active" data-bs-toggle="collapse" href="#subMenu" role="button" aria-expanded="false" aria-controls="collapseExample">
            <i class="bi bi-pen-fill text-primary fs-3 p-2"></i>
            <span class="nav-text">
              Voters Registration
            </span>
          </a>
          <ul class="sub-menu collapse" id="subMenu">
            <li>
              <Link
                :href="route('information.index')"
                >Information</Link
              >
            </li>
            <li>
              <Link
                :href="route('faqs.index')"
                >FAQs</Link
              >
            </li>
            <li><a data-bs-toggle="collapse" href="#moreMenu" role="button" aria-expanded="false" aria-controls="collapseExample">Registration Sites</a>
              <ul class="more-menu collapse" id="moreMenu">
                <li><a href="#">Cities</a></li>
                <li>
                  <Link
                    :href="route('districts.index')"
                  >Districts</Link>
                </li>
                <li>
                  <Link
                    :href="route('poi.index')"
                  >Point of Interest</Link>
                </li>
              </ul>
            </li>
            
          </ul>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-info-circle-fill text-primary fs-3 p-2"></i>
            <span class="nav-text">
              Voters Education
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-file-earmark-person-fill text-primary fs-3 p-2"></i>
            <span class="nav-text">
              Candidates Profile
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-archive-fill text-primary fs-3 p-2"></i>
            <span class="nav-text">
              Election Results
            </span>
          </a>
        </li>
      </ul>
    
      <ul class="logout">
        <li>
          <a href="#">
            <i class="bi bi-person-circle text-primary fs-3 p-2"></i>
            <span class="nav-text">
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
  method(){
     $(document).ready(function(){
       $(".sub-menu li").on("click",function(){
                $(".sub-menu li").removeClass("active");
                $(this).addClass("active");
            })
        
        })
        $(".sub-menu li a").hover(function(e){
          /** Remove selected class first **/
          $(".sub-menu li a").removeClass("selected");
          /** add selected class on hover**/ 
          $(this).addClass("selected");
        });
  }
};
</script>

<style scoped>
/* Header Navbar */
.container-fluid {
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
.navbar i{
  color: #fff;
  font-size: 40px;
}
/* Icons */
.bi {
  position: relative;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  width: 60px;
  height: 45px;
}

/* Header */
.container{
  background: #fff;
  text-align: center;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px;
  width: 260px;
}
.main-menu .header {
  position:relative;
  vertical-align:middle;
  color: #08228D;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  padding-left: 15px;
}
/* Main Menu */
.main-menu {
  background:#ECECEC;
  border-right:1px solid #e5e5e5;
  top:0;
  bottom:0;
  height:100%;
  left:0;
  width:300px;
  overflow:hidden;
}
.main-menu>ul {
  margin:10px 0;
}
.main-menu li {
  position:relative;
  display:block;
  width:260px;
  margin-left: 25px;
}
.main-menu li>a {
  position:relative;
  display:table;
  border-collapse:collapse;
  border-spacing:0;
  color:#999;
  font-size: 14px;
  text-decoration:none;
  -webkit-transform:translateZ(0) scale(1,1);
  -webkit-transition:all .1s linear;
  transition:all .1s linear;
}
.main-menu .nav-text {
  position:relative;
  display:table-cell;
  vertical-align:middle;
  width:190px;
  color: #08228D;
  font-size: 18px;
  font-weight: 600;
  line-height: 1;
  padding: 10px;
}
.main-menu li:hover>a, .main-menu li:active>a{
  color:#fff;
  background-color:#D6D6D6;
  border-radius: 10px;
}
/* Sub Menu */
.sub-menu{
  background: #08228D;
  width: 250px;
  margin:10px 0px 10px 0px;
  border-radius: 10px;
  color: #fff;
  padding: 15px;
}
.main-menu .sub-menu a{
  position:relative;
  display:table-cell;
  vertical-align:middle;
  width:190px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  line-height: 1;
  padding: 8px;
}
.main-menu .sub-menu li:hover>a, .main-menu .sub-menu li:active>a{
  color:#fff;
  background-color:#1E419B;
  border-radius: 5px;
}
/* More Menu */
.sub-menu .more-menu a{
  position:relative;
  display:table-cell;
  vertical-align:middle;
  width:165px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
}
.more-menu{
  margin-top:8px;
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
nav {
-webkit-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
-o-user-select:none;
user-select:none;
}
nav ul,nav li {
  outline:0;
  margin:0;
  padding:0;
}
.area {
  background: #e2e2e2;
  width: 100%;
  height: 100%;
}

</style>