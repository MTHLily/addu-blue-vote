<template>
  <Layout class="candidate-profile-background">
    <div class="container bod" style="margin-top: 5%">
      <span
        class="badge text-wrap text-white fw-bolder p-2 px-4 fs-5 mb-3"
        :style="{
          'background-color': '#CE2029',
          'border-radius': '30px',
        }"
      >
        National
      </span>
      <!-- <h1 class="fw-bolder">National</h1> -->
      <div>
        <h2 class="text-primary fw-bold">PRESIDENTIAL CANDIDATES</h2>
        <CandidateCarousel
          :candidates="nationalPositions[0]?.candidates"
        ></CandidateCarousel>
        <h2 class="text-danger fw-bold">VICE PRESIDENTIAL CANDIDATES</h2>
        <CandidateCarousel
          :candidates="nationalPositions[1]?.candidates"
        ></CandidateCarousel>
        <h2 class="text-warning fw-bold">SENATORIAL CANDIDATES</h2>
        <CandidateCarousel
          :candidates="nationalPositions[2]?.candidates"
        ></CandidateCarousel>
      </div>
      <div class="row">
        <h2 class="fw-bold">Regions</h2>
        <ul>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            <template v-for="region in locations" :key="region.id">
              <div class="col mt-3">
                <Link
                  :href="route('locations.region.show', region.id)"
                  class="btn btn-danger btn-lg p-4 px-5 w-100 h-100"
                  style="padding: 20px; border-radius: 10px"
                >
                  {{ region.name }}
                </Link>
              </div>
            </template>
          </div>
        </ul>
      </div>
      <!-- <CandidateCollapse :locations="locations"></CandidateCollapse> -->
    </div>
  </Layout>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import CandidateCarousel from "../../Components/CandidateProfile/CandidateCarousel.vue";
import CandidateCollapse from "../../Components/CandidateProfile/NCollapse.vue";
import Layout from "../../Layouts/CandidateProfileLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { NTreeSelect } from "naive-ui";
import { ref } from "vue";

export default defineComponent({
  setup(props) {
    const locationToOption = (location) => ({
      key: location.id,
      label: location.name,
      children: location.children?.map(locationToOption),
    });
    const locationOptions = ref(props.locations.map(locationToOption));

    return {
      locationOptions,
    };
  },
  props: {
    locations: Array,
    nationalPositions: Array,
  },
  components: {
    Link,
    CandidateCarousel,
    Layout,
    NTreeSelect,
    CandidateCollapse,
  },
});
</script>

<style scoped>
/* .candidate-profile-background {
  background-image: url("/images/candidate-backgrounds.svg");
  background-size: 100%;
  background-position: bottom;
} */
</style>
