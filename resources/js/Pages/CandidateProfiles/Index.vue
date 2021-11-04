<template>
  <Layout>
    <div class="container bod" style="margin-top: 10%">
      <h1 class="text-primary">PRESIDENTIAL CANDIDATES</h1>
      <PresCarousel></PresCarousel>
      <h1 class="text-primary">VICE PRESIDENTIAL CANDIDATES</h1>
      <ViceCarousel></ViceCarousel>
      <h1 class="text-primary">SENATORIAL CANDIDATES</h1>
      <div>
        Region:
        <select name="" id=""></select>
      </div>
      <div>
        Districts:
        <select name="" id=""></select>
      </div>
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
