<template>
  <Layout>
    <div class="row">
      <div class="col">
        LOCATIONS
        <pre>{{ locations }}</pre>
      </div>
      <div class="col">
        NATIONAL POSITIONS
        <pre>{{ nationalPositions }} </pre>
      </div>
    </div>
    <div class="container bod" style="margin-top: 10%">
      <div class="border-bottom border-primary">
        <h2 class="text-primary fw-bold">PRESIDENTIAL CANDIDATES</h2>
        <PresCarousel></PresCarousel>
        <h2 class="text-danger fw-bold">VICE PRESIDENTIAL CANDIDATES</h2>
        <ViceCarousel></ViceCarousel>
        <h2 class="text-warning fw-bold">SENATORIAL CANDIDATES</h2>
        <SenCarousel></SenCarousel>
      </div>
      <div class="container d-flex">
        <n-tree-select
              class="my-4"
              style="max-width: 300px"
              placeholder="Filter Locations..."
              multiple
              cascade
              checkable
              :options="filterOptions"
              v-model:value="filteredLocationIds"
            ></n-tree-select>
      </div>
      <h2 class="text-primary fw-bold">MAYORAL CANDIDATES</h2>
      <MayorCarousel></MayorCarousel>
      <h2 class="text-danger fw-bold">COUNCILOR CANDIDATES</h2>
      <CouncilorCarousel></CouncilorCarousel>
    </div>
  </Layout>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import PresCarousel from "../../Components/CandidateProfile/CandidateCarousel.vue";
import ViceCarousel from "../../Components/CandidateProfile/CandidateCarousel.vue";
import SenCarousel from "../../Components/CandidateProfile/CandidateCarousel.vue";
import MayorCarousel from "../../Components/CandidateProfile/CandidateCarousel.vue";
import CouncilorCarousel from "../../Components/CandidateProfile/CandidateCarousel.vue";
import Layout from "../../Layouts/CandidateProfileLayout.vue";
import { NTreeSelect } from "naive-ui";

export default {
  props: {
    locations: Array,
    nationalPositions: Array,
    locationTree: Array,
  },
  components: {
    //   Link,
    PresCarousel,
    ViceCarousel,
    SenCarousel,
    MayorCarousel,
    CouncilorCarousel,
    Layout,
    NTreeSelect,
  },
  // computed: {
  //   filterOptions() {
  //     return this.locationTree.map((region) => ({
  //       key: region.id,
  //       label: region.name,
  //       children: region.children.map((province) => ({
  //         key: province.id,
  //         label: province.name,
  //       })),
  //     }));
  //   },
  // },
};
</script>

<style scoped>
body {
  background-image: url("../../Components/assets/candidate-backgrounds.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom;
}
</style>
