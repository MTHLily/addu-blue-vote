<template>
  <a
    :href="project.link"
    class="text-white text-center text-decoration-none btn-primary btn-lg block p-4 mb-3"
    style="padding: 20px; border-radius: 10px"
  >
    {{ project.name }}
  </a>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Link,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
});
</script>
