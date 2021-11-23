<template>
  <div class="container">
    <h1>{{ location.type?.name }}: {{ location.name }}</h1>
    <pre style="height: 400px" class="overflow-auto">
      {{ location }}
    </pre>

    <template v-if="location.parent">
      <h2>Parent</h2>
      <Link
        :href="
          route(
            getLocationRoute(location.parent),
            getLocationBreadCrumbs(location.parent)
          )
        "
      >
        {{ location.parent.name }}
      </Link>
    </template>

    <h2>Children</h2>
    <ul>
      <template v-for="child in location.children" :key="child.id">
        <li>
          <Link
            :href="
              route(getLocationRoute(child), getLocationBreadCrumbs(child))
            "
            >{{ child.name }}</Link
          >
        </li>
      </template>
    </ul>

    <h1>Breadcrumbs</h1>
    <pre style="height: 500px" class="overflow-auto">
      {{ breadcrumbs }}
    </pre>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
  components: { Link },
  props: {
    location: Object,
    breadcrumbs: {
      type: Array,
      default: [],
    },
  },
  methods: {
    // Returns the route for the location
    getLocationRoute(location) {
      // Check the location's type id
      if (location.location_type_id === 1) return "locations.region.show";
      if (location.location_type_id === 2) return "locations.province.show";
      if (location.location_type_id === 3) return "locations.district.show";
      if (location.location_type_id === 4) return "locations.city.show";
    },

    getLocationBreadCrumbs(location) {
      const breadcrumbs = {};
      switch (location.location_type_id) {
        case 1:
          breadcrumbs.region = location.id;
          break;
        case 2:
          breadcrumbs.province = location.id;
          break;
        case 3:
          breadcrumbs.district = location.id;
          break;
        case 4:
          breadcrumbs.city = location.id;
          break;
      }
      this.breadcrumbs.forEach((crumb) => {
        switch (crumb.location_type_id) {
          case 1:
            breadcrumbs.region = crumb.id;
            break;
          case 2:
            breadcrumbs.province = crumb.id;
            break;
          case 3:
            breadcrumbs.district = crumb.id;
            break;
          case 4:
            breadcrumbs.city = crumb.id;
            break;
        }
      });
      return breadcrumbs;
    },
  },
});
</script>

<style></style>
