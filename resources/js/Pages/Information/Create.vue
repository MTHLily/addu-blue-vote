

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
import { reactive } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import InformationForm from "../../Components/Information/InformationForm.vue";
import { useForm } from "@inertiajs/inertia-vue3";



/*export default {
    components: {
        Head,
        DashboardLayout,
    },

    props:{},

    data(){
      return {
        form:{
          title:'',
          content: '',
        }
      }
    },

    methods: {
      createInfo(){
        let data = new FormData();
        data.append('title', this.form.title);
        data.append('content', this.form.content);
*/


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

 /* setup () {
    const form = reactive({
      title: '',
      content: '',
     
    })

    function submit() {
      Inertia.post('/dashboard/information', form)
    }

    return { form, submit }
  },*/
}
     /* }
    }
};*/
</script>

<style></style>
