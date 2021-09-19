<template>
  <div>
    {{ info }}
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style></style>
