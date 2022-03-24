<template>
  <div ref="editor" />
</template>

<script>
import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { toRef } from "vue";

export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data: () => ({ editor: null }),
  mounted() {
    const editor = new Editor({
      el: this.$refs.editor,
      // initialEditType: "wysiwyg",
      initialValue: this.value,
      height: "auto",
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
    Object.freeze(editor);
    this.editor = editor;
  },
  methods: {
    onChange() {
      this.$emit("update:value", this.editor.getMarkdown());
    },
    setValue(value) {
      this.editor.setMarkdown(value);
    },
  },
};
</script>
