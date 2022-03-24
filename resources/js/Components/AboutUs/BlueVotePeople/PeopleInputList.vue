<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
    <template v-for="person in people" :key="person.id">
      <div class="col">
        <PeopleBehindCard :people="person" />
        <div class="d-flex">
          <Link
            class="btn btn-info w-full"
            :href="route('bluevote-people.edit', person.id)"
          >
            Edit Person
          </Link>
          <DeleteButton :item="person" route-name="bluevote-people.destroy" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import PeopleBehindCard from "../PeopleBehindCard.vue";
import DeleteButton from "@/Components/DeleteButton.vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
  components: { PeopleBehindCard, DeleteButton, Link },
  props: {
    people: {
      type: Array,
      required: true,
    },
  },
});
</script>
