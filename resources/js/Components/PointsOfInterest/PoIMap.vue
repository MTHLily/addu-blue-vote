<template>
  <div class="d-flex flex-column" id="map">
    <div class="flex-grow-1">
      <GMapMap
        class="poi-map"
        :ref="
          (ref) => {
            refs.gMapRef.value = ref;
          }
        "
        :zoom="mapOptions.zoom"
        :center="mapOptions.center"
        :options="mapOptions.opts"
        map-type-id="satellite"
      >
        <template v-for="location in flatLocations" :key="location.id">
          <PoIMapMarker
            v-for="site in location.sites"
            @marker-clicked="pan.panToSite"
            :key="site.id"
            :site="site"
          ></PoIMapMarker>
        </template>
      </GMapMap>
    </div>
    <div v-if="!noStack">
      <template v-for="location in filteredLocations" :key="location.id">
        <PoIMapStackSection
          @site-clicked="pan.panToSite"
          @location-clicked="pan.panToLocation"
          :site-label="siteLabel"
          :location="location"
          :depth="startingDepth"
          :heading="startingHeading"
        />
      </template>
    </div>
    <PoIModal v-model:show="showModal" :site="currentSite" />
    <div ref="mapTopLeft"></div>
    <div :ref="(ref) => (refs.mapTopRight.value = ref)">
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
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from "vue";
import { NTreeSelect } from "naive-ui";
import PoIMapStackSection from "./Partials/PoIMapStackSection.vue";
import PoIMapMarker from "./Partials/PoIMapMarker.vue";
import _ from "lodash";
import PoIModal from "./PoIModal.vue";

export default defineComponent({
  components: { PoIMapMarker, PoIMapStackSection, NTreeSelect, PoIModal },
  props: {
    locations: {
      type: Object,
      required: true,
    },
    startingHeading: {
      type: Number,
      default: 1,
    },
    startingDepth: {
      type: Number,
      default: 1,
    },
    siteLabel: {
      type: String,
      default: "Sites",
    },
    noStack: {
      type: Boolean,
      default: false,
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

    /**
     * Modal
     */
    const currentSite = ref(null);
    const showModal = ref(false);

    /**
    Pan Functions
     */
    const pan = ({ lat, lng }, zoom) => {
      document.getElementById("map").scrollIntoView();
      gMapRef.value.$mapPromise.then((gmap) => {
        gmap.panTo({
          lat: parseFloat(lat),
          lng: parseFloat(lng),
        });
        mapOptions.value.zoom = zoom;
      });
    };
    const panToSite = (site) => {
      pan({ lat: site.latitude, lng: site.longitude }, 16);
      showModal.value = true;
      currentSite.value = site;
    };
    const panToLocation = (location_id) => {
      const location = flatLocations.value.find(
        (loc) => loc.id === location_id
      );
      console.log(location);
      pan({ lat: location.latitude, lng: location.longitude }, 10);
    };

    return {
      mapOptions,
      filteredLocationIds,
      filteredLocations,
      filterOptions,
      flatLocations,
      refs: {
        gMapRef,
        mapTopRight,
      },
      pan: {
        panToLocation,
        panToSite,
      },
      currentSite,
      showModal,
    };
  },
});
</script>
