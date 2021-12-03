<template>
  <div class="container">
    <twitter>
      <a
        class="twitter-timeline h-100"
        data-theme="light"
        :href="`${candidate.twitter_timeline_feed_url}`"
        >Tweets by {{ candidate.name }}</a
      >
    </twitter>
  </div>
</template>

<script>
import { twitter } from "vue-twitter";
// import twitter from 'vue-twitter/lib/twttr.js'

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
    candidate: {
      type: Object,
    },
  },
};
</script>
<style lang=""></style>
