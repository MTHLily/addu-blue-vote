<template>
  <nav
    class="main-menu offcanvas offcanvas-start"
    data-bs-scroll="true"
    tabindex="-1"
    id="mainMenu"
  >
    <div class="d-flex flex-column h-100">
      <Link :href="route('dashboard')" class="text-decoration-none">
        <div
          class="
            bg-white
            mx-auto
            mt-3
            w-75
            align-middle
            text-center
            p-3
            d-flex
            rounded
            align-items-center
          "
        >
          <img class="img" :src="logo" height="30" />
          <div class="text-primary align-middle fw-bolder ps-sm-3">
            AdDU Blue Vote
          </div>
        </div>
      </Link>
      <ul class="nav nav-pills flex-column mx-4 mt-4 gap-2 flex-grow-1">
        <template v-for="h1 in menuOptions" :key="h1.title">
          <div>
            <DashboardSiderItem :item="h1" head></DashboardSiderItem>
          </div>
        </template>
      </ul>
      <!-- <ul class="mt-3">
        <li class="ms-4">
          <a
            class="nav-link active"
            data-bs-toggle="collapse"
            href="#subMenu"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <i
              class="
                bi bi-pen-fill
                text-primary text-center
                align-middle
                fs-3
                p-2
              "
            ></i>
            <span
              class="
                nav-text
                text-primary
                align-middle
                fs-6
                fw-bolder
                py-1
                px-2
              "
            >
              Voters Registration
            </span>
          </a>
          <ul class="sub-menu collapse bg-primary p-3 my-2" id="subMenu">
            <li class="ms-4">
              <Link
                :href="route('information.index')"
                class="text-white fs-6 align-middle fw-bold py-1 px-2"
                >Information</Link
              >
            </li>
            <li class="ms-4">
              <Link
                :href="route('faqs.index')"
                class="text-white fs-6 align-middle fw-bold py-1 px-2"
                >FAQs</Link
              >
            </li>
            <li class="ms-4">
              <a
                class="text-white align-middle fw-bold py-1 px-2"
                data-bs-toggle="collapse"
                href="#moreMenu"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                >Registration Sites</a
              >
              <ul class="more-menu collapse mt-2" id="moreMenu">
                <li class="ms-4">
                  <a class="text-white align-middle py-1 px-2" href="#"
                    >Cities</a
                  >
                </li>
                <li class="ms-4">
                  <Link
                    :href="route('districts.index')"
                    class="text-white align-middle py-1 px-2"
                    >Districts</Link
                  >
                </li>
                <li class="ms-4">
                  <Link
                    :href="route('poi.index')"
                    class="text-white align-middle py-1 px-2"
                    >Point of Interest</Link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="ms-4">
          <a href="#">
            <i
              class="
                bi bi-info-circle-fill
                text-primary text-center
                align-middle
                fs-3
                p-2
              "
            ></i>
            <span
              class="
                nav-text
                text-primary
                align-middle
                fs-6
                fw-bolder
                py-1
                px-2
              "
            >
              Voters Education
            </span>
          </a>
        </li>
        <li class="ms-4">
          <a href="#">
            <i
              class="
                bi bi-file-earmark-person-fill
                text-primary text-center
                align-middle
                fs-3
                p-2
              "
            ></i>
            <span
              class="
                nav-text
                text-primary
                align-middle
                fs-6
                fw-bolder
                py-1
                px-2
              "
            >
              Candidates Profile
            </span>
          </a>
        </li>
        <li class="ms-4">
          <a href="#">
            <i
              class="
                bi bi-archive-fill
                text-primary text-center
                align-middle
                fs-3
                p-2
              "
            ></i>
            <span
              class="
                nav-text
                text-primary
                align-middle
                fs-6
                fw-bolder
                py-1
                px-2
              "
            >
              Election Results
            </span>
          </a>
        </li>
      </ul> -->
      <Link
        as="button"
        class="btn btn-outline-primary m-4"
        method="post"
        :href="route('logout')"
      >
        <i class="bi bi-person-circle fs-4"></i>
        <span class="fs-4"> Logout </span>
      </Link>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import { Link } from "@inertiajs/inertia-vue3";
import logo from "@/Components/assets/blue vote logo.png";
import DashboardSiderItem from "@/Components/Layout/DashboardSiderItem.vue";

export default defineComponent({
  props: {
    menuOptions: {
      type: Array,
      default: [],
    },
  },
  components: {
    Link,
    DashboardSiderItem,
  },
  data: () => ({
    logo,
  }),
});
</script>

<style></style>
