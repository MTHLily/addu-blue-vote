<template>
  <div class="card hover:shadow-lg cursor-pointer">
    <div class="card-body">
      <h3 class="card-title fs-5">{{ videoResource.title }}</h3>
      <div class="card-text">{{ videoResource.description }}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    videoResource: {
      type: Object,
      required: true,
    },
  },
});
</script>
