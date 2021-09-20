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

  <div class="area"></div>
  <nav class="main-menu">
    <div class="container">
        <img :src="image" width="60" height="30" />
          <span class="header">AdDU Blue Vote</span>
    </div>
    <ul>
      <li>
        <a href="#">
          <i class="bi bi-pen-fill p-2"></i>
          <span class="nav-text">
            Voters Registration
          </span>
        </a>
        <ul class="sub-menu">
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
          <li><a href="#">Registration Sites</a>
            <ul class="more-menu">
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
          <i class="bi bi-info-circle-fill p-2"></i>
          <span class="nav-text">
            Voters Education
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="bi bi-file-earmark-person-fill p-2"></i>
          <span class="nav-text">
            Candidates Profile
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="bi bi-archive-fill p-2"></i>
          <span class="nav-text">
            Election Results
          </span>
        </a>
      </li>
    </ul>
  
    <ul class="logout">
      <li>
        <a href="#">
          <i class="bi bi-person-circle bi-2x"></i>
          <span class="nav-text">
            Logout
          </span>
        </a>
      </li>  
    </ul>
  </nav>
  <div class="flex-grow-1">
    <!-- {{ $page.props.flash }} -->
    <slot />
  </div>
</template>

<script>
import { Head, Link } from "@inertiajs/inertia-vue3";
import { Toast } from "bootstrap";
import image from "@/Components/assets/Blue_Vote.png";

export default {
  components: {
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
/* Icons */
.bi {
  position: relative;
  display: table-cell;
  width: 60px;
  height: 45px;
  text-align: center;
  vertical-align: middle;
  font-size:30px;
  color: #08228D;
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
  position:absolute;
  top:0;
  bottom:0;
  height:100%;
  left:0;
  width:300px;
  float: left;
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
.main-menu li:hover>a{
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
.main-menu .sub-menu li:hover>a{
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
.sub-menu .more-menu li:hover>a{
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
  float: left;
  background: #e2e2e2;
  width: 100%;
  height: 100%;
}
</style>