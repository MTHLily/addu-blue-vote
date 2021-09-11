<template>
  <Head title="Frequently Asked Questions"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column">
      <form @submit.prevent="faqForm.put(`/dashboard/faqs/${faq.id}`)">
        <h1>Edit Frequently Asked Question</h1>
        <FAQForm v-model:faq="faqForm"></FAQForm>
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
  props: {
    faq: {
      type: Object,
      default: () => ({
        question: "",
        answer: "",
      }),
    },
  },
  components: { Link, Head, DashboardLayout, FAQForm },
  created() {
    this.faqForm = useForm({
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
