<template>
  <header
    class="
      navbar
      sticky-top
      navbar-dark
      bg-primary
      navbar-expand-md
      rounded-pill
    "
    style="margin: 2%; width: 95%"
  >
    <div class="container-md">
      <slot name="before-logo"> </slot>
      <Link class="navbar-brand w-50" href="/">
        <img :src="logo" class="navbar-logo" />
      </Link>
      <slot name="after-logo">
        <button
          class="navbar-toggler"
          @click="navbarCollapse.toggle()"
          type="button"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </slot>
      <div class="collapse navbar-collapse flex-shrink-1" ref="navbarCollapse">
        <slot name="collapse-content"></slot>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import logo from "@/Components/assets/logo.png";
import { Link } from "@inertiajs/inertia-vue3";
import { Collapse } from "bootstrap";

export default defineComponent({
  components: {
    Link,
  },
  data: () => ({
    logo: logo,
    navbarCollapse: null,
  }),

  mounted() {
    this.navbarCollapse = new Collapse(this.$refs.navbarCollapse, {
      toggle: false,
    });
  },
});
</script>

<style>
.navbar-logo {
  max-height: 50px;
  max-width: 80%;
}
</style>
