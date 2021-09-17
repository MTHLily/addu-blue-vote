<template>
  <div class="card p-3">
    <div class="d-flex align-items-center justify-content-center">
      <h5 class="m-0 flex-grow-1 text-center">Districts</h5>
      <button
        class="btn btn-sm btn-primary"
        type="button"
        @click="handleToggle"
      >
        <i
          class="bi"
          :class="{
            'bi-plus-lg': isCollapsed,
            'bi-dash-lg': !isCollapsed,
          }"
        ></i>
      </button>
    </div>
    <div class="collapse" ref="collapse">
      <div v-for="district in districts" :key="district.id">
        <i class="bi bi-circle-fill" :style="`color: ${district.color}`"></i>
        {{ district.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { Collapse } from "bootstrap";
export default {
  props: {
    districts: {
      type: Array,
      default: [],
    },
  },
  data: () => ({
    collapse: null,
    isCollapsed: false,
  }),
  mounted() {
    this.collapse = new Collapse(this.$refs.collapse, {
      toggle: !this.isCollapsed,
    });
  },
  methods: {
    handleToggle() {
      this.isCollapsed = !this.isCollapsed;
      this.collapse.toggle(this.isCollapsed);
    },
  },
};
</script>

<style></style>
