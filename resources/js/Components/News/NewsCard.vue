<template lang="">
  <div class="card gap-2 p-2" style="border-radius: 20px">
    <h5 class="card-title">{{ news.title }}</h5>
    <div class="card-subtitle">
      <span
        class="badge rounded-pill"
        :class="{ 'btn-primary': !news.news_source.color }"
        style="border-radius: 20px"
        :style="{ 'background-color': news.news_source.color }"
      >
        {{ news.news_source.name }}
      </span>
    </div>
    <p class="card-text text-wrap">{{ news.description }}</p>
    <div class="d-flex justify-content-between">
      <p class="card-subtitle mb-2 text-muted">{{ news.date }}</p>

      <a
        :href="`${news.url}`"
        target="_blank"
        class="btn btn-primary btn-sm rounded-pill"
      >
        READ MORE
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      default: () => ({
        title: "default title",
        source: "default source",
        description: "default description",
        date: "default date",
        link: "https://news.abs-cbn.com/",
        color: "#064205",
      }),
    },
  },
};
</script>

<style lang=""></style>
