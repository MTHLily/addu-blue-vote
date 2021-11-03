<template>
  <!-- <div class="row text-primary align-self-center"> -->
  <div class="row g-0 mb-3">
    <div class="col-12 col-md-4">
      <img
        :src="`${candidate.image}`"
        class="img-fluid rounded-start"
        alt="..."
      />
    </div>
    <div class="col-12 col-md-8">
      <div class="container">
        <h1 class="fw-bold lh-sm">{{ candidate.name }}</h1>
        <h4 class="text-muted">{{ candidate.partylist }}</h4>
        <!-- Convert to badge -->
        <span class="badge text-white fw-bold lh-sm" style="border-radius: 20px; background-color: #faa728">
          {{ candidate.position }}
        </span>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    candidate: {
      type: Object,
      default: () => ({
        name: "Default name",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        partylist: "Default partylist",
        position: "Default Position",
      }),
    },
  },
};
</script>

<style lang=""></style>
