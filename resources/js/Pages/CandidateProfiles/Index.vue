// TODO: Fix background 
<template>
<Bg>
  <ArisenHeader></ArisenHeader>
  <div class="container bod" style="margin-top: 10%;" >
    <h1 class="text-primary">PRESIDENTIAL CANDIDATES</h1>
    <PresCarousel></PresCarousel>
    <h1 class="text-primary">VICE PRESIDENTIAL CANDIDATES</h1>
    <ViceCarousel></ViceCarousel>
    <h1 class="text-primary">SENATORIAL CANDIDATES</h1>
    <SenCarousel></SenCarousel>
  </div>
  <ArisenFooter></ArisenFooter>
</Bg>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import ArisenFooter from "../../Components/Layout/ARISEnFooter.vue";
import ArisenHeader from "../../Layouts/Partials/Header.vue";
import PresCarousel from "../../Components/CandidateProfile/CandidateCarousel.vue"
import ViceCarousel from "../../Components/CandidateProfile/CandidateCarousel.vue"
import SenCarousel from "../../Components/CandidateProfile/CandidateCarousel.vue"
import Bg from "../../Components/CandidateProfile/CandidateProfile.vue"

export default {
  components: {
  //   Link,
    ArisenFooter,
    ArisenHeader,
    PresCarousel,
    ViceCarousel,
    SenCarousel,
    Bg,

  },
};
</script>

<style>
/* html{
  background-image: url("../../Components/assets/Picture1.png");
  background-repeat: repeat;
  background-size: cover;
} */

</style>
