<template>
  <GuestLayout>
    <div class="container-md">
      <h1>Voting Precints</h1>
      <PoIMap :locations="locations" site-label="Voting Precints" />
    </div>
  </GuestLayout>
</template>

<script lang="js">
import PoIMap from "@/Components/PointsOfInterest/PoIMap.vue";
import GuestLayout from "@/Layouts/Guest.vue";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    locations: Array,
  },
  components: {
    PoIMap,
    GuestLayout,
  }
})
</script>
