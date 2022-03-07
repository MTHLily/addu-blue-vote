<template>
  <div class="card">
    <img :src="module.cover.url" class="card-img-top" :alt="module.title" />
    <div class="card-body">
      <h2 class="card-title">{{ module.title }}</h2>
      <p class="card-text">{{ module.description }}</p>
      <Link
        :href="route('modules.show', module.id)"
        class="btn btn-primary text-white text-decoration-none"
      >
        Learn More...
      </Link>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
  components: {
    Link,
  },
  props: {
    module: {
      type: Object,
      default: () => ({
        title: "Default Module Title",
        img: "https://assets.tumblr.com/images/default_header/optica_pattern_01.png",
        description: "Default description",
      }),
    },
  },
});
</script>
