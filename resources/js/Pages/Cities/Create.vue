<template>
  <Head title="Create City"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column">
      <form @submit.prevent="city.post(route('cities.store'))">
        <h1>Create City</h1>
        <CityForm v-model:city="city"></CityForm>
        <div class="btn-group mx-auto w-100" role="group">
          <button class="btn btn-primary">Save</button>
          <Link href="/dashboard/cities" class="btn btn-danger">Cancel</Link>
        </div>
      </form>
    </div>
  </DashboardLayout>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import CityForm from "../../Components/Cities/CityForm.vue";
import { useForm } from "@inertiajs/inertia-vue3";

export default {
  components: { Link, Head, DashboardLayout, CityForm },
  data: () => ({
    city: useForm({
      name: "",
    }),
  }),
};
</script>

<style></style>
