<template lang="">
  <div
    class="card text-white mb-3"
    style="max-width: 100%; background-color: #CE2029"
  >
    <div class="card-header border-0 text-center text-uppercase fw-bold lh-sm p-3 fs-1" style="background: #CE2029">
      {{ stance.cardTitle }}
    </div>
    <div
      class="
        row
        col
        d-flex
        m-2
        justify-content-evenly
        row-cols-1 row-cols-md-2 row-cols-lg-4
        mb-3
      "
    >
    <template v-for="stance in candidate.stances" :key="stance.id">
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
    stance: {
      type: Object,
      default: () => ({
        cardTitle: "CANDIDATE’S STANCE ON ISSUES",
      }),
    },
    candidate:{
      type:Object,
    },
  },
  
};
</script>

<style lang=""></style>
