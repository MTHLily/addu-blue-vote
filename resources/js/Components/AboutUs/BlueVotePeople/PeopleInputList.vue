<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
    <template v-for="person in people" :key="person.person">
      <div>
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

export default defineComponent({
  components: { PeopleBehindCard, DeleteButton },
  props: {
    people: {
      type: Array,
      required: true,
    },
  },
});
</script>
