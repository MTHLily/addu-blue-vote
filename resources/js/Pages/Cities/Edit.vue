<template>
  <Head title="Edit City"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column">
      <form @submit.prevent="cityForm.put(route('cities.update', city.id))">
        <h1>Create City</h1>
        <CityForm v-model:city="cityForm"></CityForm>
        <div class="btn-group mx-auto w-100" role="group">
          <button class="btn btn-primary">Save</button>
          <Link :href="route('cities.index')" class="btn btn-danger"
            >Cancel</Link
          >
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
  props: {
    city: {
      type: Object,
      default: () => ({}),
    },
  },

  created() {
    this.cityForm = useForm({
      name: this.city.name,
    });
  },

  data: () => ({
    cityForm: null,
  }),
};
</script>

<style></style>
