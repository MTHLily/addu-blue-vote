<template>
  <ArisenHeader></ArisenHeader>
  <div class="container" style="margin-top: 10%;" >
    <h1 class="text-primary">PRESIDENTIAL CANDIDATES</h1>
    <PresCarousel></PresCarousel>
    <h1 class="text-primary">VICE PRESIDENTIAL CANDIDATES</h1>
    <ViceCarousel></ViceCarousel>
    <h1 class="text-primary">SENATORIAL CANDIDATES</h1>
    <SenCarousel></SenCarousel>
  </div>


  <ArisenFooter></ArisenFooter>

</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import ArisenFooter from "../../Components/Layout/ARISEnFooter.vue";
import ArisenHeader from "../../Layouts/Partials/Header.vue";
import PresCarousel from "../../Components/CandidateProfile/CandidateCarousel.vue"
import ViceCarousel from "../../Components/CandidateProfile/CandidateCarousel.vue"
import SenCarousel from "../../Components/CandidateProfile/CandidateCarousel.vue"

export default {
  components: {
  //   Link,
    ArisenFooter,
    ArisenHeader,
    PresCarousel,
    ViceCarousel,
    SenCarousel,
  },
};
</script>

<style>
</style>
