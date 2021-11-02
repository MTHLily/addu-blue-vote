<template lang="">
    <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-2">
            <NewsCard></NewsCard>
        </div>
    </div>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";
import NewsCard from "../News/NewsCard.vue"

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