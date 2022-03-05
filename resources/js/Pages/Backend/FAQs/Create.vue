<template>
  <!-- sample -->
  <Head title="Frequently Asked Questions"></Head>
  <DashboardLayout>
    <div class="rounded w-75 mx-auto" style="background-color: #ccdfff">
      <div class="d-flex flex-column">
        <form @submit.prevent="faq.post('/dashboard/faqs')">
          <h1 class="p-3">Create Frequently Asked Question</h1>
          <div class="p-3">
            <FAQForm v-model:form="faq"></FAQForm>
          </div>
          <div class="btn-group" role="group">
            <div class="p-3">
              <button class="btn btn-primary">Save</button>
            </div>
            <div class="p-3">
              <Link :href="route('faqs.index')" class="btn btn-danger"
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
import FAQForm from "@/Components/FAQs/FAQForm.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import AdminLayout from "@/Layouts/admin";

export default {
  components: { Link, Head, DashboardLayout, FAQForm, AdminLayout },
  data: () => ({
    faq: useForm({
      question: "",
      answer: "",
    }),
  }),
};
</script>

<style></style>
