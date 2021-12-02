<template>
  <nav aria-label="Page navigation" :key="pagination.per_page">
    <ul class="pagination">
      <template v-for="link in pagination.links" :key="link.url">
        <li class="page-item" :class="{ disabled: link.active }">
          <template v-if="link.label !== '...'">
            <Link :href="link.url" class="page-link" preserve-scroll>
              <span aria-hidden="true" v-html="link.label"></span>
            </Link>
          </template>
          <template v-else>
            <NPopconfirm
              :negative-text="null"
              positive-text="Go to"
              :show-icon="false"
              :on-positive-click="changePage"
            >
              <template #trigger>
                <a href="#" class="page-link"
                  ><span aria-hidden="true">...</span></a
                >
              </template>
              <input type="text" class="form-control" v-model="gotoPage" />
            </NPopconfirm>
          </template>
        </li>
      </template>
      <!-- <li class="page-item" :class="{ disabled: pagination.current_page == 1 }">
        <a class="page-link" href="#" @click="changePage(1)" aria-label="First">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li> -->
      <!-- <li
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
      </li> -->
    </ul>
  </nav>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import { Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import { NPopconfirm } from "naive-ui";

export default defineComponent({
  components: { Link, NPopconfirm },
  props: {
    pagination: Object,
  },
  methods: {
    changePage() {
      console.log("PAGE VISIT: ", this.gotoPage);
      Inertia.visit(this.pagination.path, {
        data: { page: this.gotoPage, itemsPerPage: this.pagination.per_page },
      });
    },
  },
  data: () => ({
    gotoPage: 1,
  }),
  computed: {
    pages() {
      if (this.pagination === undefined) return [];
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
