<template>
  <div class="container col-6 h-auto" style="background-color: #faa728">
    <div class="card-title text-white p-3 text-uppercase fw-bold lh-sm fs-1">
      NEWS ARTICLES
    </div>
    <div class="d-flex flex-column gap-4">
      <template v-for="article in articles?.data" :key="article.id">
        <NewsCard :news="article"></NewsCard>
      </template>
      <Pagination :pagination="articles"></Pagination>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";
import NewsCard from "../../Components/News/NewsCard.vue";
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
