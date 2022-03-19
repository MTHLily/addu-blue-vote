<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-3">
    <template v-for="project in projects">
      <div class="col">
        <PreviousProjectCard :project="project" />
        <div class="d-flex">
          <Link
            class="btn btn-info w-full"
            :href="route('previous-projects.edit', project.id)"
          >
            Edit Project
          </Link>
          <DeleteButton
            :item="project"
            route-name="previous-projects.destroy"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import PreviousProjectCard from "./PreviousProjectCard.vue";
import { Link } from "@inertiajs/inertia-vue3";
import DeleteButton from "@/Components/DeleteButton.vue";

export default defineComponent({
  components: { PreviousProjectCard, Link, DeleteButton },
  props: {
    projects: { type: Array, default: () => [] },
  },
});
</script>
