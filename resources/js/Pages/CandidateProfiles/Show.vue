<template>
<ArisenHeader></ArisenHeader>
  <div class="container mx-auto">
    <!-- <div class="row">

      <div class="col-12 col-md-4 p-4 bg-primary text-white">
        {{ candidate.image }}
      </div>

      <div class="d-flex col col-12 col-md-8 p-4 bg-secondary">
        {{ candidate.position }}
        {{ candidate.partylist }}
      </div>

      <div class="col-12 col-md-6 p-4 bg-primary text-white">
        education ni pacqiao
      </div>
      <div class="col-12 col-md-6 p-4 bg-secondary">profession ni pacqiao</div>
      <div class="col-12 col-md-12 p-4 bg-primary text-white">
        politiko ni pacq
      </div>
      <div class="col-12 col-md-12 p-4 bg-secondary">issues and stance</div>
      <div class="col-12 col-md-8 p-4 bg-primary text-white">news articles</div>
      <div class="col-12 col-md-4 p-4 bg-secondary">tweets</div>
    </div>
  </div> -->
    <div class="row">
      <CandidateHeader></CandidateHeader>
      <!-- <div class="row justify-content-end">
        <EducBackground></EducBackground>
        <ProfBackground></ProfBackground>
      </div> -->
    </div>
    <div class="row justify-content-evenly">
      <div class="col-6">
        <EducBackground></EducBackground>
      </div>
      <div class="col-6">
        <ProfBackground></ProfBackground>
      </div>
    </div>
    <div class="col">
      <PolBackground></PolBackground>
      <Stance></Stance>
    </div>
    

  </div>
<ArisenFooter></ArisenFooter>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import CandidateHeader from "../../Components/CandidateProfile/CandidateHeader.vue"
import EducBackground from "../../Components/CandidateProfile/BackgroundCard.vue"
import ProfBackground from "../../Components/CandidateProfile/BackgroundCard.vue"
import PolBackground from "../../Components/CandidateProfile/LongBackground.vue"
import Stance from "../../Components/CandidateProfile/LongStanceCard.vue"
import ArisenHeader from "../../Layouts/Partials/Header.vue";
import ArisenFooter from "../../Components/Layout/ARISEnFooter.vue";
export default defineComponent({
  components: {
    CandidateHeader,
    EducBackground,
    ProfBackground,
    PolBackground,
    Stance,
    ArisenFooter,
    ArisenHeader,

  },

});

</script>

<style>


</style>
