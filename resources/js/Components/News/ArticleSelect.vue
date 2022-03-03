<template>
  <NSelect
    :value="value"
    :options="options"
    multiple
    filterable
    :on-update:value="onUpdate"
    :filter="onFilter"
    :render-label="renderLabel"
    :render-tag="renderTag"
  />
</template>

<script>
import { computed, defineComponent, h } from "vue";
import { NSelect, NTag } from "naive-ui";

export default defineComponent({
  components: {
    NSelect,
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

    const renderLabel = (option, selected) =>
      h("div", { class: "flex flex-column gap-2 py-2" }, [
        h("div", { class: "flex gap-2" }, [
          option.label,
          h("a", { href: option.url }, "See Article"),
        ]),
        h("div", option.description),
      ]);
    const renderTag = ({ option, handleClose }) => {
      return h(
        NTag,
        {
          type: option.type,
          closable: true,
          onClose: (e) => {
            e.stopPropagation();
            handleClose();
          },
        },
        { default: () => option.label }
      );
    };

    const onUpdate = (value, option) => {
      console.log(value, option);
      emit("update:value", value);
    };

    const onFilter = (pattern, option) => {
      if (
        option.label.toUpperCase().includes(pattern.toUpperCase()) ||
        option.description.toUpperCase().includes(pattern.toUpperCase())
      )
        return true;

      return false;
    };

    return {
      options,
      renderLabel,
      renderTag,
      onUpdate,
      onFilter,
    };
  },
});
</script>
