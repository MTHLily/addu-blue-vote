<template>
  <div class="d-flex flex-column gap-2">
    <PeopleInputList :people="people" />
    <div class="row">
      <Link
        class="btn btn-primary"
        :href="route('bluevote-people.create', { volunteer })"
      >
        <i class="bi bi-plus" /> Add Person
      </Link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import PeopleInputList from "./PeopleInputList.vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
  components: {
    PeopleInputList,
    Link,
  },
  props: {
    people: {
      type: Array,
      default: () => [],
    },
    volunteer: {
      type: Boolean,
      default: () => false,
    },
  },
});
</script>
