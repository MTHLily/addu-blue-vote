<template>
  <ExpandedSelect :options="options" :value="value" @update:value="onUpdate" />
</template>

<script>
import { computed, defineComponent } from "vue";
import ExpandedSelect from "../Common/ExpandedSelect.vue";

export default defineComponent({
  components: {
    ExpandedSelect,
  },
  props: {
    articles: {
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
      props.articles.map((article) => ({
        value: article.id,
        label: article.title,
        description: article.description,
        url: article.url,
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
