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
    <div class="mb-3">
    <label for="partyAbbreviation" class="form-label">Abbreviation</label>
    <input
      v-model="form.abbreviation"
      type="text"
      class="form-control"
      :class="{
        'is-invalid': form.errors.abbreviation,
      }"
      id="partyAbbreviation"
      placeholder="Party Abbreviation"
    />
    <div class="invalid-feedback">{{ form.errors.abbreviation }}</div>
  </div>
    <div class="mb-3">
    <label for="partyRepresentation" class="form-label">Representation</label>
    <textarea
      v-model="form.representation"
      type="text"
      class="form-control"
      :class="{
        'is-invalid': form.errors.representation,
      }"
      id="partyRepresentation"
      placeholder="Party Representation"
    />
    <div class="invalid-feedback">{{ form.errors.representation }}</div>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default: () => ({
        name: "",
        abbreviation: "",
        representation: "",
        errors: {
          name: "",
          abbreviation: "",
          representation: "",
        },
      }),
    },
  },
};
</script>

<style></style>
