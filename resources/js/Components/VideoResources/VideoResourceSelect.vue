<template>
  <ExpandedSelect :options="options" :value="value" @update:value="onUpdate" />
</template>

<script>
import { computed, defineComponent } from "vue";
import ExpandedSelect from "@/Components/Common/ExpandedSelect.vue";

export default defineComponent({
  components: { ExpandedSelect },
  props: {
    videoResources: {
      type: Array,
      default: [],
    },
    value: {
      type: Array,
      default: [],
    },
  },
  setup(props, { emit }) {
    const options = computed(() =>
      props.videoResources.map((video) => ({
        value: video.id,
        label: video.title,
        description: video.description,
        url: video.url,
      }))
    );

    const onUpdate = (value) => {
      emit("update:value", value);
    };

    return {
      options,
      onUpdate,
    };
  },
});
</script>
