<template>
  <Head title="Dashboard" />
  <DashboardLayout>
    <div class="d-flex">
      <div v-for="name in user" :key="name.id" class="flex-grow-1">
        Hello, {{ name.name }}!
      </div>
    </div>
  </DashboardLayout>
</template>

<script>
import { Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../Layouts/DashboardLayout.vue";

export default {
  components: {
    Head,
    DashboardLayout,
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
