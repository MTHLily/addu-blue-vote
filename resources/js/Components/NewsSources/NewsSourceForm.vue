<template>
  <div class="mb-4">
    <label for="sourceName" class="form-label">News Source</label>
    <input
      v-model="form.name"
      type="text"
      class="form-control"
      :class="{
        'is-invalid': form.errors.name,
      }"
      id="issueName"
      placeholder="Source Name"
    />
    <div class="invalid-feedback">{{ form.errors.name }}</div>
  </div>

  <div class="mb-4">
    <label for="home_url" class="form-label">Home URL</label>
    <input
      v-model="form.home_url"
      type="text"
      class="form-control"
      :class="{
        'is-invalid': form.errors.home_url,
      }"
      id="home_url"
      placeholder="Site Link"
    />
    <div class="invalid-feedback">{{ form.errors.home_url }}</div>
  </div>

  <div class="mb-4">
    <label for="color" class="form-label">Color</label>
    <ColorPicker
      v-model:color="form.color"
      :class="{
        'is-invalid': form.errors.color,
      }"
    ></ColorPicker>
    <div class="invalid-feedback">{{ form.errors.color }}</div>
  </div>
</template>

<script>
import ColorPicker from "../ColorPicker.vue";

export default {
  components: { ColorPicker },
  props: {
    form: {
      type: Object,
      default: () => ({
        name: "",
        home_url: "",
        color: "",
        errors: {
          name: "",
          home_url: "",
          color: "",
        },
      }),
    },
  },
};
</script>

<style></style>
