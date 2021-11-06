<template>
  <n-dynamic-input
    :value="stances"
    :on-create="onCreate"
    :on-remove="onRemove"
    :max="options.length"
    #="{ value }"
  >
    <div class="w-100 input-group">
      <select class="form-select" v-model="value.issue_id">
        <option :value="null" disabled>Select an issue</option>
        <template v-for="issue in options" :key="issue.id">
          <option :value="issue.id">{{ issue.name }}</option>
        </template>
      </select>
      <div class="input-group-text">
        <div class="form-check form-switch">
          <input
            type="checkbox"
            class="form-check-input"
            v-model="value.positive"
          />
          <label class="form-check-label">Stance</label>
        </div>
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
    stances: Array,
    options: Array,
  },
  setup(props, { emit }) {
    return {
      onCreate: () => {
        emit("update:stances", [
          ...props.stances,
          {
            issue_id: null,
            positive: false,
          },
        ]);
      },
      onRemove: (index) => {
        props.stances.splice(index, 1);
      },
    };
  },
});
</script>

<style></style>
