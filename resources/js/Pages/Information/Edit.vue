

<template>
  <Head title="Infomation Snippets"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column">
      <form @submit.prevent="infoForm.put(`/dashboard/information/${information.id}`)">
        <h1>Edit Information Snippet</h1>
        <InformationForm v-model:info="infoForm"></InformationForm>
        <div class="btn-group mx-auto w-100" role="group">
          <button class="btn btn-primary">Save</button>
          <Link href="/dashboard/information" class="btn btn-danger">Cancel</Link>
        </div>
      </form>
    </div>
  </DashboardLayout>
</template>


<script>
import { reactive } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import InformationForm from "../../Components/Information/InformationForm.vue";
import { useForm } from "@inertiajs/inertia-vue3";


export default {
   props: {
    information: {
      type: Object,
      default: () => ({
        title: "",
        content: "",
      }),
    },
  },
  components: { Link, Head, DashboardLayout, InformationForm },
  created() {
    this.infoForm = useForm({
      title: this.information.title,
      content: this.information.content,
    });
  },
  data: () => ({
    infoForm: null,
  }),

     };

</script>

<style></style>
