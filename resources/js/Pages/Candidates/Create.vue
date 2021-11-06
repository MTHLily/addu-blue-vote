<template>
  <Head title="Create District"></Head>

  <DashboardLayout>
    <div class="rounded" style="background-color: #ccdfff">
      <div class="d-flex flex-column">
        <form @submit.prevent="form.post(route('candidates.store'))">
          <h1 class="p-3">Create Candidate</h1>
          <div class="p-3">
            <CandidateForm
              v-model:form="form"
              :location-types="location_types"
              :locations="locations"
              :positions="positions"
            ></CandidateForm>
          </div>
          {{ form }}
          <div class="btn-group mx-auto w-100" role="group">
            <div class="p-3">
              <button class="btn btn-primary">Save</button>
            </div>
            <div class="p-3">
              <Link href="/dashboard/faqs" class="btn btn-danger">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
    <pre>{{ locations }}</pre>
    <pre>{{ positions }}</pre>
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
    location_types: Array,
    locations: Object,
    positions: Object,
  },
  data: () => ({
    form: useForm({
      name: null,
      profile_photo: null,
      political_party_id: null,
      running_position_id: null,
      candidateable_id: null,
      candidateable_type: null,
    }),
  }),
});
</script>

<style></style>
