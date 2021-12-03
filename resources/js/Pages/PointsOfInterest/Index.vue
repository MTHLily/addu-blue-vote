<template>
  <Head title="Points of Interest"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column h-100 w-75 mx-auto">
      <GMapMap
        :zoom="16"
        :center="center"
        :options="gMapOptions"
        ref="gMapRef"
        map-type-id="hybrid"
        style="width: 100%; height: clamp(200px, 50vh, 800px)"
      >
        <GMapMarker
          v-for="m in markers"
          :key="m.position.lat"
          :icon="m.icon"
          :position="m.position"
        >
        </GMapMarker>
      </GMapMap>
      <BlueVoteTable
        title="Points of Interest"
        :columns="tableColumns"
        :items="pois"
      >
        <template #location="{ item }">
          <td>{{ item.location.name }}</td>
        </template>
        <template #type="{ item }">
          {{ item.type.type }}
        </template>
        <template #image="{ item }">
          <td>
            <a
              v-show="item.image_preview_url"
              :href="`/${item.image_preview_url}`"
              ><i class="bi bi-image"></i
            ></a>
          </td>
        </template>
        <template #actions="{ item }">
          <td>
            <div class="btn-group" role="group">
              <button
                type="button"
                class="btn btn-secondary"
                @click="setCenter(item.longitude, item.latitude)"
              >
                <i class="bi bi-zoom-in"></i>
              </button>
              <Link :href="route('poi.edit', item.id)" class="btn btn-info">
                <i class="bi bi-pencil-square"></i>
              </Link>
              <Link
                as="button"
                method="delete"
                :href="route('poi.destroy', item.id)"
                type="button"
                class="btn btn-danger"
              >
                <i class="bi bi-trash"></i>
              </Link>
            </div>
          </td>
        </template>
        <template #footer>
          <td>
            <Link :href="route('poi.create')" class="btn btn-primary">Add</Link>
          </td>
        </template>
      </BlueVoteTable>
    </div>
  </DashboardLayout>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import { Link, Head } from "@inertiajs/inertia-vue3";
import BlueVoteTable from "../../Components/BlueVoteTable.vue";
import { watch } from "@vue/runtime-core";
import marked from "marked";

export default {
  components: {
    DashboardLayout,
    BlueVoteTable,
    Link,
    Head,
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

  setup(props, context) {
    const center = ref({ lat: 7.071250196247246, lng: 125.61315274255003 });
    const gMapRef = ref();
    const gMapOptions = ref({
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: true,
      streetViewControl: false,
      rotateControl: true,
      fullscreenControl: true,
      scrollwheel: true,
    });
    const markerFilter = ref(0);

    const markers = computed(() => {
      if (props.pois)
        return props.pois.map((poi) => {
          return {
            position: {
              lat: parseFloat(poi.latitude),
              lng: parseFloat(poi.longitude),
            },
            icon: {
              url: "/svg/map_marker.svg?color=" + poi.location.color.slice(1),
            },
          };
        });
      else return [];
    });

    const clickHandler = (event) => {
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
      if (markers.length != 0) {
        if (markerFilter.value == 0) return markers;
        if (markerFilter.value == 1) return markers.slice(0, 2);
        else return markers.slice(3);
      } else return [];
    });

    const setCenter = (lng, lat) => {
      gMapRef.value.$mapPromise.then((gmap) => {
        gmap.panTo({ lat: parseFloat(lat), lng: parseFloat(lng) });
      });
    };

    const convertMarkdown = (markedown) => {
      return marked(markedown);
    };

    const tableColumns = ref([
      {
        label: "Name",
        value: "name",
      },
      {
        label: "Description",
        value: "description",
      },
      {
        label: "Type",
        value: "type",
        slotName: "type",
      },
      {
        label: "Location",
        value: "id",
        slotName: "location",
      },
      {
        label: "Image",
        value: "image_url",
        slotName: "image",
      },
    ]);

    return {
      center,
      gMapRef,
      gMapOptions,
      markers,
      markerFilter,
      filteredMarkers,
      setCenter,
      convertMarkdown,
      tableColumns,
    };
  },
};
</script>

<style></style>
