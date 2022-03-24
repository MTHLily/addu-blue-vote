<template>
  <div class="d-flex flex-column gap-2">
    <ParnterOfficeInputList :offices="offices" />
    <div class="row">
      <Link class="btn btn-primary" :href="route('partner-offices.create')">
        <i class="bi bi-plus" /> Add Office
      </Link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import PeopleInputList from "../BlueVotePeople/PeopleInputList.vue";
import { Link } from "@inertiajs/inertia-vue3";
import ParnterOfficeInputList from "./ParnterOfficeInputList.vue";

export default defineComponent({
  components: {
    PeopleInputList,
    Link,
    ParnterOfficeInputList,
  },
  props: {
    offices: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
