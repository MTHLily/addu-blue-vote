<template>
  <Head title="Edit Candidate"></Head>

  <DashboardLayout>
    <div class="rounded container" style="background-color: #ccdfff">
      <div class="d-flex flex-column container">
        <form
          @submit.prevent="form.post(route('candidates.update', candidate.id))"
        >
          <h1 class="p-3">Edit Candidate</h1>
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
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { defineComponent } from "@vue/runtime-core";
import CandidateForm from "@/Components/Candidates/CandidateForm.vue";

export default defineComponent({
  components: { Link, Head, DashboardLayout, CandidateForm },
  props: {
    candidate: Object,
    location_types: Array,
    locations: Array,
    location_tree: Array,
    positions: Object,
    parties: Array,
    issues: Array,
    background_types: Array,
  },
  data: () => ({
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
      media: null,
    }),
  }),
  created() {
    this.form = useForm({
      _method: "PUT",
      name: this.candidate?.name,
      slug: this.candidate?.slug,
      location_type_id: this.candidate?.running_position?.location_type_id,
      political_party_id: this.candidate?.political_party_id,
      running_position_id: this.candidate?.running_position_id,
      location_id: this.candidate?.location_id,
      twitter_timeline_feed_url: this.candidate?.twitter_timeline_feed_url,
      stances: this.candidate?.stances.map((stance) => ({
        issue_id: stance.id,
        positive: Boolean(stance.pivot.positive),
      })),
      platforms: this.candidate?.platforms || [],
      background: this.candidate?.background,
      media: this.candidate.media
        ? this.candidate.mediaUrls?.map((img) => ({
            id: img.id,
            url: img.url,
            "preview-src": img.thumbnailUrl,
            status: "finished",
          }))[0]
        : null,
      keywords: this.candidate.keywords,
    });
  },
});
</script>

<style></style>
