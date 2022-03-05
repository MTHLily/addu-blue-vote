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
        <InformationModuleForm v-model:form="form" :videos="videos" />
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
import useCRUD from "@/Composables/useCRUD";

export default defineComponent({
  components: { Link, Head, DashboardLayout, InformationModuleForm },

  props: {
    information_module: Object,
    videos: Array,
  },
  setup(props) {
    const { createInfoModuleForm } = useCRUD();
    const form = createInfoModuleForm(props.information_module);

    return {
      form,
    };
  },
});
</script>
