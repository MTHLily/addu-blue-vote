<template>
  <nav aria-label="Page navigation" :key="pagination.per_page">
    <ul
      class="pagination"
      :class="{
        'pagination-lg': actualSize === 'lg',
        'pagination-sm': actualSize === 'sm',
      }"
    >
      <template v-for="(link, ind) in pagination.links" :key="link.url">
        <li class="page-item" :class="{ disabled: link.active }">
          <template v-if="link.label !== '...'">
            <Link :href="link.url" class="page-link" preserve-scroll>
              <span v-if="ind === 0">&laquo;</span>
              <span v-else-if="ind === pagination.links.length - 1"
                >&raquo;</span
              >
              <span v-else aria-hidden="true">{{ link.label }}</span>
            </Link>
          </template>
          <template v-else>
            <NPopconfirm
              id="goto"
              :negative-text="null"
              positive-text="Go to"
              :show-icon="false"
              :on-positive-click="changePage"
            >
              <template #trigger>
                <a href="#goto" class="page-link"
                  ><span aria-hidden="true">...</span></a
                >
              </template>
              <input
                type="number"
                :max="pagination.last_page"
                :min="1"
                class="form-control"
                v-model="gotoPage"
              />
            </NPopconfirm>
          </template>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
import { defineComponent, ref, computed } from "@vue/runtime-core";
import { Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import { NPopconfirm } from "naive-ui";
import { breakpointsBootstrapV5, useBreakpoints } from "@vueuse/core";

export default defineComponent({
  components: { Link, NPopconfirm },
  props: {
    pagination: Object,
    size: {
      type: String,
      default: "md",
    },
    pageKey: {
      type: String,
      default: "page",
    },
  },
  setup(props) {
    const gotoPage = ref(1);
    const changePage = () => {
      if (gotoPage.value > props.pagination.last_page)
        gotoPage.value = props.pagination.last_page;
      Inertia.visit(props.pagination.path, {
        data: {
          [props.pageKey]: gotoPage.value,
          itemsPerPage: props.pagination.per_page,
        },
        preserveScroll: true,
        preserveState: true,
      });
    };

    const breakpoints = useBreakpoints(breakpointsBootstrapV5);
    const actualSize = computed(() => {
      return breakpoints.greater("md").value ? "md" : "sm";
    });

    return {
      gotoPage,
      changePage,
      actualSize,
    };
  },
});
</script>
