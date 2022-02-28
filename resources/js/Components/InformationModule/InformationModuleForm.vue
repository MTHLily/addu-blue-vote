<template>

    <div class="mb-2">
    <label for="informationModuleDescription" class="form-label">Information Module Description</label>
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
    <label for="informationModuleRelatedMedia" class="form-label">Related Media</label>
         <!--   <RelatedMediaSelector
        v-model:stances="form.stances"
        :class="{
          'is-invalid': issueFormErrors,
        }"
        :options="issues"
      ></RelatedMediaSelector>
    <div class="invalid-feedback">{{ form.errors.related_media }}</div>-->
  </div>

    <div class="mb-3">
    <label for="informationModuleRelatedVideo" class="form-label">Related Video</label>
         <NSelect v-model:value="form.related_videos" :options="videos" multiple/>
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

     <div class="mb-3">
    <label for="informationModuleDownloadables" class="form-label">Downloadables (NOT DONE)</label>
    <textarea
      v-model="form.downloadables"
      type="string"
      class="form-control"
      :class="{
        'is-invalid': form.errors.downloadables,
      }"
      id="informationModuleDownloadables"
      placeholder="Downloadables"
    />
    <div class="invalid-feedback">{{ form.errors.downloadables }}</div>
  </div>
</template>

<script>
import { computed, defineComponent, ref, watch } from "@vue/runtime-core";
import axios from "axios";
import _ from "lodash";
import { NSelect } from "naive-ui"

export default defineComponent({
  components:{
      NSelect,
      },

  /*props: {
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
      videos: {
      type: Array,
      default: [],
    },
    },
    
  },*/
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
  },

  

});
</script>

<style></style>
