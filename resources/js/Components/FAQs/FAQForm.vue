<template>
  <div style="background-color: #FFFFFF;">
    <div class="mb-3 p-3">
      <label for="faqQuestion" class="form-label">Question</label>
      <input
        v-model="faq.question"
        type="text"
        class="form-control"
        :class="{
          'is-invalid': faq.errors.question,
        }"
        id="faqQuestion"
        placeholder="FAQ Question"
      />
      <div class="invalid-feedback">{{ faq.errors.question }}</div>
    </div>
    <div class="mb-3 p-3">
      <label for="faqAnswer" class="form-label">Answer</label>
      <MarkdownEditor
        v-model:value="faq.answer"
        :class="{ 'is-invalid': faq.errors.answer }"
      ></MarkdownEditor>
      <div class="invalid-feedback">{{ faq.errors.answer }}</div>
    </div>
  </div>
</template>

<script>
import MarkdownEditor from "../../Components/MarkdownEditor.vue";

export default {
  components: {
    MarkdownEditor,
  },
  props: {
    faq: {
      type: Object,
      default: () => ({
        question: "",
        answer: "",
        errors: {
          question: "",
          answer: "",
        },
      }),
    },
  },
};
</script>

<style></style>
