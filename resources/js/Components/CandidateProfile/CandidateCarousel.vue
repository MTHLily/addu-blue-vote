<template lang="">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">  
      <template v-for="candidate in candidates" :key="candidate.id">
          <div class="col">
            <NameCard class="m-3" :candidate="candidate"></NameCard>
          </div>
      </template>
 </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import NameCard from "./CandidateNameCard.vue"

export default defineComponent({
  props: {
    candidates:{
      type:Array,
    },
    nationalPositions: Array,
  },
  components: {
    NameCard,
  },
});
</script>

<style></style>