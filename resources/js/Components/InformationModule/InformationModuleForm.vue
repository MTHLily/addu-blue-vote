<template>
  <div class="mb-2">
    <img
      class="information-module-cover"
      :src="
        form.cover?.file
          ? URL.createObjectURL(form.cover.file)
          : form.cover?.url
      "
      alt="Module Cover Preview"
    />
    <label for="informationModuleCover" class="form-label">
      Information Module Cover
    </label>
    <FileUploader
      v-model:value="form.cover"
      :class="{
        'is-invalid': form.errors['cover.file'],
      }"
    />
    <div class="invalid-feedback">{{ form.errors["cover.file"] }}</div>
  </div>
  <div class="mb-2">
    <label for="informationModuleTitle" class="form-label">
      Information Module Title
    </label>
    <input
      v-model="form.title"
      type="text"
      class="form-control"
      :class="{
        'is-invalid': form.errors.title,
      }"
      id="informationModuleTitle"
      placeholder="Module Description"
    />
    <div class="invalid-feedback">{{ form.errors.title }}</div>
  </div>
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

  <div class="mb-3" v-if="!create">
    <label for="informationModuleRelatedMedia" class="form-label">
      Files
    </label>
    <!-- <InformationModuleFileUploads :form="form" /> -->
    <FileUploader
      multipleFiles
      non-image
      v-model:value="form.downloadables"
      :class="{
        'is-invalid': form.errors['media.file'],
      }"
    />
  </div>

  <div class="mb-3">
    <label for="informationModuleRelatedVideo" class="form-label">
      Related Video
    </label>
    <VideoResourceSelect
      :video-resources="videos"
      v-model:value="form.related_videos"
    />
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
import FileUploader from "../FileUploader.vue";
import VideoResourceSelect from "../VideoResources/VideoResourceSelect.vue";
import InformationModuleFileUploads from "./InformationModuleFileUploads.vue";

export default defineComponent({
  components: {
    FileUploader,
    VideoResourceSelect,
    InformationModuleFileUploads,
  },
  props: {
    form: {
      type: Object,
      default: () => ({
        description: "",
        speakers: "",
        errors: {
          description: "",
          speakers: "",
        },
      }),
    },
    videos: {
      type: Array,
      default: [],
    },
    create: {
      type: Boolean,
      default: false,
    },
    multipleFiles: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      URL,
    };
  },
});
</script>
