<template>
  <DashboardLayout>
    <div class="container">
      <h1>Create Point of Interest</h1>
      <form @submit.prevent="poi.post(route('poi.store'))">
        <PoIForm
          :locations="locations"
          :poi_types="poi_types"
          v-model:poi="poi"
          @update:image="poi.image = $event"
        ></PoIForm>
        <div class="btn-group mx-auto w-100" role="group">
          <button class="btn btn-primary">Save</button>
          <Link :href="route('poi.index')" class="btn btn-danger">Cancel</Link>
        </div>
      </form>
    </div>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import PoIForm from "../../Components/PointsOfInterest/PoIForm.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { Link } from "@inertiajs/inertia-vue3";

export default {
  components: {
    DashboardLayout,
    PoIForm,
    Link,
  },
  props: {
    locations: {
      type: Array,
      default: [],
    },
    poi_types: {
      type: Array,
      default: [],
    },
  },
  data: () => ({
    poi: useForm({
      name: null,
      description: null,
      longitude: null,
      latitude: null,
      location_id: null,
      point_of_interest_type_id: null,
      image: null,
    }),
  }),
};
</script>

<style></style>
