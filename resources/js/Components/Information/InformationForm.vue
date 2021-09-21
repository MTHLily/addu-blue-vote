<template>
  <div style="background-color: #FFFFFF;">
    <div class="mb-3 p-3" style="background-color: #FFFFFF;">
      <label for="infoTitle" class="form-label">Title</label>
      <input
        v-model="info.title"
        type="text"
        class="form-control"
        :class="{
          'is-invalid': info.errors.title,
        }"
        id="infoTitle"
        placeholder="Information Snippet Title"
      />
      <div class="invalid-feedback">{{ info.errors.title }}</div>
    </div>
    <div class="mb-3 p-3" style="background-color: #FFFFFF;">
      <label for="infoContent" class="form-label">Content</label>
      <MarkdownEditor
        v-model:value="info.content"
        :class="{ 'is-invalid': info.errors.content }"
      ></MarkdownEditor>
      <div class="invalid-feedback">{{ info.errors.content }}</div>
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
    info: {
      type: Object,
      default: () => ({
        title: "",
        content: "",
        errors: {
          title: "",
          content: "",
        },
      }),
    },
  },
};
</script>

<style></style>
