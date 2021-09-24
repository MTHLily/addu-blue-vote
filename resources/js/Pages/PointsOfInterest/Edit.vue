<template>
  <DashboardLayout>
    <h1>Update {{ poi.name }}</h1>
    <form @submit.prevent="handleSubmit">
      <PoIForm
        :districts="districts"
        :poi_types="poi_types"
        v-model:poi="poiForm"
        @update:image="handleImage"
      ></PoIForm>

      <div class="btn-group mx-auto w-100" role="group">
        <button class="btn btn-primary">Save</button>
        <Link :href="route('poi.index')" class="btn btn-danger">Cancel</Link>
      </div>
    </form>
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
    districts: {
      type: Array,
      default: [],
    },
    poi_types: {
      type: Array,
      default: [],
    },
    poi: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    poiForm: useForm({
      name: null,
      description: null,
      longitude: null,
      latitude: null,
      district_id: null,
      point_of_interest_type_id: null,
      image: null,
    }),
  }),
  created() {
    this.poiForm = useForm({
      name: this.poi.name,
      description: this.poi.description,
      longitude: this.poi.longitude,
      latitude: this.poi.latitude,
      district_id: this.poi.district_id,
      point_of_interest_type_id: this.poi.point_of_interest_type_id,
      image: null,
    });
  },
  methods: {
    handleImage(event) {
      this.poiForm.image = event;
    },
    handleSubmit() {
      console.log(this.poiForm);
      this.poiForm
        .transform((data) => ({
          ...data,
          _method: "put", // PUT/PATCH can't have files, so first post then convert to PUT
        }))
        .post(route("poi.update", this.poi.id));
    },
  },
};
</script>

<style></style>
