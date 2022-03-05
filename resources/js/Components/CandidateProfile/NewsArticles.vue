<template>
  <div class="container col-6 h-auto" style="background-color: #faa728">
    <h1 class="card-title text-white p-3 text-uppercase fw-bold lh-sm fs-1">
      NEWS ARTICLES
    </h1>
    <div class="d-flex flex-column gap-4">
      <template v-if="articles?.data.length">
        <template v-for="article in articles?.data" :key="article.id">
          <NewsCard :news="article"></NewsCard>
        </template>
        <Pagination class="mx-auto" :pagination="articles" size="sm" />
      </template>
      <div v-else class="lead fw-bold mx-2 mb-4 text-white">
        There are no news articles about this candidate.
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";
import NewsCard from "@/Components/News/NewsCard.vue";
import Pagination from "../Pagination.vue";

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
