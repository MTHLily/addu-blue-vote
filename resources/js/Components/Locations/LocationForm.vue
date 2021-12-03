<template>
  <div class="bg-white p-4 rounded">
    <div class="row row-cols-3">
      <div class="mb-3 p-3">
        <label for="locationName" class="form-label">Location Name</label>
        <input
          v-model="location.name"
          type="text"
          class="form-control"
          :class="{
            'is-invalid': location.errors.name,
          }"
          id="locationName"
          placeholder="Location Name"
        />
        <div class="invalid-feedback">{{ location.errors.name }}</div>
      </div>
      <div class="mb-3 p-3">
        <label for="locationSlug" class="form-label">Slug</label>
        <input
          v-model="location.slug"
          type="text"
          class="form-control"
          :class="{
            'is-invalid': location.errors.slug,
          }"
          id="locationSlug"
          placeholder="Slug"
        />
        <div class="invalid-feedback">{{ location.errors.slug }}</div>
      </div>
      <div class="mb-3 p-3">
        <label for="locationType" class="form-label">Type</label>
        <select
          v-model="location.location_type_id"
          class="form-select"
          :class="{
            'is-invalid': location.errors.location_type_id,
          }"
          id="locationType"
          placeholder="Location Name"
        >
          <option :value="null" disabled>Choose a type</option>
          <template v-for="type in types" :key="type.id">
            <option :value="type.id">{{ type.name }}</option>
          </template>
        </select>
        <div class="invalid-feedback">
          {{ location.errors.location_type_id }}
        </div>
      </div>
      <div class="mb-3 p-3">
        <label for="locationParent" class="form-label">Parent Location</label>
        <select
          v-model="location.parent_location_id"
          class="form-select"
          :class="{
            'is-invalid': location.errors.parent_location_id,
          }"
          :disabled="currentType ? !currentType.parent_type_id : false"
          id="locationParent"
          placeholder="Location Name"
        >
          <option :value="null" disabled>Choose a parent location</option>
          <template v-for="locs in parentLocations" :key="locs.id">
            <option :value="locs.id">{{ locs.name }}</option>
          </template>
        </select>
        <div class="invalid-feedback">
          {{ location.errors.parent_location_id }}
        </div>
      </div>
      <div class="mb-3 p-3 col">
        <label for="description" class="form-label">Description</label>
        <textarea
          id="description"
          cols="30"
          rows="4"
          class="form-control"
          :class="{
            'is-invalid': location.errors.name,
          }"
          v-model="location.description"
          placeholder="Description"
        ></textarea>
        <div class="invalid-feedback">{{ location.errors.description }}</div>
      </div>
      <div class="col">
        <div class="row mb-2">
          <label for="color" class="form-label">Color</label>
          <ColorPicker
            v-model:color="location.color"
            :class="{
              'is-invalid': location.errors.color,
            }"
          ></ColorPicker>
          <div class="invalid-feedback">{{ location.errors.color }}</div>
        </div>
        <div class="row">
          <label for="color" class="form-label">Image Upload</label>
          <FileUploader
            v-model:value="location.media"
            :class="{
              'is-invalid': location.errors['media.file'],
            }"
          ></FileUploader>
          <div class="invalid-feedback">
            {{ location.errors["media.file"] }}
          </div>
        </div>
      </div>
      <div class="mb-3 p-3 col-12">
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <label for="longitude" class="form-label">Longitude</label>
              <input
                v-model="location.longitude"
                type="text"
                class="form-control bg-white"
                :class="{
                  'is-invalid': location.errors.longitude,
                }"
                id="longitude"
                readonly
                placeholder="Longitude"
              />
              <div class="invalid-feedback">
                {{ location.errors.longitude }}
              </div>
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="latitude" class="form-label">Latitude</label>
              <input
                v-model="location.latitude"
                type="text"
                class="form-control bg-white"
                readonly
                :class="{
                  'is-invalid': location.errors.latitude,
                }"
                id="latitude"
                placeholder="Latitude"
              />
              <div class="invalid-feedback">{{ location.errors.latitude }}</div>
            </div>
          </div>
        </div>
        <MapPicker
          v-model:longitude="location.longitude"
          v-model:latitude="location.latitude"
          :zoom="10"
          id="mapPicker"
        ></MapPicker>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, watch } from "@vue/runtime-core";
import ColorPicker from "../ColorPicker.vue";
import FileUploader from "../FileUploader.vue";
import MapPicker from "../Map/MapPicker.vue";

export default {
  components: {
    ColorPicker,
    MapPicker,
    FileUploader,
  },
  props: {
    location: {
      type: Object,
      default: () => ({
        question: "",
        answer: "",
        errors: {
          question: "",
          answer: "",
          longitude: "",
          latitude: "",
        },
        longitude: 125.61315274255003,
        latitude: 7.071250196247246,
      }),
    },
    locations: Object,
    types: Array,
  },
  setup(props) {
    const currentType = computed(() => {
      return props.types.find(
        (type) => type.id === props.location.location_type_id
      );
    });
    const parentLocations = computed(() => {
      if (currentType.value) {
        if (currentType.value.requires_parent)
          return props.locations[currentType.value.parent_type_id];
        else
          return [
            {
              id: null,
              name: "Independent",
            },
            ...props.locations[currentType.value.parent_type_id],
          ];
      }
      return [];
    });

    // Watch
    watch(
      () => props.location.name,
      _.throttle(async (newVal) => {
        if (!newVal) {
          props.location.slug = "";
          return;
        }

        const data = await axios.get(route("locations.slug-valid", newVal));
        props.location.slug = data.data.slug;
      }, 500)
    );

    return {
      currentType,
      parentLocations,
    };
  },
};
</script>

<style></style>
