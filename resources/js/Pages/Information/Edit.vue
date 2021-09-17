<template>
  <Head title="Infomation Snippets"></Head>

<AdminLayout>
  <DashboardLayout>
    <div class="rounded" style="background-color: #9ACAB3;">
      <div class="d-flex flex-column">
        <form @submit.prevent="infoForm.put(`/dashboard/information/${information.id}`)">
          <h1 class="p-3">Edit Information Snippet</h1>
          <div class="p-3">
            <InformationForm v-model:info="infoForm"></InformationForm>
          </div>
        </form>
          <div class="btn-group" role="group">
            <div class="p-3">
              <button class="btn btn-primary">Save</button>
            </div>
            <div class="p-3">
              <Link href="/dashboard/information" class="btn btn-danger">Cancel</Link>
            </div>
          </div>
      </div>
    </div>

  </DashboardLayout>
</AdminLayout>
</template>


<script>
import { reactive } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import InformationForm from "../../Components/Information/InformationForm.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import AdminLayout from "../../Layouts/admin";

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
  components: { Link, Head, DashboardLayout, InformationForm, AdminLayout },
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
