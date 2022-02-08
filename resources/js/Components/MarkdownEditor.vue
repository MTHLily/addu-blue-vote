<template>
  <div ref="editor" />
</template>

<script>
import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";

export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data: () => ({ editor: null }),
  mounted() {
    this.editor = new Editor({
      el: this.$refs.editor,
      // initialEditType: "wysiwyg",
      initialValue: this.value,
      toolbarItems: [
        ["heading", "bold", "italic", "strike"],
        ["hr", "quote"],
        ["ul", "ol", "task"],
        ["table", "image", "link"],
        ["scrollSync"],
      ],
      events: {
        change: this.onChange,
      },
    });
  },
  methods: {
    onChange() {
      console.log(this.editor.getMarkdown());
      this.$emit("update:value", this.editor.getMarkdown());
    },
  },
};
</script>

<style lang="scss"></style>
