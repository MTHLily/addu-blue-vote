<template>
  <GMapMap
    :zoom="zoom"
    :center="center"
    :options="gMapOptions"
    ref="gMapRef"
    map-type-id="terrain"
    style="width: 100%; height: clamp(200px, 50vh, 800px)"
  >
    <GMapMarker :position="marker"> </GMapMarker>
  </GMapMap>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
export default {
  props: {
    longitude: {
      type: Number,
      default: 125.61315274255003,
    },
    latitude: {
      type: Number,
      default: 7.071250196247246,
    },
    zoom: {
      type: Number,
      default: 16,
    },
    minZoom: {
      type: Number,
      default: null,
    },
  },
  setup(props, context) {
    console.log("MAP PICKER PROPS: ", props);
    const center = ref({ lat: 7.071250196247246, lng: 125.61315274255003 });
    const gMapRef = ref(null);
    const gMapOptions = ref({
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: false,
      rotateControl: true,
      fullscreenControl: true,
      scrollwheel: true,
    });
    const markerFilter = ref(0);
    const marker = computed(() => {
      return { lat: props.latitude, lng: props.longitude };
    });

    const clickHandler = (event) => {
      context.emit("update:longitude", event.latLng.lng());
      context.emit("update:latitude", event.latLng.lat());
      console.log(event);
      console.log(event.latLng.lat(), event.latLng.lng());
    };

    watch(gMapRef, (googleMap) => {
      if (googleMap) {
        googleMap.$mapPromise.then((map) => {
          map.addListener("click", clickHandler);
        });
      }
    });

    return {
      center,
      gMapRef,
      gMapOptions,
      marker,
      markerFilter,
    };
  },
};
</script>

<style></style>
