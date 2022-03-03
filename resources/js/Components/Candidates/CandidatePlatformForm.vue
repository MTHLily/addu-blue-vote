<template>
  <NDynamicInput
    class="w-full"
    :value="formValue"
    #="{ value: item }"
    :on-create="onCreate"
    :on-remove="onRemove"
  >
    <div class="d-flex flex-column gap-2 w-full mb-3">
      <div class="input-group">
        <span class="input-group-text h-fit w-1/4">Platform Title</span>
        <input v-model="item.title" type="text" class="form-control h-fit" />
      </div>
      <div>
        <span class="form-label">Platform Description</span>
        <MarkdownEditor v-model:value="item.description" class="h-12" />
      </div>
    </div>
  </NDynamicInput>
</template>

<script>
import { computed, defineComponent } from "vue";
import { NDynamicInput } from "naive-ui";
import MarkdownEditor from "../MarkdownEditor.vue";

export default defineComponent({
  components: {
    NDynamicInput,
    MarkdownEditor,
  },
  props: {
    value: {
      type: Array,
      default: [],
    },
  },
  setup(props, { emit }) {
    const formValue = computed(() => props.value);
    const onCreate = () => {
      emit("update:value", [
        ...props.value,
        {
          title: "",
          description: "",
        },
      ]);
    };

    const onRemove = (index) => {
      formValue.value.splice(index, 1);
    };

    return {
      onCreate,
      onRemove,
      formValue,
    };
  },
});
</script>
