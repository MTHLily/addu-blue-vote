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
    
    <label for="color" class="form-label">Color</label>
    <input
      v-model="form.color"
      type="text"
      class="form-control"
      :class="{
        'is-invalid': form.errors.color,
      }"
      id="color"
      placeholder="Color"
    />

    <div class="invalid-feedback">{{ form.errors.name }}</div>
     <div class="invalid-feedback">{{ form.errors.home_url }}</div>
      <div class="invalid-feedback">{{ form.errors.color }}</div>
  </div>
</template>

<script>
export default {
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
