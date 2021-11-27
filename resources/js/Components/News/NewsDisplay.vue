<template>
  <div class="d-flex flex-column">
    <div class="row row-cols-1 row-cols-md-2">
      <template v-for="article in articles?.data" :key="article.id">
        <div class="col mb-2">
          <NewsCard :news="article"></NewsCard>
        </div>
      </template>
    </div>
    <Pagination class="align-self-end" :pagination="articles"></Pagination>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import Pagination from "../Pagination.vue";
import NewsCard from "./NewsCard.vue";

export default defineComponent({
  props: {
    articles: Object,
  },
  components: {
    NewsCard,
    Pagination,
  },
});
</script>

<style></style>
