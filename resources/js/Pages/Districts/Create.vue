<template>
  <Head title="Create District"></Head>

  <DashboardLayout>
    <div class="rounded" style="background-color: #ccdfff">
      <div class="d-flex flex-column">
        <form @submit.prevent="district.post(route('districts.store'))">
          <h1 class="p-3">Create District</h1>
          <div class="p-3">
            <DistrictForm v-model:district="district"></DistrictForm>
          </div>
          <div class="btn-group mx-auto w-100" role="group">
            <div class="p-3">
              <button class="btn btn-primary">Save</button>
            </div>
            <div class="p-3">
              <Link href="/dashboard/faqs" class="btn btn-danger">Cancel</Link>
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

export default {
  components: { Link, Head, DashboardLayout, DistrictForm },
  data: () => ({
    district: useForm({
      name: "",
      description: "",
      color: "#ffffff",
      longitude: null,
      latitude: null,
    }),
  }),
};
</script>

<style></style>
