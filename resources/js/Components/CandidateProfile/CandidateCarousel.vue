<template lang="">
    <div class="row row-cols-1 row-cols-md-2">
        <!-- <template v-for="article in articles.data" :key="article.id"> -->
        <div class="col mb-2">
            <!-- <NewsCard :news="article"></NewsCard> -->
            <NameCard></NameCard>
        </div>
        <!-- </template> -->
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import NameCard from "./CandidateNameCard.vue"

export default defineComponent({
  props: {
    articles: Object,
  },
  components: {
    NameCard,
  },
});
</script>

<style></style>