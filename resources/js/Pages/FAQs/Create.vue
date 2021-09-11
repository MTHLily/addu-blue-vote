<template>
  <Head title="Frequently Asked Questions"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column">
      <form @submit.prevent="faq.post('/dashboard/faqs')">
        <h1>Create Frequently Asked Question</h1>
        <FAQForm v-model:faq="faq"></FAQForm>
        <div class="btn-group mx-auto w-100" role="group">
          <button class="btn btn-primary">Save</button>
          <Link href="/dashboard/faqs" class="btn btn-danger">Cancel</Link>
        </div>
      </form>
    </div>
  </DashboardLayout>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import FAQForm from "../../Components/FAQs/FAQForm.vue";
import { useForm } from "@inertiajs/inertia-vue3";

export default {
  components: { Link, Head, DashboardLayout, FAQForm },
  data: () => ({
    faq: useForm({
      question: "",
      answer: "",
    }),
  }),
};
</script>

<style></style>
