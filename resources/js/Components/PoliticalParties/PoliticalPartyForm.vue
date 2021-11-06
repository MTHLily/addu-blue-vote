<template>
  <div class="mb-3">
    <label for="partyName" class="form-label">Political Party</label>
    <input
      v-model="form.name"
      type="text"
      class="form-control"
      :class="{
        'is-invalid': form.errors.name,
      }"
      id="partyName"
      placeholder="Party Name"
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
