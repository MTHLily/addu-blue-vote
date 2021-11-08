<template>
  <Layout>
    <div class="container bod" style="margin-top: 10%">
      <div class= "border-bottom border-primary">
        <h2 class="text-primary fw-bold">PRESIDENTIAL CANDIDATES</h2>
        <PresCarousel></PresCarousel>
        <h2 class="text-danger fw-bold">VICE PRESIDENTIAL CANDIDATES</h2>
        <ViceCarousel></ViceCarousel>
        <h2 class="text-warning fw-bold">SENATORIAL CANDIDATES</h2>
        <SenCarousel></SenCarousel>
      </div>
      <div class="container d-flex">
        <!-- REGION DROPDOWN FILTER --> 
        <div class="dropdown ms-2 mt-5 mb-4">
          <button
            class="btn btn-danger text-white dropdown-toggle"
            type="button"
            id="RegionDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{
              filteredRegion
                ? filteredRegion.name
                : "Region"
            }}
          </button>
          <ul class="dropdown-menu" aria-labelledby="regionDropdown">
            <li>
              <a
                class="dropdown-item"
                @click="filteredRegion = null"
                >Clear filter</a
              >
            </li>
            <li v-for="region in districts" :key="region.id">
              <a
                class="dropdown-item"
                @click="handleDistrictFilter(region)"
                >{{ region.name }}</a
              >
            </li>
          </ul>
        </div>
        <!-- DISTRICT DROPDOWN FILTER --> 
        <div class="dropdown ms-2 mt-5 mb-4">
          <button
            class="btn btn-warning text-white dropdown-toggle"
            type="button"
            id="districtDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{
              filteredDistrict
                ? filteredDistrict.name
                : "District"
            }}
          </button>
          <ul class="dropdown-menu" aria-labelledby="districtDropdown">
            <li>
              <a
                class="dropdown-item"
                @click="filteredDistrict = null"
                >Clear filter</a
              >
            </li>
            <li v-for="district in districts" :key="district.id">
              <a
                class="dropdown-item"
                @click="handleDistrictFilter(district)"
                >{{ district.name }}</a
              >
            </li>
          </ul>
        </div>
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

export default {
  components: {
    //   Link,
    PresCarousel,
    ViceCarousel,
    SenCarousel,
    MayorCarousel,
    CouncilorCarousel,
    Layout,
  },
};
</script>

<style scoped>
body {
  background-image: url("../../Components/assets/candidate-backgrounds.svg");
  background-repeat:no-repeat;
  background-size: 100%;
  background-position:bottom;
}
</style>
