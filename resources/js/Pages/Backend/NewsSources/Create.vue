<template>
  <Head title="Create News Source"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column container">
      <form @submit.prevent="form.post(route('news-sources.store'))">
        <h1>Create News Source</h1>
        <NewsSourceForm v-model:form="form"></NewsSourceForm>
        <div class="btn-group mx-auto w-100" role="group">
          <button class="btn btn-primary">Save</button>
          <Link :href="route('news-sources.index')" class="btn btn-danger"
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
import NewsSourceForm from "@/Components/NewsSources/NewsSourceForm.vue";
import { useForm } from "@inertiajs/inertia-vue3";

export default {
  components: { Link, Head, DashboardLayout, NewsSourceForm },
  data: () => ({
    form: useForm({
      name: "",
      home_url: "",
      color: "",
    }),
  }),
};
</script>

<style></style>
