<template lang="">
  <div style="position: absolute; width: 100%; z-index: -1"></div>
  <div class="" style="position: relative">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data: () => ({}),
};
</script>
<style>
body {
  background: url("../assets/candidate-backgrounds.svg");
}
</style>
