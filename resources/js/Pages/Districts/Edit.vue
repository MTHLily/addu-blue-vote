<template>
  <Head title="Edit District"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column">
      <form
        @submit.prevent="
          districtForm.put(route('districts.update', district.id))
        "
      >
        <h1>Create District</h1>
        <DistrictForm v-model:district="districtForm"></DistrictForm>
        <div class="btn-group mx-auto w-100" role="group">
          <button class="btn btn-primary">Save</button>
          <Link :href="route('districts.index')" class="btn btn-danger"
            >Cancel</Link
          >
        </div>
      </form>
      <pre>{{ districtForm }}</pre>
    </div>
  </DashboardLayout>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import DistrictForm from "../../Components/Districts/DistrictForm.vue";
import { useForm } from "@inertiajs/inertia-vue3";

export default {
  components: { Link, Head, DashboardLayout, DistrictForm },
  props: {
    district: {
      type: Object,
      default: () => ({}),
    },
  },

  created() {
    this.districtForm = useForm({
      name: this.district.name,
      description: this.district.description,
      color: this.district.color,
    });
  },

  data: () => ({
    districtForm: null,
  }),
};
</script>

<style></style>
