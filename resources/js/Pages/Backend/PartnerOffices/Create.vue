<template>
  <Head title="Create Partner Offices"></Head>

  <DashboardLayout>
    <div class="rounded container" style="background-color: #ccdfff">
      <div class="d-flex flex-column container">
        <form @submit.prevent="form.post(route('partner-offices.store'))">
          <h1 class="p-3">Create Partner Offices</h1>
          <div class="p-3">
            <PartnerOfficesForm
              v-model:form="form"
              
            ></PartnerOfficesForm>
          </div>
          <div class="btn-group mx-auto w-100" role="group">
            <div class="p-3">
              <button class="btn btn-primary">Save</button>
            </div>
            <div class="p-3">
              <Link :href="route('partner-offices.index')" class="btn btn-danger"
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
import { useForm } from "@inertiajs/inertia-vue3";
import { defineComponent } from "@vue/runtime-core";
import PartnerOfficesForm from "@/Components/AboutUs/PartnerOfficesForm.vue";

export default defineComponent({
  components: { Link, Head, DashboardLayout, PartnerOfficesForm },
  props: {
  },
  data: () => ({
    
    form: useForm({
      name: null,
      link: null,
      media: null,
      
    }),
  }),

//   created() {
//     this.videoOptions = this.videos.map((video) => ({
//       value: video.id,
//       label: video.title,
//     }));
//   },
});
</script>

<style></style>
