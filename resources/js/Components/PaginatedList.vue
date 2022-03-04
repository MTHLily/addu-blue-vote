<template>
  <div class="d-flex flex-column align-items-center gap-2 mt-3">
    <ul class="list-group w-100">
      <template v-for="item in pagination.data">
        <slot name="list-item" :item="item">
          <li class="list-group-item"></li>
        </slot>
      </template>
    </ul>
    <Pagination :pagination="pagination" :page-key="pageKey" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Pagination from "./Pagination.vue";

export default defineComponent({
  props: {
    pagination: {
      type: Object,
      required: true,
    },
    pageKey: {
      type: String,
      default: "page",
    },
  },
  components: { Pagination },
});
</script>
