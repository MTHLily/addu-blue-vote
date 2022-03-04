<template>
  <Head title="Edit Information Module"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column container">
      <form
        @submit.prevent="
          form.put(route('information-modules.update', information_module.id))
        "
      >
        <h1>Edit Information Module: {{ information_module.description }}</h1>
        <InformationModuleForm
        v-model:form="form"
        :videos="videoOptions"
        ></InformationModuleForm>
        <div class="btn-group mx-auto w-100" role="group">
          <button class="btn btn-primary">Save</button>
          <Link :href="route('information-modules.index')" class="btn btn-danger"
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

export default  defineComponent({
  components: { Link, Head, DashboardLayout, InformationModuleForm },
  
  props: {
    information_module: Object,
    videos: Array,
  },
  data: () => ({
    videoOptions: [],
    form: useForm({
     description: null,
     related_media: null,
     // related_video: [],
      speakers: null, 
      featured: null,
      downloadables: null,
    }),
  }),

  created() {
    this.videoOptions = this.videos.map(video =>({
      value: video.id,
      label: video.title,
      }));

    this.form = useForm({
      _method: "PUT",
      description: this.information_module.description,
      related_media: this.information_module.media.map(img =>({
        id: img.id,
        status: "finished", 
      })),
     /*media: this.information_module.media
        ? this.information_module.mediaUrls?.map((img) => ({
            id: img.id,
            url: img.url,
            "preview-src": img.thumbnailUrl,
            status: "finished",
          }))[0]
        : null,,*/
     //related_video: this.information_module.related_video,      
      related_videos: this.information_module.related_video_resources.map(( video_resource ) => video_resource.id),
      speakers: this.information_module.speakers,
      featured: this.information_module.featured,
      downloadables: this.information_module.downloadables,

    });
  },
});
</script>

<style></style>
