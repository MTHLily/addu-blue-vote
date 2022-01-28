<template lang="">
  <Head title="Voters' Registration Process">
    <meta
      name="description"
      content="Ateneo Blue Vote is a website dedicated to the election process of the Philippines. Developed by AdDU ARISEn Labs."
    />
    <meta
      name="keywords"
      content="philippines, election, 2022, election news"
    />
  </Head>
  <GuestLayout>
    <div>
      <div class="w-100">
        <InformationCarousel :information="information"></InformationCarousel>
      </div>

      <VoterRegistrationProcess />
      <FAQs :faqs="faqs" />
      <PoIMap :locations="locations" />
    </div>
  </GuestLayout>
</template>
<script>
import { Head, Link } from "@inertiajs/inertia-vue3";
import GuestLayout from "../Layouts/Guest.vue";
import Map from "../Components/Map/Map.vue";
import VoterRegistrationProcess from "../Components/VoterRegistrationProcess.vue";
import FAQs from "../Components/FAQs/FAQList.vue";
import InformationCarousel from "../Components/Information/InformationCarousel.vue";
import PoIMap from "@/Components/PointsOfInterest/PoIMap.vue";
import NewsDisplay from "../Components/News/NewsDisplay.vue";
import ElectionProcessInfo from "../Components/ElectionProcessInfo.vue";

export default {
  components: {
    PoIMap,
    Head,
    Link,
    GuestLayout,
    Map,
    FAQs,
    InformationCarousel,
    VoterRegistrationProcess,
    NewsDisplay,
    ElectionProcessInfo,
  },
  props: {
    faqs: {
      type: Array,
      default: [],
    },
    information: {
      type: Array,
      default: [],
    },
    locations: Array,
    articles: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
.carousel-item:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(8, 34, 141, 0.6);
}
img {
  filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
  filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
}
.info {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  color: #fff;
  text-align: center;
  -webkit-transform: translate3d(-50%, -50%, 0);
  -moz-transform: translate3d(-50%, -50%, 0);
  -ms-transform: translate3d(-50%, -50%, 0);
  -o-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}
.info h1 {
  font-size: 4em;
  font-weight: bold;
  margin: 0;
  padding: 0;
}
.bg-gray-100 {
  background-color: #f7fafc;
  background-color: rgba(247, 250, 252, var(--tw-bg-opacity));
}

.border-gray-200 {
  border-color: #edf2f7;
  border-color: rgba(237, 242, 247, var(--tw-border-opacity));
}

.text-gray-400 {
  color: #cbd5e0;
  color: rgba(203, 213, 224, var(--tw-text-opacity));
}

.text-gray-500 {
  color: #a0aec0;
  color: rgba(160, 174, 192, var(--tw-text-opacity));
}

.text-gray-600 {
  color: #718096;
  color: rgba(113, 128, 150, var(--tw-text-opacity));
}

.text-gray-700 {
  color: #4a5568;
  color: rgba(74, 85, 104, var(--tw-text-opacity));
}

.text-gray-900 {
  color: #1a202c;
  color: rgba(26, 32, 44, var(--tw-text-opacity));
}

@media (prefers-color-scheme: dark) {
  .dark\:bg-gray-800 {
    background-color: #2d3748;
    background-color: rgba(45, 55, 72, var(--tw-bg-opacity));
  }

  .dark\:bg-gray-900 {
    background-color: #1a202c;
    background-color: rgba(26, 32, 44, var(--tw-bg-opacity));
  }

  .dark\:border-gray-700 {
    border-color: #4a5568;
    border-color: rgba(74, 85, 104, var(--tw-border-opacity));
  }

  .dark\:text-white {
    color: #fff;
    color: rgba(255, 255, 255, var(--tw-text-opacity));
  }

  .dark\:text-gray-400 {
    color: #cbd5e0;
    color: rgba(203, 213, 224, var(--tw-text-opacity));
  }
}
</style>
