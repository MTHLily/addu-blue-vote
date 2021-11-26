<template lang="">
  <nav aria-label="Page navigation" :key="pagination.per_page">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: pagination.current_page == 1 }">
        <a class="page-link" href="#" @click="changePage(1)" aria-label="First">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="pageNo in pages"
        :key="pageNo"
        class="page-item"
        :class="{ active: pagination.current_page == pageNo }"
      >
        <Link class="page-link" href="#" @click="changePage(pageNo)">{{
          pageNo
        }}</Link>
      </li>
      <li
        class="page-item"
        :class="{
          disabled: pagination.current_page == pagination.last_page,
        }"
      >
        <a
          class="page-link"
          href="#"
          @click="changePage(pagination.last_page)"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import { Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";

export default defineComponent({
  components: { Link },
  props: {
    pagination: Object,
  },
  methods: {
    changePage(page) {
      Inertia.visit(
        route(route().current(), {
          page: page,
          itemsPerPage: this.pagination.per_page,
        })
      );
    },
  },
  computed: {
    pages() {
      if (this.pagination === undefined) return;
      const pivot = this.pagination.current_page;
      if (pivot <= 3)
        return _.range(1, Math.min(this.pagination.last_page + 1, 6));
      if (pivot >= this.pagination.last_page - 3)
        return _.range(
          this.pagination.last_page - 4,
          this.pagination.last_page + 1
        );
      return _.range(pivot - 2, pivot + 3);
    },
  },
});
</script>

<style lang=""></style>
