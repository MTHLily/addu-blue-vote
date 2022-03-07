<template>
  <Layout class="individual-candidate-profile-background">
    <div class="container mx-auto">
      <div class="row">
        <Breadcrumb :breadcrumbs="candidateBreadcrumbs" />
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
            secondary-color="#2365A1"
            :background="candidate.political_background"
          />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <CandidatePlatforms :platforms="candidate.platforms" />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <Stances :stances="candidate.stances" />
        </div>
      </div>
      <div class="row mb-2 row-cols-1 row-cols-md-2">
        <div class="col">
          <NewsArticles
            class="w-100 h-100 mb-3"
            :articles="relatedArticles"
            :style="{ 'border-radius': '5px' }"
          ></NewsArticles>
        </div>
        <div class="col">
          <Twitter
            class="twitterfeed"
            :candidate="candidate"
            :feed-url="candidate.twitter_timeline_feed_url"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import Breadcrumb from "@/Components/CandidateProfile/CandidateBreadcrumb.vue";
import CandidateHeader from "@/Components/CandidateProfile/CandidateHeader.vue";
import Stances from "@/Components/CandidateProfile/LongStanceCard.vue";
import Layout from "@/Layouts/CandidateProfileLayout.vue";
import NewsArticles from "@/Components/CandidateProfile/NewsArticles.vue";
import Twitter from "@/Components/CandidateProfile/TwitterFeed.vue";
import BackgroundCard from "@/Components/CandidateProfile/Background/BackgroundCard.vue";
import CandidatePlatforms from "@/Components/CandidateProfile/CandidatePlatforms.vue";

export default defineComponent({
  components: {
    Breadcrumb,
    CandidateHeader,
    Stances,
    Layout,
    NewsArticles,
    Twitter,
    BackgroundCard,
    CandidatePlatforms,
  },
  props: {
    candidate: Object,
    relatedArticles: Object,
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
  computed: {
    candidateBreadcrumbs() {
      const locations = [];
      if (this.candidate.location) {
        locations.push({
          label: "Home",
          route: route("candidate-profiles.index"),
        });

        locations.push(
          ...this.candidate.location.ancestors_and_self
            .reverse()
            .map((loc) => ({
              route: route("locations.redirect", loc.slug),
              label: loc.name,
            }))
        );
      } else {
        locations.push({
          label: "National",
          route: route("candidate-profiles.index"),
        });
      }

      const candidate = {
        label: this.candidate.name,
      };

      return [...locations, candidate];
    },
  },
});
</script>
