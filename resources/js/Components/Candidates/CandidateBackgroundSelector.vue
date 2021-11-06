<template>
  <n-dynamic-input
    :value="background"
    :on-create="onCreate"
    :on-remove="onRemove"
    #="{ value, index }"
  >
    <div class="w-100 row-cols-3">
      <div class="col">
        <label :for="`bg-type-${index}`">Background Type</label>
        <select
          class="form-select"
          :id="`bg-type-${index}`"
          v-model="value.candidate_background_type_id"
        >
          <option :value="null" disabled>Select Background Type</option>
          <template v-for="type in types" :key="type.id">
            <option :value="type.id">{{ type.name }}</option>
          </template>
        </select>
      </div>
    </div>
  </n-dynamic-input>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import { NDynamicInput } from "naive-ui";

export default defineComponent({
  components: {
    NDynamicInput,
  },
  props: {
    background: Array,
    types: Array,
  },
  setup(props, { emit }) {
    return {
      onCreate: () => {
        emit("update:background", [
          ...props.background,
          {
            candidate_background_type_id: null,
            place: null,
            occupation: null,
            position: null,
            description: null,
          },
        ]);
      },
      onRemove: (index) => {
        props.background.splice(index, 1);
      },
    };
  },
});
</script>

<style></style>
