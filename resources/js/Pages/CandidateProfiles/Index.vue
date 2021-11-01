<template>
  <ArisenHeader></ArisenHeader>
  <div class=""  :style="{'background-image':'url(https://vuejs.org/images/logo.png)'}">
    <PresCarousel></PresCarousel>
  </div>


  <ArisenFooter></ArisenFooter>

</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import ArisenFooter from "../../Components/Layout/ARISEnFooter.vue";
import ArisenHeader from "../../Layouts/Partials/Header.vue";
import PresCarousel from "../../Components/CandidateProfile/CandidateCarousel.vue"

export default {
  components: {
  //   Link,
    ArisenFooter,
    ArisenHeader,
    PresCarousel,
  },
};
</script>

<style>
.navbar-logo {
  max-height: 50px;
  max-width: 80%;
}
</style>
