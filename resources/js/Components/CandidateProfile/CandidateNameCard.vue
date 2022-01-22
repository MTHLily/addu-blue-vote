<template>
  <div class="m-3 text-primary border rounded bg-white">
    <div class="row g-0">
      <div class="col col-md-4">
        <img
          :src="
            candidate.media.length > 0
              ? candidate.media[0].original_url
              : 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png'
          "
          class="img-fluid rounded-start"
          :alt="candidate.name"
        />
      </div>
      <div class="col col-md-8">
        <div class="card-body d-flex flex-column h-100">
          <h5 class="card-title text-uppercase fw-bold lh-sm">
            {{ candidate.name }}
          </h5>
          <div class="card-text text-muted flex-grow-1">
            {{ candidate.political_party.name }}
          </div>
          <div>
            <div class="d-flex justify-content-end">
              <button
                type="button"
                class="btn btn-primary align-self-end"
                style="border-radius: 20px"
              >
                <Link
                  :href="route('candidate-profiles.show', candidate.slug)"
                  target="_blank"
                  class="text-white text-decoration-none"
                >
                  KNOW MORE
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div class="card-action"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { Link } from "@inertiajs/inertia-vue3";

export default {
  components: { Link },
  props: {
    candidate: {
      type: Object,
      default: () => ({
        name: "Default Name",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde? ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        partylist: "Default Partylist",
        refProfile: "1",
      }),
    },
  },
};
</script>
<style lang=""></style>
