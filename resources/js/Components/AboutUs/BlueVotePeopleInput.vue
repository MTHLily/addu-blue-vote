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
          <span class="input-group-text w-1/4" :id="`person-name-${index}`">
            Name
          </span>
          <input
            type="text"
            v-model="formItem.name"
            class="form-control"
            placeholder="Name"
            aria-label="Person Name"
            :aria-describedby="`person-name-${index}`"
          />
        </div>
        <div class="input-group">
          <span class="input-group-text w-1/4" :id="`person-position-${index}`">
            Position
          </span>
          <input
            type="text"
            v-model="formItem.position"
            class="form-control"
            placeholder="Position"
            aria-label="Person Position"
            :aria-describedby="`person-position-${index}`"
          />
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            v-model="formItem.volunteer"
            :id="`is-volunter-${index}`"
          />
          <label class="form-check-label" :for="`is-volunter-${index}`">
            Volunteer?
          </label>
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
      console.log("UPDATING", value);
      emit("update:value", value);
    };

    const onCreate = () => ({
      name: "",
      position: "",
      volunteer: false,
      photo: null,
    });

    return {
      onUpdate,
      onCreate,
    };
  },
});
</script>
