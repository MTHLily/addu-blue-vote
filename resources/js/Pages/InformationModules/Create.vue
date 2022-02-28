<template>
  <Head title="Create Information Module"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column container">
      <form @submit.prevent="form.post(route('information-modules.store'))">
        <h1>Create Information Module</h1>
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
import { useForm } from "@inertiajs/inertia-vue3";
import { defineComponent } from "@vue/runtime-core";


export default {
  components: { Link, Head, DashboardLayout, InformationModuleForm },
  props: {
    videos: Array,
  },
  data: () => ({
    videoOptions:[],
    form: useForm({
      description: null,
      //related_media: "",
      related_videos: [],
      speakers: null,
      downloadables: null,
    }),
  }),

  created(){
    this.videoOptions = this.videos.map( video => ({
      value: video.id,
      label: video.title,
    }));
  },


};
</script>

<style></style>
