

<template>
  <Head title="Infomation Snippets"></Head>
  
  <AdminLayout>
    <DashboardLayout>
      <div class="rounded" style="background-color: #CCDFFF;">
        <div class="d-flex flex-column">
          <form @submit.prevent="info.post('/dashboard/information')">
            <h1 class="p-3">Create Information Snippet</h1>
            <div class="p-3">
              <InformationForm v-model:info="info"></InformationForm>
            </div>
            <div class="btn-group" role="group">
              <div class="p-3">
                <button class="btn btn-primary">Save</button>
              </div>
              <div class="p-3">
                <Link href="/dashboard/information" class="btn btn-danger">Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  </AdminLayout>
</template>


<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import InformationForm from "../../Components/Information/InformationForm.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import AdminLayout from "../../Layouts/admin";

export default {
   components: { 
    Link, 
    Head, 
    DashboardLayout,
    InformationForm,
    AdminLayout,
   },
  data: () => ({
    info: useForm({
      title: "",
      content: "",
    }),
  }),


}
     
</script>

<style></style>
