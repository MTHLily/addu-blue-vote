<template>
  <div style="background-color: #ffffff">
    <div class="mb-3 p-3" style="background-color: #ffffff">
      <label for="districtName" class="form-label">District Name</label>
      <input
        v-model="form.name"
        type="text"
        class="form-control"
        :class="{
          'is-invalid': form.errors.name,
        }"
        id="districtName"
        placeholder="District Name"
      />
      <div class="invalid-feedback">{{ form.errors.name }}</div>
    </div>
    <div class="mb-3 p-3" style="background-color: #ffffff">
      <label for="description" class="form-label">Description</label>
      <textarea
        id="description"
        cols="30"
        rows="4"
        class="form-control"
        :class="{
          'is-invalid': form.errors.name,
        }"
        v-model="form.description"
        placeholder="Description"
      ></textarea>
      <div class="invalid-feedback">{{ form.errors.description }}</div>
    </div>
    <div class="mb-3 p-3" style="background-color: #ffffff">
      <ColorPicker
        v-model:color="form.color"
        :class="{
          'is-invalid': form.errors.color,
        }"
      ></ColorPicker>
      <div class="invalid-feedback">{{ form.errors.color }}</div>
    </div>
    <div class="mb-3 p-3" style="background-color: #ffffff">
      <div class="row">
        <div class="col">
          <div class="mb-3">
            <label for="longitude" class="form-label">Longitude</label>
            <input
              v-model="form.longitude"
              type="text"
              class="form-control bg-white"
              :class="{
                'is-invalid': form.errors.longitude,
              }"
              id="longitude"
              readonly
              placeholder="Longitude"
            />
            <div class="invalid-feedback">{{ form.errors.longitude }}</div>
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="latitude" class="form-label">Latitude</label>
            <input
              v-model="form.latitude"
              type="text"
              class="form-control bg-white"
              readonly
              :class="{
                'is-invalid': form.errors.latitude,
              }"
              id="latitude"
              placeholder="Latitude"
            />
            <div class="invalid-feedback">{{ form.errors.latitude }}</div>
          </div>
        </div>
      </div>
      <MapPicker
        v-model:longitude="form.longitude"
        v-model:latitude="form.latitude"
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
    form: {
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
