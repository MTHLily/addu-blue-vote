<template>
  <div
    class="position-fixed start-50 translate-middle"
    style="z-index: 1100; top: 4rem"
  >
    <div
      class="toast mt-4"
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

  <div class="min-vh-100 d-flex flex-column">
    <ArisenHeader>
      <template #before-logo>
        <div class="nav-header px-4">
          <a
            data-bs-toggle="offcanvas"
            href="#mainMenu"
            role="button"
            aria-controls="main-menu"
          >
            <i class="bi bi-list text-white fs-1"></i>
          </a>
        </div>
      </template>
      <template #collapse-content></template>
    </ArisenHeader>

    <!-- Content -->
    <main class="mt-4 flex-grow-1">
      <slot></slot>
    </main>

    <!-- Footer -->
    <ArisenFooter></ArisenFooter>

    <!-- Sidebar -->
    <ArisenDashboardSider :menu-options="menuOptions"></ArisenDashboardSider>
  </div>
</template>

<script>
import { Head, Link } from "@inertiajs/inertia-vue3";
import { Toast } from "bootstrap";
import ArisenFooter from "../Components/Layout/ARISEnFooter.vue";
import ArisenHeader from "./Partials/Header.vue";
import ArisenDashboardSider from "./Partials/DashboardSider.vue";

export default {
  components: {
    Head,
    Link,
    ArisenFooter,
    ArisenHeader,
    ArisenDashboardSider,
  },
  data: () => ({
    toast: null,
  }),
  computed: {
    toastMessage() {
      return {
        icon: this.$page.props.flash.success
          ? "bi-check-circle text-success"
          : "bi-exclamation-circle text-warning",
        title: this.$page.props.flash.success ? "Success" : "Warning",
        message:
          this.$page.props.flash.success ||
          this.$page.props.flash.message ||
          this.$page.props.flash.error,
      };
    },
    menuOptions() {
      return [
        {
          title: "Locations",
          icon: "bi-geo-alt-fill",
          route: "locations.index",
        },
        {
          title: "Points of Interest",
          icon: "bi-geo-fill",
          route: "poi.index",
        },
        {
          title: "Voter's Registration",
          icon: "bi-pen-fill",
          items: [
            {
              title: "Information",
              route: "information.index",
            },
            {
              title: "FAQs",
              route: "faqs.index",
            },
          ],
        },
        {
          title: "Voter's Education",
          icon: "bi-info-circle-fill",
          items: [
            {
              title: "News",
              route: "news.index",
            },
            {
              title: "News Sources",
              route: "news-sources.index",
            },
            {
              title: "Video Resources",
              route: "video-resources.index",
            },
          ],
        },
        {
          title: "Candidate Profiles",
          icon: "bi-people-fill",
          items: [
            {
              title: "Candidate Profiles",
              route: "candidates.index",
            },

            {
              title: "Issues",
              route: "issues.index",
            },
            {
              title: "Political Parties",
              route: "political-parties.index",
            },
          ],
        },
      ];
    },
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
/* .dropdown-item:hover,
.dropdown-item:focus {
  color: #dee2e6;
  background-color: #061b71;
}
.nav-link:hover {
  color: #dee2e6;
}
/* Sidebar */
/* .bi {
  display: table-cell;
  width: 60px;
  height: 45px;
}  */
/* Header */
/* .main-menu .header {
  font-size: 18px;
} */
/* Main Menu */
/* .main-menu {
  background: #ececec;
  width: 300px;
}
.main-menu li {
  display: block;
  width: 260px;
}
.main-menu li > a {
  position: relative;
  display: table;
  border-collapse: collapse;
  text-decoration: none;
  transition: all 0.1s linear;
}
.main-menu .nav-text {
  display: table-cell;
  width: 190px;
}
.main-menu li:hover > a,
.main-menu li:active > a {
  color: #fff;
  background-color: #d6d6d6;
  border-radius: 10px;
} */
/* Sub Menu */
/* .sub-menu {
  width: 250px;
  border-radius: 10px;
}
.main-menu .sub-menu a {
  display: table-cell;
  width: 190px;
}
.main-menu .sub-menu li:hover > a,
.main-menu .sub-menu li:active > a {
  color: #fff;
  background-color: #1e419b;
  border-radius: 5px;
} */
/* More Menu
.sub-menu .more-menu a { */
/* display: table-cell;
  font-size: 14px;
  width: 165px;
}
.sub-menu .more-menu li:hover > a,
.main-menu .sub-menu li:active > a {
  color: #fff;
  background-color: #061b71;
  border-radius: 6px;
} */
/* Log Out */
/* .main-menu > ul.logout {
  position: absolute;
  left: 0;
  bottom: 0;
} */
/* General CSS */
/* a:hover,
a:focus {
  text-decoration: none;
}

nav ul,
nav li {
  outline: 0;
  margin: 0;
  padding: 0;
} */
</style>
