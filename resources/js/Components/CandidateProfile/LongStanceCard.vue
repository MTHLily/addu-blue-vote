<template lang="">
  <div
    class="card text-white mb-3"
    style="max-width: 100%; background-color: #CE2029"
  >
    <h1 class="card-header border-0 text-center text-uppercase fw-bold lh-sm p-3 fs-1" style="background: #CE2029">
      Stances on Issues
    </h1>
    <div
      class="
        row
        d-flex
        m-2
        justify-content-evenly
        row-cols-1 row-cols-md-2 row-cols-lg-4
        mb-3
      "
    >
    <template v-for="stance in stances" :key="stance.id">
        <StanceCard :stance="stance" class="col"></StanceCard>
    </template>
    
    </div>
  </div>
</template>

<script>
import StanceCard from "./StanceCard.vue";
export default {
  components: {
    StanceCard,
  },
  props: {
    stances:{
      type:Object,
    },
  },
  
};
</script>

<style lang=""></style>
