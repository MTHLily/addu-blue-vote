<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
    <template v-for="person in people" :key="person.person">
      <PeopleBehindCard :people="person" />
    </template>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import PeopleBehindCard from "../PeopleBehindCard.vue";

export default defineComponent({
  components: { PeopleBehindCard },
  props: {
    people: {
      type: Array,
      required: true,
    },
  },
});
</script>
