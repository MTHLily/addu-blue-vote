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
    <div class="container-md overflow-auto" style="margin-top: 5%">
      <ElectionProcessInfo :election-process="electionSteps" />
      <FAQList :faqs="faqs" />
      <h1 class="text-primary fw-bold my-5">
        Featured Information Modules
        <small class="fs-5">
          <Link :href="route('modules.index')">See More</Link>
        </small>
      </h1>
      <InfoMod :information-modules="informationModules" />
      <h1 class="text-primary fw-bold my-5" v-if="articles.total > 0">
        Election News and Issues
      </h1>
      <NewsDisplay :articles="articles" />
      <VideoResources
        v-if="featuredVideos.length > 0 || videoResources.data.length > 0"
        :featured="featuredVideos"
        :videos="videoResources"
      />
    </div>
  </GuestLayout>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import NewsDisplay from "../Components/News/NewsDisplay.vue";
import ElectionProcessInfo from "../Components/ElectionProcessInfo.vue";
import { Head } from "@inertiajs/inertia-vue3";
import GuestLayout from "../Layouts/Guest.vue";
import VideoResources from "@/Components/VideoResources/VideoResources.vue";
import InfoMod from "../Components/InformationModule/InformationModuleShow.vue";
import { Link } from "@inertiajs/inertia-vue3";
import FAQList from "@/Components/FAQs/FAQList.vue";
export default defineComponent({
  components: {
    Link,
    NewsDisplay,
    ElectionProcessInfo,
    GuestLayout,
    Head,
    VideoResources,
    InfoMod,
    FAQList,
  },

  props: {
    faqs: {
      type: Array,
      default: [],
    },
    articles: {
      type: Object,
      default: () => ({}),
    },
    featuredVideos: Array,
    videoResources: Object,
    electionSteps: {
      type: Array,
      default: () => [],
    },
    informationModules: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style></style>
