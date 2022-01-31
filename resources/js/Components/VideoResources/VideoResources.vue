<template>
  <div class="flex flex-column">
    <h1>
      <span
        class="badge text-wrap text-whitefw-bolder p-3 fs-5"
        :style="{
          'background-color': '#CE2029',
          'border-radius': '30px',
        }"
      >
        Video Resources
      </span>
    </h1>
    <div class="row">
      <div class="col-9 d-flex flex-column">
        <h2>{{ currentVideo.title }}</h2>
        <div class="ratio ratio-16x9">
          <iframe
            :src="currentVideo.embed_link"
            :title="currentVideo.title"
            allowfullscreen
          />
        </div>
      </div>
      <div class="col-3 d-flex flex-column">
        <h2>Featured Videos</h2>
        <div class="d-flex flex-column gap-2">
          <template
            v-for="featuredResource in featured"
            :key="featuredResource.id"
          >
            <VideoResourceCard
              :video-resource="featuredResource"
              @click="setCurrentVideo(featuredResource)"
            />
          </template>
        </div>
      </div>
    </div>
    <div class="row">stack here</div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import VideoResourceCard from "./VideoResourceCard.vue";

export default defineComponent({
  components: { VideoResourceCard },
  props: {
    featured: {
      type: Array,
      default: [
        {
          title: "HELLO",
          description: "World",
          id: 1,
          embed_link: "https://www.youtube.com/embed/Opp9nqiN5m0",
        },
        {
          title: "This is",
          description: "a word",
          id: 2,
          embed_link: "https://www.youtube.com/embed/hExhv8x64Xo",
        },
        {
          title: "Testing",
          description: "123",
          id: 3,
          embed_link: "https://www.youtube.com/embed/Opp9nqiN5m0",
        },
      ],
    },
    videoes: {
      type: Array,
      default: [
        {
          title: "HELLO",
          description: "World",
          id: 1,
          embed_link: "https://www.youtube.com/embed/Opp9nqiN5m0",
        },
        {
          title: "This is",
          description: "a word",
          id: 2,
          embed_link: "https://www.youtube.com/embed/Opp9nqiN5m0",
        },
        {
          title: "Testing",
          description: "123",
          id: 3,
          embed_link: "https://www.youtube.com/embed/Opp9nqiN5m0",
        },
        {
          title: "Should not be featured",
          description: "123",
          id: 4,
          embed_link: "https://www.youtube.com/embed/Opp9nqiN5m0",
        },
        {
          title: "No featured pls",
          description: "123",
          id: 5,
          embed_link: "https://www.youtube.com/embed/Opp9nqiN5m0",
        },
      ],
    },
  },
  setup(props) {
    const videoStack = computed(() =>
      props.videos.filter((video) =>
        props.featured.some((featured) => featured.id === video.id)
      )
    );

    const currentVideo = ref(props.featured[0]);

    const setCurrentVideo = (video) => (currentVideo.value = video);

    return { videoStack, currentVideo, setCurrentVideo };
  },
});
</script>
