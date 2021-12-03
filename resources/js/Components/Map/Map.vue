<template>
  <div class="modal" tabindex="-1" ref="mapCardInfoModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <MapCard :poi="selectedPoI"></MapCard>
      </div>
    </div>
  </div>

  <div class="map container" id="map" :attrs="$attrs">
    <div class="d-flex flex-column">
      <h2 class="text-primary text-center p-3 fw-bolder">
        Voters Registration Sites
      </h2>
      <div class="row">
        <!-- map -->
        <div class="map--container">
          <GMapMap
            :zoom="mapOptions.zoom"
            :center="mapOptions.center"
            :options="mapOptions.opts"
            ref="gMapRef"
            map-type-id="satellite"
            style="width: 100%; height: clamp(200px, 80vh, 800px)"
          >
            <GMapMarker
              v-for="m in filteredMarkers"
              :key="m.position.lat"
              :position="m.position"
              :icon="m.icon"
              :clickable="true"
              @click="handleMarkerClicked(m)"
            >
            </GMapMarker>
            <GMapMarker
              v-show="userLocation"
              :position="userLocation"
            ></GMapMarker>
          </GMapMap>
          <div ref="mapTopLeft">
            <n-tree-select
              class="ms-2"
              style="max-width: 300px"
              placeholder="Filter Locations..."
              multiple
              cascade
              checkable
              :options="filterOptions"
              v-model:value="filteredLocationIds"
            ></n-tree-select>
            <div class="dropdown ms-2 mt-2">
              <button
                class="btn btn-light dropdown-toggle"
                type="button"
                id="districtDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{
                  filteredDistrict
                    ? filteredDistrict.name
                    : "Filter Province..."
                }}
              </button>
              <ul class="dropdown-menu" aria-labelledby="districtDropdown">
                <li>
                  <a
                    class="dropdown-item"
                    href="#map"
                    @click="filteredDistrict = null"
                    >Clear filter</a
                  >
                </li>
                <li v-for="district in districts" :key="district.id">
                  <a
                    class="dropdown-item"
                    href="#map"
                    @click="handleDistrictFilter(district)"
                    >{{ district.name }}</a
                  >
                </li>
              </ul>
            </div>
            <!-- legend -->
          </div>
          <div ref="mapTopRight">
            <div
              class="
                d-flex
                flex-column
                justify-content-end
                align-items-end
                gap-2
              "
            >
              <div class="w-100">
                <DistrictLegend :districts="districts"></DistrictLegend>
              </div>
            </div>
          </div>
          <div ref="mapBottomRight">
            <button class="btn btn-light me-2" @click="handleUserPosition">
              <i class="bi bi-search"></i>
            </button>
          </div>
          <pre>{{ filteredLocationIds }}</pre>
          <div class="mt-2">
            <MapStack
              v-if="stack"
              :locationTree="locationTree"
              :pois="filteredPois"
              :districts="filteredDistrict ? [filteredDistrict] : districts"
              @poi-clicked="handlePoiClicked"
              @district-clicked="handleDistrictClicked"
            ></MapStack>
            <MapCarousel
              v-else
              :pois="filteredPois"
              @poi-clicked="handlePoiClicked"
              @district-clicked="handleDistrictClicked"
            ></MapCarousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DistrictLegend from "./DistrictLegend.vue";
import MapCarousel from "./MapCarousel.vue";
import MapStack from "./MapStack.vue";
import MapCard from "./MapCard.vue";
import { Modal } from "bootstrap";
import { NTreeSelect } from "naive-ui";

