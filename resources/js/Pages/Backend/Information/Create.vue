<template>
  <Head title="Infomation Snippets"></Head>

  <DashboardLayout>
    <div class="rounded w-75 mx-auto" style="background-color: #ccdfff">
      <div class="d-flex flex-column">
        <form
          class="d-flex flex-column align-items-center"
          @submit.prevent="info.post(route('information.store'))"
        >
          <h1 class="p-3 w-100">Create Information Snippet</h1>
          <div class="p-3 w-100">
            <InformationForm v-model:form="info"></InformationForm>
          </div>
          <div class="btn-group justify-self-center" role="group">
            <div class="p-3">
              <button class="btn btn-primary">Save</button>
            </div>
            <div class="p-3">
              <Link :href="route('information.index')" class="btn btn-danger"
                >Cancel</Link
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </DashboardLayout>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import InformationForm from "@/Components/Information/InformationForm.vue";
import { useForm } from "@inertiajs/inertia-vue3";

export default {
  components: {
    Link,
    Head,
    DashboardLayout,
    InformationForm,
  },
  data: () => ({
    info: useForm({
      title: "",
      content: "",
      link: "",
      cover: null,
    }),
  }),
};
</script>

<style></style>
