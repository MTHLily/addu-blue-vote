<template lang="">
  <div class="card p-3" style="border-radius: 20px">
    <h5 class="card-title">{{ news.title }}</h5>
    <button
      class="btn btn-primary btn-sm text-white card-subtitle mb-2 col-6"
      style="border-radius: 20px"
      :style="{ 'background-color': news.news_source.color || 'blue' }"
      disabled
    >
      {{ news.news_source.name }}
    </button>
    <p class="card-text text-wrap">{{ news.description }}</p>
    <div class="d-flex justify-content-between">
      <p class="card-subtitle mb-2 text-muted">{{ news.date }}</p>
      <button type="button" class="btn btn-primary" style="border-radius: 20px">
        <a
          :href="`${news.url}`"
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
    news: {
      type: Object,
      default: () => ({
        title: "default title",
        source: "default source",
        description:
          "default description",
        date: "default date",
        link: "https://news.abs-cbn.com/",
        color: "#064205",
      }),
    },
  },
};
</script>

<style lang=""></style>
