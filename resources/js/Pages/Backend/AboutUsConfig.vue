<template>
  <Head title="Edit About Us"></Head>

  <DashboardLayout>
    <div class="container d-flex flex-column gap-4">
      <div class="d-flex flex-column gap-2">
        <label for="description" class="form-label">
          <h1 class="text-primary">What is Blue Vote?</h1>
        </label>
        <MarkdownEditor
          v-model:value="form.description"
          ref="mdEditor"
          id="description"
          :class="{ 'is-invalid': form.errors.description }"
        />
        <div class="invalid-feedback">{{ form.errors.description }}</div>
        <div class="btn-group">
          <button
            class="btn btn-success"
            @click="form.patch(route('about-us.update'))"
          >
            Save
          </button>
          <button class="btn btn-danger" @click="resetForm">Reset</button>
        </div>
      </div>
      <div>
        <label for="Previous Projects" class="form-label">
          <h1 class="text-primary">Previous Projects</h1>
        </label>
        <PreviousProjectInput :projects="previous_projects" />
      </div>
      <div>
        <label for="Blue Vote People" class="form-label">
          <h1 class="text-primary">People Behind Blue Vote</h1>
        </label>
        <BlueVotePeopleInput :people="bluevote_people" />
      </div>
      <div>
        <label for="Blue Vote People" class="form-label">
          <h1 class="text-primary">Blue Vote Volunteers</h1>
        </label>
        <BlueVotePeopleInput volunteer :people="volunteers" />
      </div>
      <div>
        <label for="partner-offices-input" class="form-label">
          <h1 class="text-warning">Partner Offices</h1>
        </label>
        <PartnerOfficeInput
          id="partner-offices-input"
          :offices="partner_offices"
        />
      </div>
      <div>
        <label for="volunteer-steps-input" class="form-label">
          <h1 class="text-warning">Volunteer Process</h1>
        </label>
        <VolunteerStepsInput
          id="volunteer-steps-input"
          :steps="volunteer_steps"
        />
      </div>
    </div>
  </DashboardLayout>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import IssueForm from "@/Components/Issues/IssueForm.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import MarkdownEditor from "@/Components/MarkdownEditor.vue";
import PreviousProjectInput from "@/Components/AboutUs/PreviousProjects/PreviousProjectInput.vue";
import BlueVotePeopleInput from "@/Components/AboutUs/BlueVotePeople/BlueVotePeopleInput.vue";
import PartnerOfficeInput from "@/Components/AboutUs/PartnerOffices/PartnerOfficeInput.vue";
import VolunteerStepsInput from "@/Components/AboutUs/VolunteerSteps/VolunteerStepsInput.vue";
import { ref } from "vue";

export default {
  components: {
    Link,
    Head,
    DashboardLayout,
    IssueForm,
    MarkdownEditor,
    PreviousProjectInput,
    BlueVotePeopleInput,
    PartnerOfficeInput,
    VolunteerStepsInput,
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
  setup(props) {
    const form = useForm({
      description: props.bluevote_info.description,
    });
    const mdEditor = ref();

    const resetForm = () => {
      form.reset();
      mdEditor.value.setValue(form.description);
    };

    return {
      form,
      mdEditor,
      resetForm,
    };
  },
};
</script>
