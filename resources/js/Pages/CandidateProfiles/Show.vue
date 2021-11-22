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
        <Breadcrumb
          :crumbs="crumbs"
          :candidate="candidate"
          @selected="selected"
        />
      </div>
      <div class="row">
        <div class="col">
          <CandidateHeader :candidate="candidate"></CandidateHeader>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col">
          <BackgroundCard
            title="Educational Background"
            primary-color="#2365A1"
            secondary-color="#CE2029"
            :background="candidate.educational_background"
          ></BackgroundCard>
        </div>
        <div class="col">
          <BackgroundCard
            title="Professional Background"
            primary-color="#CE2029"
            secondary-color="#FAA728"
            :background="candidate.professional_background"
          ></BackgroundCard>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <BackgroundCard
            horizontal
            title="Political Background"
            primary-color="#FAA728"
            secondary-color="#185EA9"
            :background="candidate.political_background"
          ></BackgroundCard>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <Stances :stances="candidate.stances"></Stances>
        </div>
      </div>
      <div class="row" style="position: relative">
        <div class="row mb-2 row-cols-1 row-cols-md-2">
          <div class="col">
            <NewsArticles class="w-100 h-100"></NewsArticles>
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
import Stances from "../../Components/CandidateProfile/LongStanceCard.vue";
import Layout from "../../Layouts/CandidateProfileLayout.vue";
import NewsArticles from "../../Components/CandidateProfile/NewsArticles.vue";
import Twitter from "../../Components/CandidateProfile/TwitterFeed.vue";
import BackgroundCard from "../../Components/CandidateProfile/Background/BackgroundCard.vue";

export default defineComponent({
  components: {
    Breadcrumb,
    CandidateHeader,
    Stances,
    Layout,
    NewsArticles,
    Twitter,
    BackgroundCard,
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
