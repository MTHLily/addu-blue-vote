<template lang="">
    <div class="card p-3" style="border-radius: 20px">
        <h5 class="card-title">{{ newsArticle.title }}</h5>
        <button
        class="btn btn-primary btn-sm text-white card-subtitle mb-2 col-6"
        style="border-radius: 20px"
        :style="{ 'background-color': newsArticle.news_source.color || 'blue' }"
        disabled
        >
        {{ newsArticle.news_source.name }}
        </button>
        <p class="card-text text-wrap">{{ newsArticle.description }}</p>
        <div class="d-flex justify-content-between">
        <p class="card-subtitle mb-2 text-muted">{{ newsArticle.date }}</p>
        <button type="button" class="btn btn-primary" style="border-radius: 20px">
            <a
            :href="`${newsArticle.news_source.home_url}`"
            target="_blank"
            class="text-white text-decoration-none"
            >
            READ MORE
            </a>
        </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        newsArticle: {
        type: Object,
        default: () => ({
            id: '1',
            title: "default title",
            description: "default description",
            url: "https://www.google.com",
            date: "default date",
            new_source: {
                name: "default name",
                home_url:"https://news.abs-cbn.com/",
            }
            
        }),
        },
    },
};
</script>

<style lang=""></style>
