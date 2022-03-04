<template>
  <div class="mb-2">
    <label for="informationModuleDescription" class="form-label"
      >Information Module Description</label
    >
    <input
      v-model="form.description"
      type="text"
      class="form-control"
      :class="{
        'is-invalid': form.errors.description,
      }"
      id="informationModuleDescription"
      placeholder="Module Description"
    />
    <div class="invalid-feedback">{{ form.errors.description }}</div>
  </div>

  <div class="mb-3">
    <label for="informationModuleRelatedMedia" class="form-label">
      Files
    </label>
    <ImageUploader
      multipleFiles
      non-image
      v-model:value="form.media"
      :class="{
        'is-invalid': form.errors['media.file'],
      }"
    />
  </div>

  <div class="mb-3">
    <label for="informationModuleRelatedVideo" class="form-label"
      >Related Video</label
    >
    <NSelect v-model:value="form.related_videos" :options="videos" multiple />
    <div class="invalid-feedback">{{ form.errors.downloadables }}</div>
  </div>

  <div class="mb-3">
    <label for="informationModuleSpeakers" class="form-label">Speakers</label>
    <textarea
      v-model="form.speakers"
      type="string"
      class="form-control"
      :class="{
        'is-invalid': form.errors.speakers,
      }"
      id="informationModuleSpeakers"
      placeholder="Video Speakers"
    />
    <div class="invalid-feedback">{{ form.errors.speakers }}</div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import _ from "lodash";
import { NSelect } from "naive-ui";
import ImageUploader from "../FileUploader.vue";

export default defineComponent({
  components: {
    NSelect,
    ImageUploader,
  },
  props: {
    form: {
      type: Object,
      default: () => ({
        description: "",
        speakers: "",
        downloadables: "",
        errors: {
          description: "",
        },
      }),
    },
    videos: {
      type: Array,
      default: [],
    },
    multipleFiles: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style></style>
