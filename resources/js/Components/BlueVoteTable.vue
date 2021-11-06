<template>
  <div class="table-responsive">
    <table class="table rounded m-0" style="table-layout: fixed">
      <thead>
        <tr v-show="title" class="bg-primary text-white">
          <th :colspan="columns.length + 1">{{ title }}</th>
        </tr>
        <tr class="bg-info text-black text-center">
          <th v-for="column in columns" :key="column.value">
            {{ column.label }}
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="tableItems.length === 0">
          <td class="text-center" :colspan="columns.length + 1">
            <div class="d-flex flex-column">
              <i class="bi bi-archive fs-4 text-danger"></i>
              <div>No Data</div>
            </div>
          </td>
        </tr>
        <template v-for="(item, ind) in tableItems" :key="ind">
          <tr>
            <template v-for="column in columns" :key="column.value">
              <td v-if="!column.slotName" :class="column.class">
                {{ item[column.value] }}
              </td>
              <td v-else>
                <slot :name="column.slotName" :item="item"></slot>
              </td>
            </template>
            <td>
              <slot name="actions" :item="item"></slot>
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot class="bg-light">
        <tr>
          <td :colspan="this.pagination ? 1 : columns.length + 1">
            <slot name="footer"></slot>
          </td>
          <td v-if="this.pagination" :colspan="columns.length">
            <div class="d-flex justify-content-end">
              <div class="w-25">
                <select
                  class="form-select"
                  :value="pagination.per_page"
                  @change="changePerPage"
                >
                  <option value="10">10 per page</option>
                  <option value="15">15 per page</option>
                  <option value="25">25 per page</option>
                  <option value="50">50 per page</option>
                  <option value="100">100 per page</option>
                </select>
              </div>
              <nav aria-label="Page navigation" :key="pagination.per_page">
                <ul class="pagination">
                  <li
                    class="page-item"
                    :class="{ disabled: pagination.current_page == 1 }"
                  >
                    <a
                      class="page-link"
                      href="#"
                      @click="changePage(1)"
                      aria-label="First"
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item" v-for="pageNo in pages" :key="pageNo">
                    <Link
                      class="page-link"
                      href="#"
                      @click="changePage(pageNo)"
                      >{{ pageNo }}</Link
                    >
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
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import _ from "lodash";
import { Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";

export default {
  components: { Link },
  props: {
    title: {
      type: String,
    },
    columns: {
      type: Array,
      default: [],
    },
    items: {
      type: Array,
      default: [],
    },
    pagination: {
      type: Object,
    },
  },
  computed: {
    tableItems() {
      if (this.pagination === undefined) return this.items;
      return this.pagination.data;
    },
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
  methods: {
    changePage(page) {
      Inertia.visit(
        route(route().current(), {
          page: page,
          itemsPerPage: this.pagination.per_page,
        })
      );
    },
    changePerPage(event) {
      Inertia.visit(
        route(route().current(), {
          itemsPerPage: event.target.value,
        })
      );
    },
  },
};
</script>

<style></style>
