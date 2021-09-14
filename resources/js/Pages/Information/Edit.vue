<template>

    <Head title="Dashboard" />
    <DashboardLayout>
    <div class="row">
    <div class="col-lg-12 margin-tb">
        <div class="pull-left">
            <h2>Update Info</h2>
        </div>
        <div class="pull-right">
            <a class="btn btn-primary" href='/dashboard/information/'> Back</a>
        </div>
    </div>
</div>


<form id ="infoSnippet-create" @submit.prevent="submit">

     <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Title</strong>
                <input type="text" v-model = "form.title" class="form-control" placeholder="What is this snippet about?">
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Content</strong>
                <textarea v-model= "form.content" class="form-control" style="height:150px"  placeholder="Explain the snippet here."></textarea>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>

</form>
      
   </DashboardLayout>

</template>

<script>
import { reactive } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";


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
        Head,
        DashboardLayout,
    },
props:{
    course: Object,
},
  setup () {
    const form = reactive({
      title: this.title,
      content: this.content,
     
    })

    function submit() {
      Inertia.post('/dashboard/information/edit', form)
    }

    return { form, submit }
  },
}
     /* }
    }
};*/
</script>

<style></style>
