<template>
  <Head title="Dashboard" />
  <DashboardLayout>
    <div class="d-flex">
      <DashboardSidebar></DashboardSidebar>
      <div v-for="name in user" :key="name.id" class="flex-grow-1">
        Hello, {{ name.name }}!
      </div>
    </div>
  </DashboardLayout>
</template>

<script>
import { Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../Layouts/DashboardLayout.vue";
import DashboardSidebar from "../Components/Layout/DashboardSidebar.vue";

export default {
  components: {
    Head,
    DashboardLayout,
    DashboardSidebar,
  },

  props: {
    user: {
      type: Array,
      default: () => [
        {
          id: 0,
          name: "Admin User",
        },
      ],
    },
  },
};
</script>
