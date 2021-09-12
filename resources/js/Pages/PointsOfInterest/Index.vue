<template>
  <DashboardLayout>
    <div class="d-flex flex-column h-100">
      <!-- :click="clickHandler"
        @click="clickHandler" -->
      <GMapMap
        :zoom="16"
        :center="center"
        :options="gMapOptions"
        ref="gMapRef"
        map-type-id="terrain"
        class="w-100 vh-100"
      >
        <GMapMarker
          v-for="m in filteredMarkers"
          color="blue"
          :key="m.position.lat"
          :position="m.position"
        >
        </GMapMarker>
        <GMapPolygon :editable="true" :paths="paths" />
      </GMapMap>
      {{ markers }}
      <select class="custom-select" v-model="markerFilter">
        <option :value="0">0</option>
        <option :value="1">1</option>
        <option :value="2">2</option>
      </select>
      <pre>{{ markers }}</pre>
    </div>
  </DashboardLayout>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import { watch } from "@vue/runtime-core";

// function initializeMap(map) {
//   console.log(map);

//   map.event.addListener("click", (event) => {
//     console.log("MAP CLICKED!", event);
//   });

//   map.addEventListener("click", (event) => {
//     console.log("MAP CLICKED!", event);
//   });
// }

export default {
  components: {
    DashboardLayout,
  },

  setup() {
    const center = ref({ lat: 7.071250196247246, lng: 125.61315274255003 });
    const gMapRef = ref();
    const gMapOptions = ref({
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: false,
      rotateControl: true,
      fullscreenControl: true,
    });
    const markerFilter = ref(0);
    const markers = ref([
      { position: { lat: 7.071250196247246, lng: 125.61315274255003 } },
      { position: { lat: 7.072266060926651, lng: 125.61053490655148 } },
      { position: { lat: 7.071946644596355, lng: 125.61077094094479 } },
      { position: { lat: 7.072180883260174, lng: 125.61087822930538 } },
      { position: { lat: 7.072681301825742, lng: 125.61186528222287 } },
      { position: { lat: 7.072840777778492, lng: 125.61265921609127 } },
    ]);

    const clickHandler = (event) => {
      console.log(event);
      console.log(event.latLng.lat(), event.latLng.lng());
      if (!event.placeId)
        markers.value.push({
          position: { lat: event.latLng.lat(), lng: event.latLng.lng() },
        });
    };

    watch(gMapRef, (googleMap) => {
      if (googleMap) {
        googleMap.$mapPromise.then((map) => {
          map.addListener("click", clickHandler);
        });
      }
    });

    const filteredMarkers = computed(() => {
      if (markers) {
        if (markerFilter.value == 0) return markers.value;
        if (markerFilter.value == 1) return markers.value.slice(0, 2);
        else return markers.value.slice(3);
      } else return [];
    });

    return {
      center,
      gMapRef,
      gMapOptions,
      markers,
      markerFilter,
      filteredMarkers,
    };
  },
};
</script>

<style></style>
