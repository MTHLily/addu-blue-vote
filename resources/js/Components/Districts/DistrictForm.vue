<template>
  <div class="mb-3">
    <label for="districtName" class="form-label">District Name</label>
    <input
      v-model="district.name"
      type="text"
      class="form-control"
      :class="{
        'is-invalid': district.errors.name,
      }"
      id="districtName"
      placeholder="District Name"
    />
    <div class="invalid-feedback">{{ district.errors.name }}</div>
  </div>
  <div class="mb-3">
    <label for="description" class="form-label">Description</label>
    <textarea
      id="description"
      cols="30"
      rows="4"
      class="form-control"
      :class="{
        'is-invalid': district.errors.name,
      }"
      v-model="district.description"
      placeholder="Description"
    ></textarea>
    <div class="invalid-feedback">{{ district.errors.description }}</div>
  </div>
  <div class="mb-3">
    <ColorPicker
      v-model:color="district.color"
      :class="{
        'is-invalid': district.errors.color,
      }"
    ></ColorPicker>
    <div class="invalid-feedback">{{ district.errors.color }}</div>
  </div>
</template>

<script>
import ColorPicker from "../ColorPicker.vue";

export default {
  components: {
    ColorPicker,
  },
  props: {
    district: {
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
