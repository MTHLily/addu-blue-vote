<template>
  <!-- <div class="row text-primary align-self-center"> -->
  <div class="row g-0 mb-3">
    <div class="col-12 col-md-4">
      <img
        :src="
          candidate.profile_photo_url?.url
            ? candidate.profile_photo_url.url
            : 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png'
        "
        class="img-fluid rounded w-100"
        :alt="candidate.name"
      />
    </div>
    <div class="col-12 col-md-8 p-5 align-self-center">
      <div class="container d-flex flex-column h-100">
        <h1 class="fw-bold lh-sm text-uppercase text-primary fs-1">
          {{ candidate.name }}
        </h1>
        <div class="card-text text-muted fs-4 mb-3">
          {{ candidate.political_party?.name }}
        </div>
        <span
          class="badge py-2 px-3 fw-bold 1h-sm fs-6 w-50"
          style="background-color: #faa728; border-radius: 20px"
        >
          {{ candidate.running_position.name }}
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
