<template>
  <Head title="Create Issue"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column container">
      <form @submit.prevent="form.post(route('issues.store'))">
        <h1>Create Issue</h1>
        <IssueForm v-model:form="form"></IssueForm>
        <div class="btn-group mx-auto w-100" role="group">
          <button class="btn btn-primary">Save</button>
          <Link :href="route('issues.index')" class="btn btn-danger"
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
import IssueForm from "@/Components/Issues/IssueForm.vue";
import { useForm } from "@inertiajs/inertia-vue3";

export default {
  components: { Link, Head, DashboardLayout, IssueForm },
  data: () => ({
    form: useForm({
      name: "",
    }),
  }),
};
</script>

<style></style>
