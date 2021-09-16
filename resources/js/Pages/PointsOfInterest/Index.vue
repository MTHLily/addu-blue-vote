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
      <BlueVoteTable title="Points of Interest" :columns="6">
        <template #header>
          <tr class="bg-info">
            <th scrope="col">Name</th>
            <th scrope="col">Description</th>
            <th scrope="col">District</th>
            <th scrope="col">Type</th>
            <th scrope="col">Image Preview</th>
            <th scrope="col">Actions</th>
          </tr>
        </template>
        <template #body>
          <tr v-for="poi in pois" :key="poi.key">
            <td>{{ poi.name }}</td>
            <td>{{ poi.description }}</td>
            <td>{{ poi.district_id }}</td>
            <td>{{ poi.point_of_interest_type_id }}</td>
            <td>
              <a
                v-show="poi.image_preview_url"
                :href="`/${poi.image_preview_url}`"
                ><i class="bi bi-image"></i
              ></a>
            </td>
          </tr>
        </template>
        <template #footer>
          <tr>
            <td>
              <Link :href="route('poi.create')" class="btn btn-primary"
                >Add</Link
              >
            </td>
            <td colspan="5">
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#">Previous</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </td>
          </tr>
        </template>
      </BlueVoteTable>
    </div>
  </DashboardLayout>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";
import BlueVoteTable from "../../Components/BlueVoteTable.vue";
import { watch } from "@vue/runtime-core";

export default {
  components: {
    DashboardLayout,
    BlueVoteTable,
    Link,
  },

  props: {
    districts: {
      type: Array,
      default: [],
    },
    poi_types: {
      type: Array,
      default: [],
    },
    pois: {
      type: Array,
      default: [],
    },
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
