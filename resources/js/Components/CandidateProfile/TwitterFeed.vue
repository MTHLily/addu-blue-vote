<template>
  <div class="container">
    <twitter>
      <h1>
        <a class="twitter-timeline h-100" data-theme="light" :href="feedUrl">
          {{ title }}
        </a>
      </h1>
    </twitter>
  </div>
</template>

<script>
import { twitter } from "vue-twitter";

export default {
  components: {
    twitter,
  },
  props: {
    profile: {
      type: Object,
      default: () => ({
        name: "Default Descriptions",
        link: "https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw",
      }),
    },
    title: {
      type: String,
      default: "",
    },
    feedUrl: {
      type: String,
      required: true,
    },
  },
};
</script>
