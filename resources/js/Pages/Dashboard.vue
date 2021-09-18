<template>
    <Head title="Dashboard" />
    <DashboardLayout>
        <div v-for="name in user" :key="name.id">Hello, {{ name.name }}!</div>
         </DashboardLayout>
</template>

<script>
import { Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../Layouts/DashboardLayout.vue";
import { Inertia } from "@inertiajs/inertia";


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
