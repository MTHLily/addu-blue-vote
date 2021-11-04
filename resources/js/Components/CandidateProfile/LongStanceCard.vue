<template lang="">
  <div
    class="card text-white mb-3"
    style="max-width: 100%; background-color: #bf2234"
  >
    <div class="card-header border-0 text-center text-uppercase fw-bold lh-sm p-3 fs-1" style="background: #bf2234">
      {{ stance.cardTitle }}
    </div>
    <div
      class="
        row
        col
        d-flex
        m-2
        justify-content-evenly
        row-cols-1 row-cols-md-6 row-cols-lg-12
      "
    >
    <div >
      <StanceCard class="col-12"></StanceCard>
    </div>
    <div >
      <StanceCard class="col-12"></StanceCard>
    </div>
    <div >
      <StanceCard class="col-12"></StanceCard>
    </div>
    <div >
      <StanceCard class="col-12"></StanceCard>
    </div>
      <!-- <StanceCard></StanceCard>
      <StanceCard></StanceCard>
      <StanceCard></StanceCard> -->
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
  },
};
</script>
<style lang=""></style>
