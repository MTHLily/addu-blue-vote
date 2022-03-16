<template>
  <n-dynamic-input
    :value="value"
    show-sort-button
    :on-update:value="onUpdate"
    :on-create="onCreate"
    #default="{ value: formItem, index }"
  >
    <div class="d-flex w-full gap-2">
      <file-uploader v-model:value="formItem.photo" />
      <div class="d-flex flex-column h-full w-full">
        <div class="input-group">
          <span
            class="input-group-text w-1/4"
            :id="`partner-office-name-${index}`"
          >
            Name
          </span>
          <input
            type="text"
            v-model="formItem.name"
            class="form-control"
            placeholder="Office Name"
            aria-label="Office Name"
            :aria-describedby="`partner-office-name-${index}`"
          />
        </div>
        <div class="input-group">
          <span
            class="input-group-text w-1/4"
            :id="`partner-office-link-${index}`"
          >
            Link
          </span>
          <input
            type="text"
            v-model="formItem.position"
            class="form-control"
            placeholder="Office Link"
            aria-label="Partner Office Link"
            :aria-describedby="`partner-office-link-${index}`"
          />
        </div>
      </div>
    </div>
  </n-dynamic-input>
</template>

<script>
import { defineComponent } from "vue";
import { NDynamicInput } from "naive-ui";
import FileUploader from "../FileUploader.vue";

export default defineComponent({
  components: {
    NDynamicInput,
    FileUploader,
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
      photo: null,
    });

    return {
      onUpdate,
      onCreate,
    };
  },
});
</script>
