<template lang="">
  <div
    class="card text-white mb-3"
    style="max-width: 100%; background-color: #bf2234"
  >
    <div class="card-header border-0 text-center fw-bold lh-sm" style="background: #bf2234">
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
      <StanceCard></StanceCard>
      <StanceCard></StanceCard>
      <StanceCard></StanceCard>
      <StanceCard></StanceCard>
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
