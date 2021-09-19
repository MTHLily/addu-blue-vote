<template>
  <div>
    {{ faq }}
  </div>
</template>

<script>
export default {
  props: {
    faq: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style></style>
