<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
    <template v-for="office in offices" :key="office.id">
      <div>
        <PeopleBehindCard :people="office" />
        <div class="d-flex">
          <Link
            class="btn btn-info w-full"
            :href="route('partner-offices.edit', office.id)"
          >
            Edit Office
          </Link>
          <DeleteButton :item="office" route-name="partner-offices.destroy" />
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
    offices: {
      type: Array,
      required: true,
    },
  },
});
</script>
