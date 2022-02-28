<template>
  <div class="row row-cols-3" style="background-color: #ffffff">
    <div class="col mb-3 p-3">
      <label for="candidateName" class="form-label">Candidate Image</label>
      <ImageUploader
        v-model:value="form.media"
        :class="{
          'is-invalid': form.errors['media.file'],
        }"
      ></ImageUploader>

    </div>
    <div class="col mb-3 p-3">
      <div class="mb-3">
        <label for="candidateName" class="form-label">Candidate Name</label>
        <input
          v-model="form.name"
          type="text"
          class="form-control"
          :class="{
            'is-invalid': form.errors.name,
          }"
          id="candidateName"
          placeholder="Candidate Name"
        />
        <div class="invalid-feedback">{{ form.errors.name }}</div>
      </div>

      <div>
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
    </div>
    <div class="col mb-3 p-3">
      <label for="politicalParty" class="form-label">Political Party</label>
      <select
        id="politicalParty"
        class="form-select"
        :class="{
          'is-invalid': form.errors.political_party_id,
        }"
        v-model="form.political_party_id"
      >
        <option :value="null" disabled>Choose a party</option>
        <template v-for="party in parties" :key="party.id">
          <option :value="party.id">{{ party.name }}</option>
        </template>
      </select>
      <div class="invalid-feedback">
        {{ form.errors.political_party_id }}
      </div>
    </div>

    <div class="col mb-3 p-3">
      <label for="candidateLocation" class="form-label">Running Location</label>
      <location-select
        v-model:value="form.location_id"
        :options="locationTree"
      ></location-select>
      <div class="invalid-feedback">{{ form.errors.location_id }}</div>
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
      >
        <option :value="null" disabled>Choose a position</option>
        <template v-for="position in positionOptions" :key="position.id">
          <option :value="position.id">{{ position.name }}</option>
        </template>
      </select>
      <div class="invalid-feedback">{{ form.errors.running_position_id }}</div>
    </div>

    <div class="col mb-3 p-3">
      <div>
        <label for="twitterTimeline" class="form-label"
          >Twitter Timeline URL</label
        >
        <input
          v-model="form.twitter_timeline_feed_url"
          type="text"
          class="form-control"
          :class="{
            'is-invalid': form.errors.twitter_timeline_feed_url,
          }"
          id="twitterTimeline"
          placeholder="Twitter Timeline URL"
        />
        <div class="invalid-feedback">
          {{ form.errors.twitter_timeline_feed_url }}
        </div>
      </div>
    </div>
    <div class="col-12 mb-3 p-3">
      <label class="form-label">Stances on Issues</label>
      <IssueSelector
        v-model:stances="form.stances"
        :class="{
          'is-invalid': issueFormErrors,
        }"
        :options="issues"
      ></IssueSelector>
      <div class="invalid-feedback">{{ issueFormErrors }}</div>
    </div>
    <div class="col-12 mb-3 p-3">
      <label class="form-label">Candidate Background</label>
      <CandidateBackgroundSelector
        v-model:background="form.background"
        :types="backgroundTypes"
        :errors="form.errors"
        error-key="background"
      ></CandidateBackgroundSelector>
      <div class="invalid-feedback">{{ form.errors.description }}</div>
    </div>
    <div class="col-12 mb-3 p-3">
      <label class="form-label" for="keywords"
        >Keywords <small>Separate keywords using commas</small></label
      >
      <textarea
        class="form-control"
        name="keywords"
        id="keywords"
        v-model="form.keywords"
      ></textarea>
      <div class="invalid-feedback">{{ form.errors.keywords }}</div>
    </div>

        <div class="col-12 mb-3 p-3">
      <label class="form-label" for="related_videos"> </label>
     <NSelect v-model:value="form.related_videos" :options="videos" multiple/>
      
      <div class="invalid-feedback">{{ form.errors.related_videos }}</div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref, watch } from "@vue/runtime-core";
import axios from "axios";
import _ from "lodash";
import ImageUploader from "../FileUploader.vue";
import CandidateBackgroundSelector from "./CandidateBackgroundSelector.vue";
import IssueSelector from "./IssueSelector.vue";
import LocationSelect from "../Locations/LocationSelect.vue";
import { NSelect } from "naive-ui"

export default defineComponent({
  components: {
    ImageUploader,
    IssueSelector,
    CandidateBackgroundSelector,
    LocationSelect,
    NSelect,
  },
  props: {
    form: Object,
    locationTypes: Array,
    locations: Array,
    locationTree: Array,
    positions: Object,
    parties: Array,
    issues: Array,
    backgroundTypes: {
      type: Array,
      default: [
        {
          id: 1,
          name: "Educational",
        },
      ],
    },
    videos: {
      type: Array,
      default: [],
    }, 
  },
  setup(props) {
    // Computed
    const positionOptions = computed(() => {
      const type = props.locationTypes.find(
        (type) => type.id === currentLocation.value?.location_type_id
      );
      return props.positions[type ? type.id : ""];
    });

    const currentLocation = computed(() => {
      return props.locations.find((loc) => loc.id === props.form.location_id);
    });

    const locationOptions = computed(() => {
      return props.locations;
    });

    const currentPosition = computed(() => {
      return positionOptions.value.find(
        (pos) => pos.id === props.form.running_position_id
      );
    });

    const issueFormErrors = computed(() => {
      let formError = null;

      for (let x = 0; x < props.form.stances.length; x++) {
        if (props.form.errors[`stances.${x}.issue_id`])
          return props.form.errors[`stances.${x}.issue_id`];
      }

      return formError;
    });

    // Watch
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

    return {
      currentPosition,
      currentLocation,
      locationOptions,
      positionOptions,
      issueFormErrors,
    };
  },
});
</script>

<style></style>
