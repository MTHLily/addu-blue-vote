<template>
  <div class="container">
    <twitter>
      <a class="twitter-timeline" data-height="540" data-theme="light" :href="`${profile.link}`" >Tweets by {{ profile.name }}</a>
    </twitter>
  </div>
</template>

<script>
import { twitter } from 'vue-twitter'
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
  },
}
</script>
<style lang="">
  
</style>