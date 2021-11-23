<template>
  <Layout>
    <div class="row">
      <h2>Regions</h2>
      <ul>
        <template v-for="region in locations" :key="region.id">
          <li>
            <Link :href="route('locations.region.show', region.id)">{{
              region.name
            }}</Link>
          </li>
        </template>
      </ul>
      <!-- <div class="col">
        LOCATIONS
        <pre>{{ locations }}</pre>
      </div>
      <div class="col">
        NATIONAL POSITIONS
        <pre>{{ nationalPositions[0] }} </pre>
      </div> -->
    </div>
    <div class="container bod" style="margin-top: 10%">
      <div class="border-bottom border-primary">
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
      <div class="container d-flex">
        <n-tree-select
          class="my-4"
          style="max-width: 300px"
          placeholder="Filter Locations..."
          multiple
          cascade
          checkable
          :options="locationOptions"
        ></n-tree-select>
      </div>
      <CandidateCollapse :locations="locations"></CandidateCollapse>
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
body {
  background-image: url("../../Components/assets/candidate-backgrounds.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom;
}
</style>
