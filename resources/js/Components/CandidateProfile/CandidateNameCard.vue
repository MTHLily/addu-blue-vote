<template lang="">
  <div class="card mb-3 text-primary" style="max-width: 540px">
    <div class="row g-0">
      <div class="col col-md-4">
        <img
          :src="`${prof.img}`"
          class="img-fluid rounded-start"
          :alt="`${prof.name}`"
        />
      </div>
      <div class="col col-md-8">
        <div class="card-body d-flex flex-column h-100">
          <h5 class="card-title fw-bold lh-sm">{{ prof.name }}</h5>
          <div class="card-text text-muted flex-grow-1">
            {{ prof.partylist }}
          </div>
          <button
            type="button"
            class="btn btn-primary w-50 align-self-end"
            style="border-radius: 20px"
          >
            <a
              :href="`${prof.refProfile}`"
              target="_blank"
              class="text-white text-decoration-none"
            >
              KNOW MORE
            </a>
          </button>
        </div>
        <div class="card-action"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    prof: {
      type: Object,
      default: () => ({
        name: "Default Name",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde? ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        partylist: "Default Partylist",
        refProfile: "",
      }),
    },
  },
};
</script>
<style lang=""></style>
