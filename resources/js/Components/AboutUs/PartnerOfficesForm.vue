<template>
  <div class="row row-cols-3" style="background-color: #ffffff">
    <div class="col mb-3 p-3">
      <label for="partnerOfficeImage" class="form-label">Office Image</label>
      <ImageUploader
        v-model:value="form.media"
        :class="{
          'is-invalid': form.errors['media.file'],
        }"
      />
      <div class="invalid-feedback">
        {{ form.errors["media.file"] }}
      </div>
    </div>

    <div class="col mb-3 p-3">
      <label for="partnerOfficeName" class="form-label">Name</label>
      <input
        v-model="form.name"
        type="string"
        class="form-control"
        :class="{
          'is-invalid': form.errors.name,
        }"
        id="partnerOfficeName"
        placeholder="Office Name"
      />
      <div class="invalid-feedback">{{ form.errors.title }}</div>
    </div>

        <div class="col mb-3 p-3">
      <label for="partnerOfficeLink" class="form-label">Link</label>
      <input
        v-model="form.link"
        type="string"
        class="form-control"
        :class="{
          'is-invalid': form.errors.link,
        }"
        id="partnerOfficeLink"
        placeholder="Office Link"
      />
      <div class="invalid-feedback">{{ form.errors.link }}</div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref, watch } from "@vue/runtime-core";
import axios from "axios";
import _ from "lodash";
import ImageUploader from "../FileUploader.vue";

export default defineComponent({
  components: {
    ImageUploader,
  },
  props: {
    form: Object,

    name: {
      type: Object,
      default: " ",
    },
    link: {
      type: Object,
      default: " ",
    },
    
  },
  
});
</script>

<style></style>
