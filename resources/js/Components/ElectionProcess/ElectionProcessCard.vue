<template>
  <div
    class="card p-3"
    :style="`background-color: ${
      processStep.primaryColor || '#055094'
    }; border-radius: 20px`"
  >
    <div
      class="
        badge
        text-wrap text-white
        fw-bolder
        p-3
        m-4
        fs-4
        col-6 col-md-4 col-lg-2
      "
      :style="`background-color: ${
        processStep.secondaryColor || processStep.primaryColor || '#ce2029'
      }; border-radius: 30px`"
    >
      {{ processStep.step }}
    </div>
    <div class="text-white fs-5 fw-bolder mx-5 my-1">
      {{ processStep.title }}
    </div>
    <div class="text-white fs-6 mx-5 mb-4">
      {{ processStep.description }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    processStep: {
      type: Object,
      default: () => ({
        step: "STEP DEFAULT",
        title: "Default Title",
        description: "Default Description",
        primaryColor: "#055094",
        secondaryColor: "#ce2029",
      }),
    },
  },
});
</script>

<style></style>
