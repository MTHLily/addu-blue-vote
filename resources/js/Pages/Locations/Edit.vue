<template>
  <Head title="Create Location"></Head>

  <DashboardLayout>
    <div class="rounded" style="background-color: #ccdfff">
      <div class="d-flex flex-column">
        <form
          @submit.prevent="
            locationForm.post(route('locations.update', location.id))
          "
        >
          <h1 class="p-3">Create Location</h1>

          <div class="p-3">
            <LocationForm
              v-model:location="locationForm"
              :locations="locations"
              :types="types"
            ></LocationForm>
          </div>
          <pre>{{ locationForm }}</pre>
          <div class="btn-group mx-auto w-100" role="group">
            <div class="p-3">
              <button class="btn btn-primary">Save</button>
            </div>
            <div class="p-3">
              <Link :href="route('locations.index')" class="btn btn-danger"
                >Cancel</Link
              >
            </div>
          </div>
        </form>
        <pre>{{ locations }}</pre>
      </div>
    </div>
  </DashboardLayout>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import LocationForm from "../../Components/Locations/LocationForm.vue";
import { useForm } from "@inertiajs/inertia-vue3";

export default {
  props: {
    location: Object,
    locations: Object,
    types: Array,
  },
  components: { Link, Head, DashboardLayout, LocationForm },
  data: () => ({
    locationForm: useForm({
      _method: "PUT",
      name: "",
      description: "",
      color: "#ffffff",
      longitude: null,
      latitude: null,
      location_type_id: null,
      parent_location_id: null,
      media: null,
    }),
  }),
  created() {
    let mediaVal = null;
    if (this.location.media.length > 0)
      mediaVal = this.location.media.map((media) => ({
        id: media.id,
        status: "finished",
        url: media.original_url,
      }))[0];

    this.locationForm = useForm({
      _method: "PUT",
      name: this.location.name,
      description: this.location.description,
      color: this.location.color,
      longitude: parseFloat(this.location.longitude),
      latitude: parseFloat(this.location.latitude),
      location_type_id: this.location.location_type_id,
      parent_location_id: this.location.parent_location_id,
      media: mediaVal,
    });
  },
};
</script>

<style></style>
