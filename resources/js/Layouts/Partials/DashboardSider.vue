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
          class="bg-white mx-auto mt-3 w-full align-middle text-center p-3 d-flex rounded align-items-center"
        >
          <img class="img w-1/2" :src="logo" height="30" />
          <div class="text-primary align-middle fw-bolder ps-sm-3">
            AdDU Blue Vote
          </div>
        </div>
      </Link>
      <div class="flex-grow-1">
        <n-menu
          :options="siderOptions"
          :value="currentSiderKey"
          :icon-size="25"
        />
      </div>
      <!-- <ul class="nav nav-pills flex-column mx-4 mt-4 gap-2 flex-grow-1">
        <template v-for="h1 in menuOptions" :key="h1.title">
          <div>
            <DashboardSiderItem :item="h1" head></DashboardSiderItem>
          </div>
        </template>
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
import { NMenu, NIcon } from "naive-ui";
import useMenu from "@/Composables/useMenu";

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
    NMenu,
    NIcon,
  },
  setup() {
    const { siderOptions, currentSiderKey } = useMenu();

    return {
      logo,
      siderOptions,
      currentSiderKey,
    };
  },
});
</script>

<style></style>
