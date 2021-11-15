<template>
  <Layout>
    <!-- Candidate Backgorund Type
    1: Education
    2: Political
    3: Professional
    -->
    <pre>{{ candidate }}</pre>
    <div class="container mx-auto" style="margin-top: 10%">
      <div class="row">
        <Breadcrumb :crumbs="crumbs" @selected="selected" />
      </div>
      <div class="row">
        <div class="col">
          <CandidateHeader :candidate="candidate"></CandidateHeader>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col">
          <EducBackground :candidate="candidate"></EducBackground>
        </div>
        <div class="col">
          <ProfBackground :candidate="candidate"></ProfBackground>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <PolBackground :candidate="candidate"></PolBackground>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <Stances :candidate="candidate"></Stances>
        </div>
      </div>
      <div class="row" style="position: relative">
        <div class="row mb-2 row-cols-1 row-cols-md-2">
          <div class="col">
            <NewsArticles class="w-100 h-100" ></NewsArticles>
          </div>
          <div class="col">
            <Twitter class="w-100" :candidate="candidate"></Twitter>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import Breadcrumb from "../../Components/CandidateProfile/Breadcrumb.vue";
import CandidateHeader from "../../Components/CandidateProfile/CandidateHeader.vue";
import EducBackground from "../../Components/CandidateProfile/BackgroundCard.vue";
import ProfBackground from "../../Components/CandidateProfile/ProfBackgroundCard.vue";
import PolBackground from "../../Components/CandidateProfile/LongBackground.vue";
import Stances from "../../Components/CandidateProfile/LongStanceCard.vue";
import Layout from "../../Layouts/CandidateProfileLayout.vue";
import NewsArticles from "../../Components/CandidateProfile/NewsArticles.vue";
import Twitter from "../../Components/CandidateProfile/TwitterFeed.vue";

export default defineComponent({
  components: {
    Breadcrumb,
    CandidateHeader,
    EducBackground,
    ProfBackground,
    PolBackground,
    Stances,
    Layout,
    NewsArticles,
    Twitter,
  },
  props: {
    candidate: Object,
  },
  data() {
    return {
      // crumbs: ['Davao City', 'District 2', 'Sara Duterte']
    };
  },
  methods: {
    selected(crumb) {
      console.log(crumb);
    },
  },
});
</script>

<style scoped></style>
