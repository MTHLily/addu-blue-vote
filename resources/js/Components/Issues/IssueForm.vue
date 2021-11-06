<template>
  <div class="mb-3">
    <label for="issueName" class="form-label">Issue</label>
    <input
      v-model="form.name"
      type="text"
      class="form-control"
      :class="{
        'is-invalid': form.errors.name,
      }"
      id="issueName"
      placeholder="Issue"
    />
    <div class="invalid-feedback">{{ form.errors.name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default: () => ({
        name: "",
        errors: {
          name: "",
        },
      }),
    },
  },
};
</script>

<style></style>
