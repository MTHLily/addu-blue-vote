<template>
  <div>
    {{ district }}
  </div>
</template>

<script>
export default {
  props: {
    district: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style></style>
