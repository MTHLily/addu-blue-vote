<template>
  <div class="row row-cols-3" style="background-color: #ffffff">
    <div class="col mb-3 p-3">
      <label for="candidateName" class="form-label">Candidate Image</label>
      <ImageUploader
        v-model:value="form.profile_photo"
        :class="{
          'is-invalid': form.errors['profile_photo.file'],
        }"
      ></ImageUploader>
      <div class="invalid-feedback">
        {{ form.errors["profile_photo.file"] }}
      </div>
    </div>
    <div class="col mb-3 p-3">
      <label for="candidateName" class="form-label">Candidate Name</label>
      <input
        v-model="form.name"
        type="text"
        class="form-control"
        :class="{
          'is-invalid': form.errors.name,
        }"
        id="candidateName"
        placeholder="District Name"
      />
      <div class="invalid-feedback">{{ form.errors.name }}</div>
    </div>
    <div class="col mb-3 p-3">
      <label for="candidateSlug" class="form-label">Candidate Slug</label>
      <input
        v-model="form.slug"
        type="text"
        class="form-control"
        :class="{
          'is-invalid': form.errors.slug,
        }"
        id="candidateSlug"
        placeholder="Candidate Slug"
      />
      <div class="invalid-feedback">{{ form.errors.slug }}</div>
    </div>
    <div class="col mb-3 p-3">
      <label for="positionType" class="form-label">Type</label>
      <select
        id="positionType"
        cols="30"
        rows="4"
        class="form-select"
        v-model="locationType"
      >
        <option :value="null" disabled>Choose a type</option>
        <option value="">National</option>
        <template v-for="type in locationTypes" :key="type.id">
          <option :value="type.id">{{ type.name }}</option>
        </template>
      </select>
      <div class="invalid-feedback">{{ form.errors.running_position_id }}</div>
    </div>
    <div class="col mb-3 p-3">
      <label for="runningPosition" class="form-label">Running Position</label>
      <select
        id="runningPosition"
        cols="30"
        rows="4"
        class="form-select"
        :class="{
          'is-invalid': form.errors.running_position_id,
        }"
        v-model="form.running_position_id"
      ></select>
      <div class="invalid-feedback">{{ form.errors.running_position_id }}</div>
    </div>
    <div class="col mb-3 p-3">
      <label for="candidateLocation" class="form-label">Running Location</label>
      <select
        id="candidateLocation"
        cols="30"
        rows="4"
        class="form-select"
        :class="{
          'is-invalid': form.errors.candidateable,
        }"
        v-model="form.candidateable"
      ></select>
      <div class="invalid-feedback">{{ form.errors.candidateable }}</div>
    </div>
    <div class="col mb-3 p-3">
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
  </div>
</template>

<script>
import { defineComponent, watch } from "@vue/runtime-core";
import axios from "axios";
import _ from "lodash";
import ImageUploader from "../FileUploader.vue";

export default defineComponent({
  components: {
    ImageUploader,
  },
  props: {
    form: Object,
    locationTypes: Array,
    locations: Object,
    positions: Object,
  },
  data: () => ({
    locationType: null,
  }),
  setup(props) {
    watch(
      () => props.form.name,
      _.throttle(async (newVal) => {
        if (!newVal) {
          props.form.slug = "";
          return;
        }

        const data = await axios.get(route("candidates.slug-valid", newVal));
        props.form.slug = data.data.slug;
      }, 500)
    );
  },
});
</script>

<style></style>
