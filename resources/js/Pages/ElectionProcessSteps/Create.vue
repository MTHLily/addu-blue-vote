<template>
  <Head title="Create Election Process Step"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column container">
      <form @submit.prevent="form.post(route('election-process-steps.store'))">
        <h1>Create Election Step</h1>
        <ElectionProcessStepForm v-model:form="form" />
        <div class="btn-group mx-auto w-100" role="group">
          <button class="btn btn-primary">Save</button>
          <Link
            :href="route('election-process-steps.index')"
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
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import ElectionProcessStepForm from "@/Components/ElectionProcessSteps/ElectionProcessStepForm.vue";

export default {
  components: { Link, Head, DashboardLayout, ElectionProcessStepForm },
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
