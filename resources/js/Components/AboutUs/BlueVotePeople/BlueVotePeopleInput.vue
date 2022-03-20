<template>
  <PeopleInputList :people="people" />
  <div class="row">
    <Link class="btn btn-primary" :href="route('bluevote-people.create')">
      <i class="bi bi-plus" /> Add Person
    </Link>
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
  },
});
</script>
