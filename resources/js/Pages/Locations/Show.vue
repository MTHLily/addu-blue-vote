<template>
  <Head title="Edit District"></Head>
  <DashboardLayout>
    <div class="rounded" style="background-color: #fbd2b5">
      <div class="d-flex flex-column">
        <form
          @submit.prevent="
            districtForm.put(route('districts.update', district.id))
          "
        >
          <h1 class="p-3">District Details</h1>
          <div class="p-3">
            <DistrictForm v-model:district="districtForm"></DistrictForm>
          </div>
          <div class="btn-group" role="group">
            <div class="p-3">
              <Link
                :href="route('districts.edit', district.id)"
                class="btn btn-success"
                >Edit</Link
              >
            </div>
            <div class="p-3">
              <Link :href="route('districts.index')" class="btn btn-danger"
                >Back</Link
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </DashboardLayout>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import DistrictForm from "../../Components/Districts/DistrictForm.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import AdminLayout from "../../Layouts/admin";

export default {
  components: { Link, Head, DashboardLayout, DistrictForm, AdminLayout },
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
