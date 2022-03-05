<template>
  <Head title="Create Video Resource"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column container">
      <form @submit.prevent="form.post(route('video-resources.store'))">
        <h1>Create Video Resource</h1>
        <VideoResourceForm v-model:form="form"></VideoResourceForm>
        <div class="btn-group mx-auto w-100" role="group">
          <button class="btn btn-primary">Save</button>
          <Link :href="route('video-resources.index')" class="btn btn-danger"
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
import VideoResourceForm from "@/Components/VideoResources/VideoResourceForm.vue";
import { useForm } from "@inertiajs/inertia-vue3";

export default {
  components: { Link, Head, DashboardLayout, VideoResourceForm },
  data: () => ({
    form: useForm({
      title: "",
      description: "",
      information: "",
      //guests: "",
      link: "",
    }),
  }),
};
</script>

<style></style>
