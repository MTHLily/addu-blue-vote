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
          :options="locationOptions"
        ></n-tree-select>
      </div>
      <n-collapse>
        <n-collapse-item title="Region XI - Davao Region" name="1">
          <n-collapse>
            <n-collapse-item title="Davao de Oro" name="1">
              <div>
                <h2 class="text-primary fw-bold">GOVERNOR CANDIDATES</h2>
                <CandidateCarousel :candidates="nationalPositions[3]?.candidates"></CandidateCarousel>
                <h2 class="text-danger fw-bold">VICE-GOVERNOR CANDIDATES</h2>
                <CandidateCarousel :candidates="nationalPositions[4]?.candidates"></CandidateCarousel>
                <h2 class="text-warning fw-bold">BOARD MEMBERS CANDIDATES</h2>
                <CandidateCarousel :candidates="nationalPositions[5]?.candidates"></CandidateCarousel>
              </div>
              <n-collapse>
                <n-collapse-item title="District 1" name="1">
                  <div>
                    <h2 class="text-primary fw-bold">CONGRESSMAN CANDIDATES</h2>
                    <CandidateCarousel :candidates="nationalPositions[6]?.candidates"></CandidateCarousel>
                  </div>
                  <n-collapse>
                    <n-collapse-item title="Davao City" name="1">
                      <div>
                        <h2 class="text-primary fw-bold">GOVERNOR CANDIDATES</h2>
                        <CandidateCarousel :candidates="nationalPositions[3]?.candidates"></CandidateCarousel>
                        <h2 class="text-danger fw-bold">VICE-GOVERNOR CANDIDATES</h2>
                        <CandidateCarousel :candidates="nationalPositions[4]?.candidates"></CandidateCarousel>
                        <h2 class="text-warning fw-bold">BOARD MEMBERS CANDIDATES</h2>
                        <CandidateCarousel :candidates="nationalPositions[5]?.candidates"></CandidateCarousel>
                      </div>
                    </n-collapse-item>
                  </n-collapse>
                </n-collapse-item>  
              </n-collapse>
            </n-collapse-item>
            <n-collapse-item title="Davao Oriental" name="2">
              <div>XXXX</div>
            </n-collapse-item>
          </n-collapse>
        </n-collapse-item>
      </n-collapse>
    </div>
  </Layout>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import CandidateCarousel from "../../Components/CandidateProfile/CandidateCarousel.vue";
import Layout from "../../Layouts/CandidateProfileLayout.vue";
import { NTreeSelect, NCollapse, NCollapseItem } from "naive-ui";
import { ref } from "vue";

export default defineComponent({
  setup (props) {
    const locationToOption = ( location ) => ({
      key: location.id,
      label: location.name,
      children: location.children?.map(locationToOption)
    })
    const locationOptions = ref(props.locations.map( locationToOption ))
  
  return {
    locationOptions
  }
  },
  props: {
    locations: Array,
    nationalPositions: Array,
  },
  components: {
    //   Link,
    CandidateCarousel,
    Layout,
    NTreeSelect,
    NCollapse,
    NCollapseItem,
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
