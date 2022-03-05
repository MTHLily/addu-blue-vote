<template>
  <div style="background-color: #ffffff">
    <div class="mb-3 p-3" style="background-color: #ffffff">
      <label for="infoTitle" class="form-label">Title</label>
      <input
        v-model="form.title"
        type="text"
        class="form-control"
        :class="{
          'is-invalid': form.errors.title,
        }"
        id="infoTitle"
        placeholder="Information Snippet Title"
      />
      <div class="invalid-feedback">{{ form.errors.title }}</div>
    </div>
    <div class="mb-3 p-3" style="background-color: #ffffff">
      <label for="infoContent" class="form-label">Content</label>
      <MarkdownEditor
        v-model:value="form.content"
        :class="{ 'is-invalid': form.errors.content }"
      ></MarkdownEditor>
      <div class="invalid-feedback">{{ form.errors.content }}</div>
    </div>

    <div class="mb-3 p-3" style="background-color: #ffffff">
      <label for="infoLink" class="form-label">Read More Link</label>
      <input
        v-model="form.link"
        type="text"
        class="form-control"
        :class="{
          'is-invalid': form.errors.link,
        }"
        id="infoLink"
        placeholder="Information Snippet Link"
      />
      <div class="invalid-feedback">{{ form.errors.link }}</div>
    </div>

    <div class="mb-3 p-3" style="background-color: #ffffff">
      <label for="infoCover" class="form-label">Cover Image</label>
      <FileUploader
        v-model:value="form.cover"
        :class="{ 'is-invalid': form.errors['cover.file'] }"
        id="infoCover"
        placeholder="Information
      Snippet Cover"
      />
      <div class="invalid-feedback">{{ form.errors["cover.file"] }}</div>
    </div>
    <pre>{{ form }}</pre>
    <div>
      <h2>Preview</h2>
      <InformationSlide preview :info="form" />
    </div>
  </div>
</template>

<script>
import MarkdownEditor from "@/Components/MarkdownEditor.vue";
import InformationSlide from "./InformationSlide.vue";
import FileUploader from "../FileUploader.vue";

export default {
  components: {
    MarkdownEditor,
    InformationSlide,
    FileUploader,
  },
  props: {
    form: {
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
