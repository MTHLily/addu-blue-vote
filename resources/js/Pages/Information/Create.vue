

<template>
  <Head title="Infomation Snippets"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column">
      <form @submit.prevent="info.post('/dashboard/information')">
        <h1>Create Information Snippet</h1>
        <InformationForm v-model:info="info"></InformationForm>
        <div class="btn-group mx-auto w-100" role="group">
          <button class="btn btn-primary">Save</button>
          <Link href="/dashboard/information" class="btn btn-danger">Cancel</Link>
        </div>
      </form>
    </div>
  </DashboardLayout>
</template>


<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import InformationForm from "../../Components/Information/InformationForm.vue";
import { useForm } from "@inertiajs/inertia-vue3";


export default {
   components: { 
    Link, 
    Head, 
    DashboardLayout,
    InformationForm 
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
