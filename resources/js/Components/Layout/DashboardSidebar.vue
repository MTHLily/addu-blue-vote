<template>
  <div
    class="d-flex flex-column min-h-screen"
    style="background-color: #ececec"
  >
    <Link :href="route('dashboard')" class="text-decoration-none"
      ><div
        class="container bg-white mx-auto mt-3 align-middle text-center p-3"
      >
        <img :src="image" width="60" height="30" />
        <span class="header text-primary align-middle fw-bolder ps-sm-3"
          >AdDU Blue Vote</span
        >
      </div></Link
    >
  </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";

export default {
  components: {
    Link,
  },
};
</script>

<style></style>
