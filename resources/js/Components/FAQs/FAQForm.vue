<template>
  <div style="background-color: #ffffff">
    <div class="mb-3 p-3">
      <label for="faqtype" class="form-label">FAQ Type</label>
      <select
        v-model="form.faq_type_id"
        class="form-control"
        :class="{
          'is-invalid': form.errors.faq_type_id,
        }"
        id="faqtype"
        placeholder="FAQ Type"
      >
        <option v-for="type in types" :key="type.value" :value="type.value">
          {{ type.name }}
        </option>
      </select>
      <div class="invalid-feedback">{{ form.errors.faq_type_id }}</div>
    </div>
    <div class="mb-3 p-3">
      <label for="faqQuestion" class="form-label">Question</label>
      <input
        v-model="form.question"
        type="text"
        class="form-control"
        :class="{
          'is-invalid': form.errors.question,
        }"
        id="faqQuestion"
        placeholder="FAQ Question"
      />
      <div class="invalid-feedback">{{ form.errors.question }}</div>
    </div>
    <div class="mb-3 p-3">
      <label for="faqAnswer" class="form-label">Answer</label>
      <MarkdownEditor
        v-model:value="form.answer"
        :class="{ 'is-invalid': form.errors.answer }"
      ></MarkdownEditor>
      <div class="invalid-feedback">{{ form.errors.answer }}</div>
    </div>
    <div class="p-3">
      <h2>Preview</h2>
      <FAQItem :faq="form" />
    </div>
  </div>
</template>

<script>
import MarkdownEditor from "@/Components/MarkdownEditor.vue";
import FAQItem from "./FAQItem.vue";

export default {
  components: {
    MarkdownEditor,
    FAQItem,
  },
  props: {
    types: {
      type: Array,
      default: [],
    },
    form: {
      type: Object,
      default: () => ({
        type: "",
        question: "",
        answer: "",
        errors: {
          type: "",
          question: "",
          answer: "",
        },
      }),
    },
  },
};
</script>

<style></style>
