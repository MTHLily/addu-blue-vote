<template>
  <div class="upload-wrapper">
    <!-- <NImage v-if="!multipleFiles" width="100" :src="filePreview"></NImage> -->
    <NUpload
      v-model:file-list="valueList"
      :max="multipleFiles ? undefined : 1"
      :on-update:file-list="handleFileListChange"
      :list-type="nonImage ? 'text' : 'image-card'"
    >
      <button class="btn btn-primary" type="button">Upload</button>
    </NUpload>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import { NUpload, NImage } from "naive-ui";

export default defineComponent({
  components: { NUpload, NImage },
  props: {
    value: Object,
    multipleFiles: {
      type: Boolean,
      default: false,
    },
    nonImage: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleFileListChange(fileList) {
      if (fileList.length > 0) {
        fileList.forEach((file) => (file.status = "finished"));
        if (this.multipleFiles) this.$emit("update:value", fileList);
        else this.$emit("update:value", fileList[0]);
      } else {
        this.$emit("update:value", this.multipleFiles ? [] : null);
      }
    },
  },
  computed: {
    valueList: {
      get() {
        if (!this.multipleFiles) {
          if (this.value) return [this.value];
          else return [];
        } else return this.value;
      },
    },
    filePreview() {
      if (!this.multipleFiles) {
        if (this.value?.file) return URL.createObjectURL(this.value.file);
      }
      return null;
    },
  },
});
</script>

<style scoped>
.upload-wrapper.is-invalid {
  border: red 1px solid;
}
</style>
