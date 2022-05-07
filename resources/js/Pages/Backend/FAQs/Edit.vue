<template>
  <Head title="Frequently Asked Questions"></Head>

  <DashboardLayout>
    <div class="rounded w-75 mx-auto" style="background-color: #9acab3">
      <div class="d-flex flex-column">
        <form @submit.prevent="faqForm.put(`/dashboard/faqs/${faq.id}`)">
          <h1 class="p-3">Edit Frequently Asked Question</h1>
          <div class="p-3">
            <FAQForm v-model:form="faqForm" :types="types"></FAQForm>
          </div>
          <div class="btn-group" role="group">
            <div class="p-3">
              <button class="btn btn-primary">Save</button>
            </div>
            <div class="p-3">
              <Link href="/dashboard/faqs" class="btn btn-danger">Cancel</Link>
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
  props: {
    types: {
      type: Array,
      default: [],
    },
    faq: {
      type: Object,
      default: () => ({
        type: "",
        question: "",
        answer: "",
      }),
    },
  },
  components: { Link, Head, DashboardLayout, FAQForm, AdminLayout },
  created() {
    this.faqForm = useForm({
      faq_type_id: this.faq.faq_type_id,
      question: this.faq.question,
      answer: this.faq.answer,
    });
  },
  data: () => ({
    faqForm: null,
  }),
};
</script>

<style></style>
