<template>
  <Layout>
    <div class="container bod" style="margin-top: 10%">
      <h1 class="text-primary">PRESIDENTIAL CANDIDATES</h1>
      <PresCarousel></PresCarousel>
      <h1 class="text-primary">VICE PRESIDENTIAL CANDIDATES</h1>
      <ViceCarousel></ViceCarousel>
      <div class="container d-flex">
        <!-- REGION DROPDOWN FILTER --> 
        <div class="dropdown ms-2 mt-2 mb-3">
          <button
            class="btn btn-primary text-white dropdown-toggle"
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
        <div class="dropdown ms-2 mt-2 mb-3">
          <button
            class="btn btn-primary text-white dropdown-toggle"
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
        <SenCarousel></SenCarousel>
      <h1 class="text-primary">SENATORIAL CANDIDATES</h1>
      <SenCarousel></SenCarousel>
    </div>
  </Layout>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import PresCarousel from "../../Components/CandidateProfile/CandidateCarousel.vue";
import ViceCarousel from "../../Components/CandidateProfile/CandidateCarousel.vue";
import SenCarousel from "../../Components/CandidateProfile/CandidateCarousel.vue";
import Layout from "../../Layouts/CandidateProfileLayout.vue";

export default {
  components: {
    //   Link,
    PresCarousel,
    ViceCarousel,
    SenCarousel,
    Layout,
  },
};
</script>

<style>
body {
  background: url("../../Components/assets/candidate-backgrounds.svg") repeat;
}
</style>
