<template>
  <n-dynamic-input
    :value="background"
    :on-create="onCreate"
    :on-remove="onRemove"
    #="{ value, index }"
  >
    <div class="row w-100 my-3 ms-3">
      <div class="row">
        <label :for="`bg-type-${index}`">Background Type</label>
        <select
          class="form-select"
          :id="`bg-type-${index}`"
          v-model="value.faq_type_id"
          :class="{
            'is-invalid':
              errors[`${errorKey}.${index}.faq_type_id`],
          }"
        >
          <option :value="null" disabled>Select Background Type</option>
          <template v-for="type in types" :key="type.id">
            <option :value="type.id">{{ type.name }}</option>
          </template>
        </select>
        <div class="invalid-feedback">
          {{ errors[`${errorKey}.${index}.faq_type_id`] }}
        </div>
      </div>
      <div
        class="row row-cols-2"
        v-if="value.faq_type_id != null"
      >
      </div>
    </div>
  </n-dynamic-input>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import { NDynamicInput, NDatePicker } from "naive-ui";

export default defineComponent({
  components: {
    NDynamicInput,
    NDatePicker,
  },
  props: {
    background: Array,
    types: Array,
    errors: Object,
    errorKey: String,
  },
  setup(props, { emit }) {
    return {
      onCreate: () => {
        emit("update:background", [
          ...props.background,
          {
            faq_type_id: null,
            name: null,
            
          },
        ]);
      },
      onRemove: (index) => {
        props.background.splice(index, 1);
      },

      inputLabels: (id) => {
        return props.types.find((type) => type.id === id);
      },
    };
  },
});
</script>

<style></style>
