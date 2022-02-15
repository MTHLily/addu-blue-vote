<template>
  <Head title="Voters' Education">
    <meta
      name="description"
      content="Ateneo Blue Vote is a website dedicated to the election process of the Philippines. Developed by AdDU ARISEn Labs."
    />
    <meta
      name="keywords"
      content="philippines, election, 2022, election news, election process"
    />
  </Head>
  <GuestLayout>
    <div class="container-md overflow-auto">
      <VideoResources
        v-if="featuredVideos.length > 0 || videoResources.data.length > 0"
        :featured="featuredVideos"
        :videos="videoResources"
      />
      <ElectionProcessInfo></ElectionProcessInfo>
      <h1 class="text-primary fw-bold my-5">Election News and Issues</h1>
      <NewsDisplay :articles="articles"></NewsDisplay>
    </div>

    <InfoMod />
  </GuestLayout>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import NewsDisplay from "../Components/News/NewsDisplay.vue";
import ElectionProcessInfo from "../Components/ElectionProcessInfo.vue";
import { Head } from "@inertiajs/inertia-vue3";
import GuestLayout from "../Layouts/Guest.vue";
import VideoResources from "@/Components/VideoResources/VideoResources.vue";
import InfoMod from '../Components/InformationModule/InformationModuleShow.vue'


export default defineComponent({
  components: {
    NewsDisplay,
    ElectionProcessInfo,
    GuestLayout,
    Head,
    VideoResources,
    InfoMod,
  
  },

  props: {
    articles: {
      type: Object,
      default: () => ({}),
    },
    featuredVideos: Array,
    videoResources: Object,
  },
});
</script>

<style>


</style>
