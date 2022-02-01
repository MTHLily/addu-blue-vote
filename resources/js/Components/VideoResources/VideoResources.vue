<template>
  <div class="flex flex-column">
    <h1 id="video-resources">
      <span
        class="badge text-wrap text-white fw-bolder p-3 fs-5"
        :style="{
          'background-color': '#CE2029',
          'border-radius': '30px',
        }"
      >
        Video Resources
      </span>
    </h1>
    <div class="row">
      <div class="col-12 col-md-8 d-flex flex-column" ref="currentVideoEl">
        <h2>{{ currentVideo.title }}</h2>
        <div class="ratio ratio-16x9">
          <iframe
            :src="currentVideo.link"
            :title="currentVideo.title"
            allowfullscreen
          />
        </div>
        <p class="lead">{{ currentVideo.information }}</p>
        <p v-if="currentVideo.guests != ''" class="lead italic fs-6">
          Guests: {{ currentVideo.guests }}
        </p>
      </div>
      <div class="col-12 col-md-4 h-100">
        <h2>Featured Videos</h2>
        <div
          class="d-flex flex-column gap-2 overflow-y-scroll"
          style="max-height: 29rem"
        >
          <template
            v-for="featuredResource in featuredVideos"
            :key="featuredResource.id"
          >
            <a
              href="#video-resources"
              class="text-decoration-none text-black"
              @click="setCurrentVideo(featuredResource)"
            >
              <VideoResourceCard
                :video-resource="featuredResource"
                :active="featuredResource.id === currentVideo.id"
              />
            </a>
          </template>
        </div>
      </div>
    </div>
    <div class="row">
      <h2>More Videos</h2>
      <PaginatedList :pagination="videos" page-key="videos">
        <template #list-item="{ item }">
          <a
            href="#video-resources"
            class="list-group-item list-group-item-action"
            :class="{ active: item.id === currentVideo.id }"
            @click="setCurrentVideo(item)"
          >
            {{ item.title }} -
            <span class="italic">{{ item.description }}</span>
          </a>
        </template>
      </PaginatedList>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import VideoResourceCard from "./VideoResourceCard.vue";
import PaginatedList from "../PaginatedList.vue";

export default defineComponent({
  components: { VideoResourceCard, PaginatedList },
  props: {
    featured: {
      type: Array,
    },
    videos: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const featuredVideos = computed(() =>
      !!props.featured && props.featured.length > 0
        ? props.featured
        : props.videos.data.slice(0, 3)
    );

    const currentVideo = ref(featuredVideos.value[0]);
    const currentVideoEl = ref();

    const setCurrentVideo = (video) => {
      currentVideo.value = video;
    };

    return { currentVideo, currentVideoEl, setCurrentVideo, featuredVideos };
  },
});
</script>
