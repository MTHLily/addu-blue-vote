<template>
  <Head title="Edit Partner Office"></Head>

  <DashboardLayout>
    <div class="rounded container" style="background-color: #ccdfff">
      <div class="d-flex flex-column container">
        <form
          @submit.prevent="
            form.post(route('partner-offices.update', partnerOffice.id))
          "
        >
          <h1 class="p-3">Edit Partner Office</h1>
          <div class="p-3">
            <PartnerOfficesForm v-model:form="form"></PartnerOfficesForm>
          </div>
          <div class="btn-group mx-auto w-100" role="group">
            <div class="p-3">
              <button class="btn btn-primary">Save</button>
            </div>
            <div class="p-3">
              <Link :href="route('about-us.config')" class="btn btn-danger"
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
    partnerOffice: Object,
  },
  data: () => ({
    form: useForm({
      title: "",
      description: "",
      media: null,
    }),
  }),
  created() {
    this.form = useForm({
      _method: "PUT",
      name: this.partnerOffice?.name,
      link: this.partnerOffice?.link,
      media: this.partnerOffice.media
        ? this.partnerOffice.mediaUrls?.map((img) => ({
            id: img.id,
            url: img.url,
            "preview-src": img.thumbnailUrl,
            status: "finished",
          }))[0]
        : null,
    });
  },
});
</script>

<style></style>