export default {
  components: {
    DistrictLegend,
    MapCarousel,
    MapCard,
    MapStack,
    NTreeSelect,
  },
  props: {
    districts: {
      type: Array,
      default: [],
    },
    registrationSites: {
      type: Array,
      default: [],
    },
    stack: {
      type: Boolean,
      default: false,
    },
    locations: Array,
    locationTree: Array,
  },
  data: () => ({
    filteredLocationIds: [],
    mapOptions: {
      center: { lat: 7.071250196247246, lng: 125.61315274255003 },
      zoom: 16,
      opts: {
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: true,
        fullscreenControl: true,
      },
    },
    filterDistrictId: null,
    filteredDistrict: null,
    poiInfoModal: null,
    selectedPoI: null,
    userLocation: null,
  }),
  computed: {
    mapMarkers() {
      return this.registrationSites.map((site) => ({
        ...site,
        position: {
          lat: parseFloat(site.latitude),
          lng: parseFloat(site.longitude),
        },
        icon: {
          url: "/svg/map_marker.svg?color=" + site.location.color.slice(1),
        },
      }));
    },
    filteredMarkers() {
      if (this.filteredDistrict == null) return this.mapMarkers;
      return this.mapMarkers.filter(
        (marker) => marker.district.id == this.filteredDistrict.id
      );
    },
    filteredPois() {
      if (this.filteredDistrict == null) return this.registrationSites;
      return this.registrationSites.filter(
        (site) => site.location_id == this.filteredDistrict.id
      );
    },
    filterOptions() {
      return this.locationTree.map((region) => ({
        key: region.id,
        label: region.name,
        children: region.children.map((province) => ({
          key: province.id,
          label: province.name,
        })),
      }));
    },
  },
  methods: {
    handlePoiClicked(event) {
      document.getElementById("map").scrollIntoView();
      this.$refs.gMapRef.$mapPromise.then((gmap) => {
        gmap.panTo({
          lat: parseFloat(event.latitude),
          lng: parseFloat(event.longitude),
        });
        this.mapOptions.zoom = 16;
      });
    },
    handleMarkerClicked(event) {
      document.getElementById("map").scrollIntoView();
      this.$refs.gMapRef.$mapPromise.then((gmap) => {
        gmap.panTo({
          lat: parseFloat(event.position.lat),
          lng: parseFloat(event.position.lng),
        });
        this.mapOptions.zoom = 16;
      });
      this.selectedPoI = event;
      this.poiInfoModal.show();
    },
    handleDistrictClicked(event) {
      document.getElementById("map").scrollIntoView();
      this.$refs.gMapRef.$mapPromise.then((gmap) => {
        gmap.panTo({
          lat: parseFloat(event.latitude),
          lng: parseFloat(event.longitude),
        });
        this.mapOptions.zoom = 10;
      });
    },
    handleDistrictFilter(district) {
      if (district != null) {
        this.filteredDistrict = district;
        this.handleDistrictClicked(district);
      } else this.filteredDistrict = null;
    },
    handleUserPosition() {
      document.getElementById("map").scrollIntoView();
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            this.$refs.gMapRef.$mapPromise.then((gmap) => {
              gmap.panTo(this.userLocation);
            });
          },
          () => {
            alert("Error in getting your position");
          }
        );
      } else {
        alert("Browser does not support Geolocation");
      }
    },
  },
  created() {
    this.selectedPoI = this.registrationSites[0];
  },
  mounted() {
    this.$refs.gMapRef.$mapPromise.then((gmap) => {
      gmap.controls[google.maps.ControlPosition.LEFT_TOP].push(
        this.$refs.mapTopLeft
      );
      gmap.controls[google.maps.ControlPosition.RIGHT_TOP].push(
        this.$refs.mapTopRight
      );
      gmap.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
        this.$refs.mapBottomRight
      );
    });
    this.poiInfoModal = new Modal(this.$refs.mapCardInfoModal);
  },
};
</script>

<style scoped>
.map--container {
  position: relative;
}

.map--top-left {
  position: absolute;
  z-index: 11;
  top: 1em;
  left: 1em;
}

.map--top-right {
  position: absolute;
  z-index: 11;
  top: 3.5em;
  right: 1em;
}

.map--bottom-center {
  position: absolute;
  z-index: 11;
  bottom: 0;
}
</style>
