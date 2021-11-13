<template>
  <div class="row row-cols-1 row-cols-md-2">
    <template v-for="article in articles?.data" :key="article.id">
      <div class="col mb-2">
        <NewsCard :news="article"></NewsCard>
      </div>
    </template>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import NewsCard from "./NewsCard.vue";

export default defineComponent({
  props: {
    articles: Object,
  },
  components: {
    NewsCard,
  },
});
</script>

<style></style>
