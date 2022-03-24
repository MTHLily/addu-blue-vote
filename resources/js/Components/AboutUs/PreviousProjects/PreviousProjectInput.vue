<template>
  <div class="d-flex flex-column gap-2">
    <PreviousProjectInputList :projects="projects" />
    <div class="row">
      <Link class="btn btn-primary" :href="route('previous-projects.create')">
        <i class="bi bi-plus" /> Add Project
      </Link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import PreviousProjectList from "./PreviousProjectList.vue";
import PreviousProjectInputList from "./PreviousProjectInputList.vue";

export default defineComponent({
  components: {
    Link,
    PreviousProjectList,
    PreviousProjectInputList,
  },
  props: {
    projects: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
