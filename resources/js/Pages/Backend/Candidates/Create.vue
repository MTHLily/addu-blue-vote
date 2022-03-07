<template>
  <Head title="Create Candidate"></Head>

  <DashboardLayout>
    <div class="rounded container" style="background-color: #ccdfff">
      <div class="d-flex flex-column container">
        <form @submit.prevent="form.post(route('candidates.store'))">
          <h1 class="p-3">Create Candidate</h1>
          <div class="p-3">
            <CandidateForm
              v-model:form="form"
              :location-types="location_types"
              :locations="locations"
              :location-tree="location_tree"
              :positions="positions"
              :parties="parties"
              :issues="issues"
              :background-types="background_types"
              :articles="articles"
              :videos="videoOptions"
            ></CandidateForm>
          </div>
          <div class="btn-group mx-auto w-100" role="group">
            <div class="p-3">
              <button class="btn btn-primary">Save</button>
            </div>
            <div class="p-3">
              <Link :href="route('candidates.index')" class="btn btn-danger"
                >Cancel</Link
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </DashboardLayout>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { defineComponent } from "@vue/runtime-core";
import CandidateForm from "@/Components/Candidates/CandidateForm.vue";

export default defineComponent({
  components: { Link, Head, DashboardLayout, CandidateForm },
  props: {
    location_types: Array,
    locations: Object,
    location_tree: Array,
    positions: Object,
    parties: Array,
    issues: Array,
    background_types: Array,
    articles: Array,
    videos: Array,
  },
  data: () => ({
    articleOptions: [],
    videoOptions: [],
    form: useForm({
      name: null,
      slug: null,
      location_type_id: null,
      political_party_id: null,
      running_position_id: null,
      location_id: null,
      twitter_timeline_feed_url: null,
      stances: [],
      background: [],
      platforms: [],
      media: null,
      keywords: null,
      related_articles: [],
    }),
  }),

  created() {
    this.videoOptions = this.videos.map((video) => ({
      value: video.id,
      label: video.title,
    }));
  },
});
</script>

<style></style>
