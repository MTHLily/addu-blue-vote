<template>
  <Head title="Edit About Us"></Head>

  <DashboardLayout>
    <div class="container d-flex flex-column gap-4">
      <div>
        <label for="description" class="form-label">
          <h1 class="text-primary">What is Blue Vote?</h1>
        </label>
        <MarkdownEditor
          id="description"
          :class="{ 'is-invalid': form.errors.description }"
          v-model:value="form.description"
        />
        <div class="invalid-feedback">{{ form.errors.description }}</div>
      </div>
      <div>
        <label for="Previous Projects" class="form-label">
          <h1 class="text-primary">Previous Projects</h1>
        </label>
        <PreviousProjectInput v-model:value="form.previous_projects" />
      </div>
      <div>
        <label for="Blue Vote People" class="form-label">
          <h1 class="text-primary">Blue Vote People</h1>
        </label>
        <BlueVotePeopleInput v-model:value="form.bluevote_people" />
      </div>
      <div>
        <label for="partner-offices-input" class="form-label">
          <h1 class="text-warning">Partner Offices</h1>
        </label>
        <PartnerOfficeInput
          id="partner-offices-input"
          v-model:value="form.partner_offices"
        />
      </div>
    </div>
    <pre>{{ form }}</pre>
  </DashboardLayout>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import IssueForm from "@/Components/Issues/IssueForm.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import MarkdownEditor from "@/Components/MarkdownEditor.vue";
import PreviousProjectInput from "@/Components/AboutUs/PreviousProjectInput.vue";
import BlueVotePeopleInput from "@/Components/AboutUs/BlueVotePeopleInput.vue";
import PartnerOfficeInput from "@/Components/AboutUs/PartnerOfficeInput.vue";

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
      previous_projects: props.previous_projects,
      bluevote_people: props.bluevote_people,
      partner_offices: props.partner_offices,
    });

    return {
      form,
    };
  },
};
</script>
