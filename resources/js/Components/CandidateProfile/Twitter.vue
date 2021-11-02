<template>
  <div class="container col-6">
    <twitter>
      <a class="twitter-timeline " href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw">Tweets by TwitterDev</a> 
    </twitter>
  </div>
</template>

<script>
import { twitter } from 'vue-twitter'
// import twitter from 'vue-twitter/lib/twttr.js'

export default {
  components: {
    twitter,
  }
}
</script>
<style lang="">
  
</style>