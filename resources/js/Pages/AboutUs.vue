<template>
  <Head title="About Us"></Head>
  <GuestLayout>
    <div class="container-md" style="margin-top: 5%">
      <div class="row g-0 mb-3">
        <div class="col-12 col-md-5 order-2 order-sm-1">
          <h1 class="text-primary fw-bold">What is Blue Vote?</h1>
          <MarkdownViewer :content="bluevote_info.description" size="sm" />
        </div>
        <div class="col-12 col-md-7 order-1 order-sm-2">
          <img src="images/blue vote logo.png" />
        </div>
      </div>

      <div class="row g-0 mb-3">
        <h2 class="text-primary fw-bold">Previous Projects</h2>
      </div>
      <PreviousProjectList :projects="previous_projects" />
      <div class="row g-0 mt-3 mb-3">
        <h2 class="text-primary fw-bold mb-4">People Behind Blue Vote</h2>
        <PeopleList :people="bluevote_people" />
        <h3 class="text-danger fw-bold mb-4">Volunteers</h3>
        <PeopleList :people="volunteers" />
        <h3 class="text-warning fw-bold mb-4">Partner Offices</h3>
        <PeopleList :people="partner_offices" />
      </div>
      <div class="row g-0 mt-3 mb-3">
        <h2 class="text-primary fw-bold">How to Volunteer</h2>
        <div class="d-flex flex-column gap-4 mt-4">
          <template v-for="step in volunteer_steps" :key="step.id">
            <StepCard :processStep="step"></StepCard>
          </template>
        </div>
      </div>
    </div>
  </GuestLayout>
</template>
<script>
import { Head, Link } from "@inertiajs/inertia-vue3";
import GuestLayout from "../Layouts/Guest.vue";
import StepCard from "@/Components/AboutUs/VolunteerProcessCard.vue";
import PeopleCard from "@/Components/AboutUs/PeopleBehindCard.vue";
import { defineComponent } from "vue";
import MarkdownViewer from "@/Components/MarkdownViewer.vue";
import PreviousProjectList from "@/Components/AboutUs/PreviousProjects/PreviousProjectList.vue";
import PeopleList from "@/Components/AboutUs/BlueVotePeople/PeopleList.vue";

export default defineComponent({
  components: {
    Head,
    Link,
    GuestLayout,
    StepCard,
    PeopleCard,
    MarkdownViewer,
    PreviousProjectList,
    PeopleList,
  },
  props: {
    bluevote_info: {
      type: Object,
      required: true,
    },
    previous_projects: {
      type: Array,
      required: true,
    },
    bluevote_people: {
      type: Array,
      required: true,
    },
    volunteers: {
      type: Array,
      required: true,
    },
    partner_offices: {
      type: Array,
      required: true,
    },
    volunteer_steps: {
      type: Array,
      required: true,
    },
  },
});
</script>
