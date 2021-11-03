<template>
  <Layout>
    <div class="container mx-auto" style="margin-top: 10%">
      <div class="row">
        <CandidateHeader></CandidateHeader>
      </div>
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col">
          <EducBackground></EducBackground>
        </div>
        <div class="col">
          <ProfBackground></ProfBackground>
        </div>
      </div>
      <div class="row">
        <PolBackground></PolBackground>
      </div>

      <div class="row">
        <Stances></Stances>
      </div>

      <div class="row" style="position: relative">
        <div class="row mb-2 row-cols-1 row-cols-md-2">
          <div class="col">
            <NewsArticles class="w-100 h-100"></NewsArticles>
          </div>
          <div class="col">
            <Twitter class="w-100"></Twitter>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import CandidateHeader from "../../Components/CandidateProfile/CandidateHeader.vue";
import EducBackground from "../../Components/CandidateProfile/BackgroundCard.vue";
import ProfBackground from "../../Components/CandidateProfile/BackgroundCard.vue";
import PolBackground from "../../Components/CandidateProfile/LongBackground.vue";
import Stances from "../../Components/CandidateProfile/LongStanceCard.vue";

import Layout from "../../Layouts/CandidateProfileLayout.vue";
import NewsArticles from "../../Components/CandidateProfile/NewsArticles.vue";
import Twitter from "../../Components/CandidateProfile/Twitter.vue";

export default defineComponent({
  components: {
    CandidateHeader,
    EducBackground,
    ProfBackground,
    PolBackground,
    Stances,
    Layout,
    NewsArticles,
    Twitter,
  },
});
</script>

<style>
body {
  background: url("../../Components/assets/candidate-profile-show-background.svg")
    no-repeat;
  background-size: auto;
  background-attachment: fixed;
}
</style>
