<template>
  <div>
    <NButton
      v-if="candidates.length > 0"
      @click="show = true"
      type="primary"
      text
    >
      <NIcon>
        <i class="bi bi-info-circle"></i>
      </NIcon>
    </NButton>
    <NModal
      v-model:show="show"
      title="Related Candidates"
      preset="card"
      class="w-screen max-w-screen-md"
    >
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div
          v-for="candidate in candidates"
          :key="candidate.id"
          class="d-flex gap-2"
        >
          <span>{{ candidate.name }} </span>
          <Link :href="route('candidates.edit', candidate.id)"> See More </Link>
        </div>
      </div>
    </NModal>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { NModal, NIcon, NButton } from "naive-ui";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
  components: { NModal, NIcon, NButton, Link },
  props: {
    candidates: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      show: false,
    };
  },
});
</script>
