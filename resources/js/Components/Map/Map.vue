<template>
  <div class="map container" id="map">
    <div class="d-flex flex-column">
      <h2 class="text-primary text-center p-3 fw-bolder">
        Voters Registration Sites
      </h2>
      <div class="row">
        <!-- map -->
        <div class="map--container">
          <GMapMap
            :zoom="16"
            :center="mapOptions.center"
            :options="mapOptions.opts"
            ref="gMapRef"
            map-type-id="terrain"
            style="width: 100%; height: clamp(200px, 80vh, 800px)"
          >
            <GMapMarker
              v-for="m in filteredMarkers"
              :key="m.position.lat"
              :position="m.position"
              :icon="m.icon"
            >
            </GMapMarker>
          </GMapMap>
          <div ref="mapTopLeft">
            <div class="dropdown ms-2 mt-2">
              <button
                class="btn btn-light dropdown-toggle"
                type="button"
                id="districtDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ filteredDistrict }}
              </button>
              <ul class="dropdown-menu" aria-labelledby="districtDropdown">
                <li>
                  <a
                    class="dropdown-item"
                    href="#map"
                    @click="filterDistrictId = null"
                    >Clear filter</a
                  >
                </li>
                <li v-for="district in districts" :key="district.id">
                  <a
                    class="dropdown-item"
                    href="#map"
                    @click="filterDistrictId = district.id"
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
              <div>
                <input
                  class="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <div class="w-100">
                <DistrictLegend :districts="districts"></DistrictLegend>
              </div>
            </div>
          </div>
          <div class="mt-2">
            <MapCarousel
              :pois="filteredPois"
              @poi-clicked="handlePoiClicked"
              @district-clicked="handlePoiClicked"
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
export default {
  components: {
    DistrictLegend,
    MapCarousel,
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
  },
  data: () => ({
    mapOptions: {
      center: { lat: 7.071250196247246, lng: 125.61315274255003 },
      opts: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: true,
        fullscreenControl: true,
      },
    },
    filterDistrictId: null,
  }),
  computed: {
    filteredDistrict() {
      const district = this.districts.find(
        (district) => district.id == this.filterDistrictId
      );
      if (district) return district.name;
      else return "Filter districts...";
    },
    mapMarkers() {
      return this.registrationSites.map((site) => ({
        district: site.district.id,
        position: {
          lat: parseFloat(site.latitude),
          lng: parseFloat(site.longitude),
        },
        icon: {
          url: "/svg/map_marker.svg?color=" + site.district.color.slice(1),
        },
      }));
    },
    filteredMarkers() {
      if (this.filterDistrictId == null) return this.mapMarkers;
      return this.mapMarkers.filter(
        (marker) => marker.district == this.filterDistrictId
      );
    },
    filteredPois() {
      if (this.filterDistrictId == null) return this.registrationSites;
      return this.registrationSites.filter(
        (site) => site.district_id == this.filterDistrictId
      );
    },
  },
  methods: {
    handlePoiClicked(event) {
      console.log(event);
      this.$refs.gMapRef.$mapPromise.then((gmap) => {
        gmap.panTo({
          lat: parseFloat(event.latitude),
          lng: parseFloat(event.longitude),
        });
      });
    },
  },
  mounted() {
    this.$refs.gMapRef.$mapPromise.then((gmap) => {
      gmap.controls[google.maps.ControlPosition.LEFT_TOP].push(
        this.$refs.mapTopLeft
      );
      gmap.controls[google.maps.ControlPosition.RIGHT_TOP].push(
        this.$refs.mapTopRight
      );
    });
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
