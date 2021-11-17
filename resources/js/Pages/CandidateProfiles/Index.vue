<template>
  <Layout>
    <div class="row">
      <!-- <div class="col">
        LOCATIONS
        <pre>{{ locations }}</pre>
      </div> -->
      <div class="col">
        NATIONAL POSITIONS
        <pre>{{ nationalPositions[0] }} </pre>
      </div>
    </div>
    <div class="container bod" style="margin-top: 10%">
      <div class="border-bottom border-primary">
        <h2 class="text-primary fw-bold">PRESIDENTIAL CANDIDATES</h2>
        <CandidateCarousel :candidates="nationalPositions[0]?.candidates"></CandidateCarousel>
        <h2 class="text-danger fw-bold">VICE PRESIDENTIAL CANDIDATES</h2>
        <CandidateCarousel :candidates="nationalPositions[1]?.candidates"></CandidateCarousel>
        <h2 class="text-warning fw-bold">SENATORIAL CANDIDATES</h2>
        <CandidateCarousel :candidates="nationalPositions[2]?.candidates"></CandidateCarousel>
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
      <h2 class="text-primary fw-bold">PARTYLIST REPRESENTATIVE</h2>
      <CandidateCarousel :candidates="nationalPositions[3]?.candidates"></CandidateCarousel>
      <!-- <h2 class="text-primary fw-bold">MAYORAL CANDIDATES</h2>
      <CandidateCarousel :candidates="nationalPositions[4]?.candidates"></CandidateCarousel> -->
      <!-- <h2 class="text-danger fw-bold">COUNCILOR CANDIDATES</h2>
      <CandidateCarousel :candidates="nationalPositions[5]?.candidates"></CandidateCarousel> -->
    </div>
  </Layout>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import CandidateCarousel from "../../Components/CandidateProfile/CandidateCarousel.vue";
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
    CandidateCarousel,
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
