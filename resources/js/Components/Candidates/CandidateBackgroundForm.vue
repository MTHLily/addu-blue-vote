<template></template>

<script>
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    background: {
      type: Array,
      default: [],
    },
  },
  setup(props) {
    const educationalBackground = computed(() => {
      props.background.filter((bg) => bg.candidate_background_type_id == 1);
    });
    const politicalBackground = computed(() => {
      props.background.filter((bg) => bg.candidate_background_type_id == 1);
    });
    const professionalBackground = computed(() => {
      props.background.filter((bg) => bg.candidate_background_type_id == 1);
    });

    return {
      educationalBackground,
      politicalBackground,
      professionalBackground,
    };
  },
});
</script>
