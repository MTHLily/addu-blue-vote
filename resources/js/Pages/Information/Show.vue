<template>
  <div>
    {{ information }}
  </div>
</template>

<script>
export default {
  props: {
    information: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style></style>
