// TODO: Fix background,twitter widget, news articles widget
<template>
<ArisenHeader></ArisenHeader>
  <div class="container mx-auto" style="margin-top: 10%;">
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
    </div>
    <div class="row cols-2 row-cols-1 row-cols-md-8">
        <EducBackground></EducBackground>
        <ProfBackground></ProfBackground>
    </div>
    <div class="col">
      <PolBackground></PolBackground>
      <Stance></Stance>
    </div>
      <!-- <NewsArticles></NewsArticles>  -->
  </div>
<Bground></Bground>
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

import Bground from "../../Components/CandidateProfile/KnowMoreBg.vue";
// import NewsArticles from "../../Components/CandidateProfile/NewsArticles.vue"

export default defineComponent({
  components: {
    CandidateHeader,
    EducBackground,
    ProfBackground,
    PolBackground,
    Stance,
    ArisenFooter,
    ArisenHeader,
    Bground,
    // NewsArticles,


  },

});

</script>

<style>


</style>
