<template>
  <Head title="Edit Volunteer Process Step"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column container">
      <form
        @submit.prevent="
          form.put(route('volunteer-process-steps.update', step.id))
        "
      >
        <h1>Edit Step: {{ step.title }}</h1>
        <VolunteerProcessStepForm v-model:form="form" />
        <div class="btn-group mx-auto w-100" role="group">
          <button class="btn btn-primary">Save</button>
          <Link :href="route('about-us.config')" class="btn btn-danger"
            >Cancel</Link
          >
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
  props: {
    step: Object,
  },
  data: () => ({
    form: useForm({
      title: "",
      description: "",
      primary_color: "#EE4747",
      secondary_color: "#2D8ACC",
    }),
  }),
  created() {
    this.form = useForm({
      title: this.step.title,
      description: this.step.description,
      primary_color: this.step.primary_color,
      secondary_color: this.step.secondary_color,
    });
  },
};
</script>

<style></style>
