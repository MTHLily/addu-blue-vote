<template>
  <n-dynamic-input
    :value="value"
    show-sort-button
    :on-update:value="onUpdate"
    :on-create="onCreate"
    #default="{ value: formItem, index }"
  >
    <div class="input-group mb-3">
      <span class="input-group-text" :id="`Project Title ${index}`">
        Project Title
      </span>
      <input
        type="text"
        v-model="formItem.name"
        class="form-control"
        placeholder="Project Title"
        aria-label="Project Title"
        :aria-describedby="`Project Title ${index}`"
      />
      <span class="input-group-text" :id="`Project Link ${index}`">
        Project Link
      </span>
      <input
        type="text"
        v-model="formItem.link"
        class="form-control"
        placeholder="Project Link"
        aria-label="Project Link"
        :aria-describedby="`Project Link ${index}`"
      />
    </div>
  </n-dynamic-input>
</template>

<script>
import { defineComponent } from "vue";
import { NDynamicInput } from "naive-ui";

export default defineComponent({
  components: {
    NDynamicInput,
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const onUpdate = (value) => {
      emit("update:value", value);
    };
    const onCreate = () => ({
      name: "",
      link: "",
    });

    return {
      onUpdate,
      onCreate,
    };
  },
});
</script>
