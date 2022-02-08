<template>
  <div>
    <div class="mb-2">
      <label for="stepTitle" class="form-label">Title</label>
      <input
        v-model="form.title"
        type="string"
        class="form-control"
        :class="{
          'is-invalid': form.errors.title,
        }"
        id="stepTitle"
        placeholder="Video Title"
      />
      <div class="invalid-feedback">{{ form.errors.title }}</div>
    </div>
    <div class="mb-2">
      <label for="description" class="form-label">Description</label>
      <MarkdownEditor
        v-model:value="form.description"
        :class="{
          'is-invalid': form.errors.title,
        }"
        id="description"
        placeholder="Video Title"
      />
      <div class="invalid-feedback">{{ form.errors.description }}</div>
    </div>

    <div class="row">
      <div class="col">
        <label for="primaryColor" class="form-label">Primary Color</label>
        <ColorPicker v-model:value="form.primary_color" />
        <div class="invalid-feedback">{{ form.errors.primary_color }}</div>
      </div>
      <div class="col">
        <label for="secondaryColor" class="form-label">Secondary Color</label>
        <ColorPicker v-model:value="form.secondary_color" />
        <div class="invalid-feedback">{{ form.errors.secondary_color }}</div>
      </div>
    </div>

    <div>
      <h2>Preview</h2>
      <ElectionProcessCard :process-step="form" />
    </div>

    {{ form }}
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MarkdownEditor from "../MarkdownEditor.vue";
import ColorPicker from "../ColorPicker.vue";
import ElectionProcessCard from "../ElectionProcess/ElectionProcessCard.vue";

export default defineComponent({
  props: {
    form: {
      type: Object,
      required: true,
    },
  },
  components: { MarkdownEditor, ColorPicker, ElectionProcessCard },
});
</script>
