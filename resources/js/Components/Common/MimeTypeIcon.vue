<template>
  <i class="bi" :class="mimeClass" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    mimeType: {
      type: String,
      default: "none",
    },
  },
  setup(props) {
    let mimeClass;
    switch (props.mimeType.split("/")[0]) {
      case "audio":
        mimeClass = "bi-file-earmark-music";
        break;
      case "image":
        mimeClass = "bi-file-earmark-image";
        break;
      case "video":
        mimeClass = "bi-file-earmark-play";
        break;
      case "text":
        mimeClass = "bi-file-earmark-text";
        break;
      default:
        mimeClass = "bi-file-earmark";
    }

    return {
      mimeClass,
    };
  },
});
</script>
