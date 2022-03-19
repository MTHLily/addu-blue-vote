<template>
  <Head title="Create Previous Project"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column container">
      <form @submit.prevent="form.post(route('previous-projects.store'))">
        <h1>Create Previous Project</h1>
        <PreviousProjectForm v-model:form="form" />
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

export default {
  components: {
    Link,
    Head,
    DashboardLayout,
    ElectionProcessStepForm,
    PreviousProjectForm,
  },
  data: () => ({
    form: useForm({
      name: "",
      link: "",
    }),
  }),
};
</script>
