<template>
  <a
    :href="item.route ? route(item.route) : '#'"
    class="nav-link"
    :class="{
      active: item.active || active || expanded,
    }"
    :attrs="$attrs"
    @click="toggle"
  >
    <div class="d-flex gap-2 align-items-center">
      <div v-if="item.icon"><i :class="`bi ${item.icon} fs-4`"></i></div>
      <div>{{ item.title }}</div>
    </div>
  </a>
  <div v-if="item.items" class="collapse" ref="collapse">
    <div class="card card-body mr-1 p-2 pe-0">
      <ul class="nav nav-pills flex-column">
        <template v-for="child in item.items" :key="child.title">
          <DashboardSiderItem :item="child"></DashboardSiderItem>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import { Collapse } from "bootstrap";

function traverseObject(item) {
  console.log(" Looking at ", item.title, item.route, this.active);
  if (this.active == true) return;
  if (item.route === route().current()) {
    this.active = true;
    console.log("Active!", this.active);
  }
  if (item.items)
    item.items.forEach((child) => traverseObject(child, this.active));
}

export default defineComponent({
  name: "DashboardSiderItem",
  props: {
    item: {
      type: Object,
      default: () => ({
        title: "Default Title",
        route: "/",
      }),
    },
    head: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    collapse: null,
    active: false,
    expanded: false,
  }),
  mounted() {
    this.expanded = this.active = this.item.active;

    const traverseObject = (item) => {
      if (this.active == true) return;
      if (item.route === route().current()) this.active = true;
      if (item.items)
        item.items.forEach((child) => traverseObject(child, this.active));
    };
    traverseObject(this.item);

    if (this.$refs.collapse) {
      this.collapse = new Collapse(this.$refs.collapse, {
        toggle: this.active,
      });
    }
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded;
      if (this.collapse) this.collapse.toggle(this.expanded);
    },
  },
});
</script>

<style scoped>
.nav-link:hover,
.nav-link:focus {
  color: #dee2e6;
  background-color: #061b71;
}
</style>
