<template>
  <Head title="Points of Interest"></Head>

  <div
    class="position-fixed mt-4 start-50 translate-middle"
    style="z-index: 11"
  >
    <div
      class="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      ref="messageToastDiv"
    >
      <div class="toast-header">
        <i class="me-1" :class="toastMessage.icon"></i>
        <strong class="me-auto">{{ toastMessage.title }}</strong>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">{{ toastMessage.message }}</div>
    </div>
  </div>

  <DashboardLayout>
    <div class="d-flex flex-column h-100">
      <GMapMap
        :zoom="16"
        :center="center"
        :options="gMapOptions"
        ref="gMapRef"
        map-type-id="terrain"
        style="width: 100%; height: clamp(200px, 50vh, 800px)"
      >
        <GMapMarker
          v-for="m in markers"
          :key="m.position.lat"
          :position="m.position"
        >
        </GMapMarker>
      </GMapMap>
      <BlueVoteTable title="Points of Interest" :columns="6">
        <template #header>
          <tr class="bg-info">
            <th scrope="col">Name</th>
            <th scrope="col" style="width: 10%">Description</th>
            <th scrope="col">District</th>
            <th scrope="col">Type</th>
            <th scrope="col">Image Preview</th>
            <th scrope="col">Actions</th>
          </tr>
        </template>
        <template #body>
          <tr v-for="poi in pois" :key="poi.key">
            <td>{{ poi.name }}</td>
            <td>
              <div
                class="d-block text-truncate"
                v-html="convertMarkdown(poi.description)"
              ></div>
            </td>
            <td>{{ poi.district.name }}</td>
            <td>{{ poi.type }}</td>
            <td>
              <a
                v-show="poi.image_preview_url"
                :href="`/${poi.image_preview_url}`"
                ><i class="bi bi-image"></i
              ></a>
            </td>
            <td>
              <div class="btn-group" role="group">
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="setCenter(poi.longitude, poi.latitude)"
                >
                  <i class="bi bi-zoom-in"></i>
                </button>
                <Link :href="route('poi.edit', poi.id)" class="btn btn-info">
                  <i class="bi bi-pencil-square"></i>
                </Link>
                <Link
                  as="button"
                  method="delete"
                  :href="route('poi.destroy', poi.id)"
                  type="button"
                  class="btn btn-danger"
                >
                  <i class="bi bi-trash"></i>
                </Link>
              </div>
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
import { Link, Head } from "@inertiajs/inertia-vue3";
import BlueVoteTable from "../../Components/BlueVoteTable.vue";
import { watch } from "@vue/runtime-core";
import { Toast } from "bootstrap";
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
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: false,
      rotateControl: true,
      fullscreenControl: true,
    });
    const markerFilter = ref(0);
    const messageToastDiv = ref(null);
    const messageToast = ref(null);

    const markers = computed(() => {
      if (props.pois)
        return props.pois.map((poi) => {
          return {
            position: {
              lat: parseFloat(poi.latitude),
              lng: parseFloat(poi.longitude),
            },
          };
        });
      else return [];
    });

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

    watch(messageToastDiv, (toast) => {
      messageToast.value = new Toast(toast);
      if (
        context.attrs.flash.message !== null ||
        context.attrs.flash.success !== null
      )
        messageToast.value.show();
    });

    watch(
      () => context.attrs.flash,
      (flash) => {
        console.log("FLASH:", flash);
        if (flash.message == null && flash.success == null) return;
        messageToast.value.show();
      }
    );

    const filteredMarkers = computed(() => {
      console.log("THE MARKERS: ", markers);
      if (markers.length != 0) {
        if (markerFilter.value == 0) return markers;
        if (markerFilter.value == 1) return markers.slice(0, 2);
        else return markers.slice(3);
      } else return [];
    });

    const toastMessage = computed(() => {
      // console.log(context);
      return {
        icon: context.attrs.flash.success
          ? "bi-check-circle text-success"
          : "bi-exclamation-circle text-warning",
        title: context.attrs.flash.success ? "Success" : "Warning",
        message: context.attrs.flash.success || context.attrs.flash.message,
      };
    });

    const setCenter = (lng, lat) => {
      center.value = { lat: parseFloat(lat), lng: parseFloat(lng) };
    };

    const convertMarkdown = (markedown) => {
      return marked(markedown);
    };

    return {
      center,
      gMapRef,
      gMapOptions,
      markers,
      markerFilter,
      filteredMarkers,
      setCenter,
      toastMessage,
      messageToast,
      messageToastDiv,
      convertMarkdown,
    };
  },
};
</script>

<style></style>
