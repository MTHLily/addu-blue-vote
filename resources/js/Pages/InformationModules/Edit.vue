<template>
  <Head title="Edit Information Module"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column container">
      <form
        @submit.prevent="
          form.post(route('information-modules.update', information_module.id))
        "
      >
        <h1>Edit Information Module: {{ information_module.description }}</h1>
        <InformationModuleForm
          v-model:form="form"
          :videos="videoOptions"
        ></InformationModuleForm>
        <div class="btn-group mx-auto w-100" role="group">
          <button class="btn btn-primary">Save</button>
          <Link
            :href="route('information-modules.index')"
            class="btn btn-danger"
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
import InformationModuleForm from "../../Components/InformationModule/InformationModuleForm.vue";
import { defineComponent } from "@vue/runtime-core";
import { useForm } from "@inertiajs/inertia-vue3";

export default defineComponent({
  components: { Link, Head, DashboardLayout, InformationModuleForm },

  props: {
    information_module: Object,
    videos: Array,
  },
  data: () => ({
    videoOptions: [],
    form: useForm({
      description: "",
      related_media: null,
      speakers: "",
      featured: null,
      media: null,
    }),
  }),

  created() {
    this.videoOptions = this.videos.map((video) => ({
      value: video.id,
      label: video.title,
    }));

    this.form = useForm({
      _method: "PUT",
      description: this.information_module.description,
      media: this.information_module.media.map((img) => ({
        id: img.id,
        name: img.file_name,
        status: "finished",
      })),
      related_videos: this.information_module.related_video_resources.map(
        (video_resource) => video_resource.id
      ),
      speakers: this.information_module.speakers,
      featured: this.information_module.featured,
    });
  },
});
</script>

<style></style>
