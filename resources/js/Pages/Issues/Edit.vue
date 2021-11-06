<template>
  <Head title="Edit Issue"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column container">
      <form @submit.prevent="form.put(route('issues.update', issue.id))">
        <h1>Edit Issue: {{ issue.name }}</h1>
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
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import IssueForm from "../../Components/Issues/IssueForm.vue";
import { useForm } from "@inertiajs/inertia-vue3";

export default {
  components: { Link, Head, DashboardLayout, IssueForm },
  props: {
    issue: Object,
  },
  data: () => ({
    form: useForm({
      name: "",
    }),
  }),
  created() {
    this.form = useForm({
      name: this.issue.name,
    });
  },
};
</script>

<style></style>
