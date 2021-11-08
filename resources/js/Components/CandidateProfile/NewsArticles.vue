<template lang="">
  <div class="container col-6 text-white h-auto" style="background-color: #faa728">
    <div class="card-title p-3 text-uppercase fw-bold lh-sm fs-1">NEWS ARTICLES</div>
      <template v-for="article in articles?.data" :key="article.id">
        <NewsCard :newsArticle="article"></NewsCard>
      </template>
      <!-- <h1>aaaaaaaaaaaaaaaaaaaaaa</h1> -->
  </div>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";
import NewsCard from "../../Components/News/NewsCard.vue";
// import NewsCard from "./NewsArticle.vue";

export default defineComponent({
  props: {
    articles: Object,
  },
  components: {
    NewsCard,
  },
  
});
</script>

<style>

</style>
