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
        style="width: 100%; height: 40vh"
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
      <div class="navbar navbar-dark bg-primary rounded shadow mb-4">
        <div class="container-fluid">
          <ul class="navbar-nav p-2">
            <li class="nav-item">
              <Link :href="route('districts.create')" class="nav-link"
                >Add District</Link
              >
            </li>
          </ul>
        </div>
      </div>
      <table class="table w-100">
        <thead>
          <th scope="col">District</th>
          <th scope="col">Description</th>
          <th scope="col">Color</th>
          <th scope="col">Actions</th>
        </thead>
        <tbody>
          <tr v-for="district in districts" :key="district.id">
            <td>{{ district.name }}</td>
            <td>{{ district.description }}</td>
            <td>
              <i
                class="bi bi-circle-fill"
                :style="`color: ${district.color}`"
              ></i>
              {{ district.color }}
            </td>
            <td>
              <form @submit.prevent="submitDelete(district.id)">
                <div class="btn-group">
                  <Link
                    :href="route('districts.edit', district.id)"
                    class="btn btn-primary"
                  >
                    <i class="bi-pencil-square"></i>
                  </Link>
                  <button class="btn btn-danger">
                    <i class="bi-trash"></i>
                  </button>
                </div>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </DashboardLayout>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import { watch } from "@vue/runtime-core";

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
