<template>
  <Head title="Create Blue Vote Person"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column container">
      <form @submit.prevent="form.post(route('bluevote-people.store'))">
        <h1>Create Blue Vote Person</h1>
        <BlueVotePersonForm v-model:form="form" />
        <div class="btn-group mx-auto w-100" role="group">
          <button class="btn btn-primary">Save</button>
          <Link :href="route('about-us.config')" class="btn btn-danger">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  </DashboardLayout>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import ElectionProcessStepForm from "@/Components/ElectionProcessSteps/ElectionProcessStepForm.vue";
import PreviousProjectForm from "@/Components/AboutUs/PreviousProjects/PreviousProjectForm.vue";
import BlueVotePersonForm from "@/Components/AboutUs/BlueVotePeople/BlueVotePersonForm.vue";
import useCRUD from "@/Composables/useCRUD";

export default {
  components: {
    Link,
    Head,
    DashboardLayout,
    ElectionProcessStepForm,
    PreviousProjectForm,
    BlueVotePersonForm,
  },
  setup() {
    const { createBlueVotePersonForm } = useCRUD();
    const form = createBlueVotePersonForm();

    return {
      form,
    };
  },
};
</script>
