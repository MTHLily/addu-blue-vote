<template>
  <div class="d-flex flex-column">
    <div class="row gap-2">
      <div class="d-none d-md-block col-1">
        <a class="btn btn-primary me-3" @click="toggleCollapse">
          <i class="bi bi-plus-lg"></i>
        </a>
      </div>
      <div class="col d-flex flex-column">
        <button
          class="btn btn-primary"
          style="text-align: left"
          type="button"
          @click="toggleCollapse"
        >
          {{ faq.question }}
        </button>
        <div ref="collapseEl" class="w-100 mt-2 collapse">
          <div class="card card-body m-0" v-html="markedAnswer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Collapse from "bootstrap/js/dist/collapse";
import marked from "marked";

export default {
  props: {
    faq: {
      type: Object,
      default: () => ({
        id: 0,
        question: "Default Question",
        answer: "Default Answer",
      }),
    },
  },
  data: () => ({
    collapse: null,
  }),
  mounted() {
    this.collapse = new Collapse(this.$refs.collapseEl, {
      toggle: false,
    });
  },
  methods: {
    toggleCollapse() {
      this.collapse.toggle();
    },
  },
  computed: {
    markedAnswer() {
      return marked(this.faq.answer);
    },
  },
};
</script>

<style></style>
