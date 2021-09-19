<template>
  <div>
    <!-- {{ information }} -->
    <Head title="Infomation Snippets"></Head>

  <AdminLayout>
    <DashboardLayout>
      <div class="rounded" style="background-color: #FBD2B5">
        <div class="d-flex flex-column">
          <form
            @submit.prevent="
              infoForm.put(route('information.update', information.id))
            "
          >
            <h1 class="p-3">Information Snippet Details</h1>
            <div class="p-3">
              <InformationForm v-model:info="infoForm" ></InformationForm>
            </div>
            <div class="btn-group" role="group">
              <div class="p-3">
                <Link :href="route('information.edit', information.id)" class="btn btn-success"
                  >Edit</Link
                >
                <!-- <button class="btn btn-primary">Edit</button> -->
              </div>
              <div class="p-3">
                <Link :href="route('information.index')" class="btn btn-danger"
                  >Back</Link
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  </AdminLayout>
  </div>
</template>

<script>
import { reactive } from "vue";
import { Inertia } from "@inertiajs/inertia";
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import InformationForm from "../../Components/Information/InformationForm.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import AdminLayout from "../../Layouts/admin";

export default {
  props: {
    information: {
      type: Object,
      default: () => ({}),
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
