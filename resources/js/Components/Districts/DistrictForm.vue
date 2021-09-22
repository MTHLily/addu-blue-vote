<template>
  <div style="background-color: #ffffff">
    <div class="mb-3 p-3" style="background-color: #ffffff">
      <label for="districtName" class="form-label">District Name</label>
      <input
        v-model="district.name"
        type="text"
        class="form-control"
        :class="{
          'is-invalid': district.errors.name,
        }"
        id="districtName"
        placeholder="District Name"
      />
      <div class="invalid-feedback">{{ district.errors.name }}</div>
    </div>
    <div class="mb-3 p-3" style="background-color: #ffffff">
      <label for="description" class="form-label">Description</label>
      <textarea
        id="description"
        cols="30"
        rows="4"
        class="form-control"
        :class="{
          'is-invalid': district.errors.name,
        }"
        v-model="district.description"
        placeholder="Description"
      ></textarea>
      <div class="invalid-feedback">{{ district.errors.description }}</div>
    </div>
    <div class="mb-3 p-3" style="background-color: #ffffff">
      <ColorPicker
        v-model:color="district.color"
        :class="{
          'is-invalid': district.errors.color,
        }"
      ></ColorPicker>
      <div class="invalid-feedback">{{ district.errors.color }}</div>
    </div>
    <div class="mb-3 p-3" style="background-color: #ffffff">
      <div class="row">
        <div class="col">
          <div class="mb-3">
            <label for="longitude" class="form-label">Longitude</label>
            <input
              v-model="district.longitude"
              type="text"
              class="form-control bg-white"
              :class="{
                'is-invalid': district.errors.longitude,
              }"
              id="longitude"
              readonly
              placeholder="Longitude"
            />
            <div class="invalid-feedback">{{ district.errors.longitude }}</div>
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="latitude" class="form-label">Latitude</label>
            <input
              v-model="district.latitude"
              type="text"
              class="form-control bg-white"
              readonly
              :class="{
                'is-invalid': district.errors.latitude,
              }"
              id="latitude"
              placeholder="Latitude"
            />
            <div class="invalid-feedback">{{ district.errors.latitude }}</div>
          </div>
        </div>
      </div>
      <MapPicker
        v-model:longitude="district.longitude"
        v-model:latitude="district.latitude"
        :zoom="10"
        id="mapPicker"
      ></MapPicker>
    </div>
  </div>
</template>

<script>
import ColorPicker from "../ColorPicker.vue";
import MapPicker from "../Map/MapPicker.vue";

export default {
  components: {
    ColorPicker,
    MapPicker,
  },
  props: {
    district: {
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
  },
};
</script>

<style></style>
