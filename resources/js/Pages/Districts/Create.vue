<template>
  <Head title="Create District"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column">
      <form @submit.prevent="district.post(route('districts.store'))">
        <h1>Create District</h1>
        <DistrictForm v-model:district="district"></DistrictForm>
        <div class="btn-group mx-auto w-100" role="group">
          <button class="btn btn-primary">Save</button>
          <Link href="/dashboard/faqs" class="btn btn-danger">Cancel</Link>
        </div>
      </form>
      <pre>{{ district }}</pre>
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
    }),
  }),
};
</script>

<style></style>
