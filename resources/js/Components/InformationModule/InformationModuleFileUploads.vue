<template>
  <n-upload
    :default-file-list="fileList"
    show-file-list
    :custom-request="uploadRequest"
  >
    <button class="btn btn-primary" type="button">Upload</button>
  </n-upload>
</template>

<script>
import { defineComponent } from "vue";
import { NUpload } from "naive-ui";
import axios from "axios";
import { computed } from "@vue/reactivity";

export default defineComponent({
  components: {
    NUpload,
  },
  props: {
    form: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const fileList = props.form.downloadables;
    const uploadRequest = (options) => {
      axios
        .post(route("information-modules.downloadables.store", props.form.id), {
          file: options.file.file,
        })
        .then((data) => {
          console.log(data);
        });
      console.log(options.file);
    };
    return {
      uploadRequest,
      fileList,
    };
  },
});
</script>
