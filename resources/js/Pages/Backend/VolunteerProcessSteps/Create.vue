<template>
  <Head title="Create Volunteer Process Step"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column container">
      <form @submit.prevent="form.post(route('volunteer-process-steps.store'))">
        <h1>Create Volunteer Process Step</h1>
        <VolunteerProcessStepForm v-model:form="form" />
        <div class="btn-group mx-auto w-100" role="group">
          <button class="btn btn-primary">Save</button>
          <Link
            :href="route('volunteer-process-steps.index')"
            class="btn btn-danger"
          >
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
import VolunteerProcessStepForm from "@/Components/AboutUs/VolunteerProcessStepForm.vue";

export default {
  components: { Link, Head, DashboardLayout, VolunteerProcessStepForm },
  data: () => ({
    form: useForm({
      title: "",
      description: "",
      primary_color: "#EE4747",
      secondary_color: "#2D8ACC",
    }),
  }),
};
</script>
