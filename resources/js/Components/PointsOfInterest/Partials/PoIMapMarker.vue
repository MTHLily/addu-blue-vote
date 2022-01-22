<template>
  <GMapMarker
    :key="marker.position.lat"
    :position="marker.position"
    :icon="marker.icon"
    :clickable="true"
    @click="$emit('marker-clicked', location)"
  >
  </GMapMarker>
</template>

<script>
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    site: Object,
  },
  emits: ["marker-clicked"],
  setup(props) {
    const marker = computed(() => ({
      position: {
        lat: parseFloat(props.site.latitude),
        lng: parseFloat(props.site.longitude),
      },
      icon: {
        url: "/svg/map_marker.svg?color=" + props.site.location_color.slice(1),
      },
    }));
    return {
      marker,
    };
  },
});
</script>
