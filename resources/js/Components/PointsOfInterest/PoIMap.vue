<template>
  <div class="map container" id="map">
    <div class="d-flex flex-column">
      <h2 class="text-primary text-center p-3 fw-bolder">
        Voters Registration Sites
      </h2>
      <div class="row">
        <div class="map--container">
          <GMapMap
            :zoom="mapOptions.zoom"
            :center="mapOptions.center"
            :options="mapOptions.opts"
            ref="gMapRef"
            map-type-id="satellite"
            style="width: 100%; height: clamp(200px, 80vh, 800px)"
          >
            <template v-for="location in flatLocations" :key="location.id">
              <PoIMapMarker
                v-for="site in location.sites"
                @marker-clicked="$emit('marker-clicked', $event)"
                :key="site.id"
                :site="site"
              ></PoIMapMarker>
            </template>
            <!-- <GMapMarker
                v-for="m in filteredMarkers"
                :key="m.position.lat"
                :position="m.position"
                :icon="m.icon"
                :clickable="true"
                @click="handleMarkerClicked(m)"
              >
              </GMapMarker> -->
            <!-- <GMapMarker
                v-show="userLocation"
                :position="userLocation"
              ></GMapMarker> -->
          </GMapMap>
          <div ref="mapTopLeft"></div>
          <div ref="mapTopRight">
            <div class="vw-100 me-2" style="max-width: 300px">
              <n-tree-select
                multiple
                cascade
                checkable
                filterable
                placeholder="Filter locations..."
                v-model:value="filteredLocationIds"
                :options="filterOptions"
                check-strategy="parent"
              />
            </div>
          </div>
          <div ref="mapBottomRight"></div>
          <pre></pre>
          <div class="mt-2"></div>
        </div>
      </div>
      <div>
        <template v-for="location in filteredLocations" :key="location.id">
          <PoIMapStackSection :location="location" :depth="3" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from "vue";
import { NTreeSelect } from "naive-ui";
import PoIMapStackSection from "./Partials/PoIMapStackSection.vue";
import PoIMapMarker from "./Partials/PoIMapMarker.vue";
import _ from "lodash";

export default defineComponent({
  components: { PoIMapMarker, PoIMapStackSection, NTreeSelect },
  props: {
    locations: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    /*
      Maps
    */
    const mapOptions = ref({
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
    });

    /*
      Filters
     */
    const filterLocationOptionsMap = (location) => ({
      key: location.id,
      label: location.name,
      children: location.children.map(filterLocationOptionsMap),
    });
    const filteredLocationIds = ref([]);
    const filterOptions = computed(() =>
      props.locations.map(filterLocationOptionsMap)
    );

    const locationChildrenIdsReduce = (carry = [], curr) => {
      carry.push(curr.id);
      if (curr.children.length)
        carry.push(...curr.children.reduce(locationChildrenIdsReduce, []));
      return carry;
    };

    const filterLocationMap = (location) => {
      if (filteredLocationIds.value.includes(location.id)) {
        return location;
      }
      if (
        filteredLocationIds.value.some((num) =>
          location.children.reduce(locationChildrenIdsReduce, []).includes(num)
        )
      ) {
        return {
          ...location,
          children: location.children
            .map(filterLocationMap)
            .filter((loc) => loc !== null),
        };
      }
      return null;
    };
    const filteredLocations = computed(() =>
      filteredLocationIds.value.length > 0
        ? props.locations.map(filterLocationMap).filter((loc) => loc !== null)
        : props.locations
    );

    const flattenLocations = (carry, curr) => {
      carry.push(curr);
      if (curr.children.length)
        carry.push(...curr.children.reduce(flattenLocations, []));

      return carry;
    };
    const flatLocations = computed(() => {
      return filteredLocations.value.reduce(flattenLocations, []);
    });

    /* 
    Map elements
     */
    const gMapRef = ref();
    const mapTopRight = ref();
    onMounted(() => {
      gMapRef.value.$mapPromise.then((gmap) => {
        // gmap.controls[google.maps.ControlPosition.LEFT_TOP].push(
        //   this.$refs.mapTopLeft
        // );
        gmap.controls[google.maps.ControlPosition.RIGHT_TOP].push(
          mapTopRight.value
        );
        // gmap.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
        //   this.$refs.mapBottomRight
        // );
      });
    });

    return {
      mapOptions,
      filteredLocationIds,
      filteredLocations,
      filterOptions,
      flatLocations,
      gMapRef,
      mapTopRight,
    };
  },
});
</script>
