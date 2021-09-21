<template>
  <div class="mb-3">
    <label for="cityName" class="form-label">City Name</label>
    <input
      v-model="city.name"
      type="text"
      class="form-control"
      :class="{
        'is-invalid': city.errors.name,
      }"
      id="cityName"
      placeholder="City Name"
    />
    <div class="invalid-feedback">{{ city.errors.name }}</div>
  </div>

</template>

<script>
import ColorPicker from "../ColorPicker.vue";

export default {
  
  props: {
    city: {
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
