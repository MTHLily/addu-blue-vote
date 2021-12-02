<template lang="">
  <div class="card gap-2 p-2" style="border-radius: 20px">
    <h5 class="card-title" :style="{ 'font-size': small ? '1px' : '15px' }">
      {{ news.title }}
    </h5>
    <div class="card-subtitle">
      <span
        class="badge rounded-pill"
        :class="{ 'btn-primary': !news.news_source.color }"
        style="border-radius: 20px"
        :style="{
          'background-color': news.news_source.color,
          color: tagTextColor,
        }"
      >
        {{ news.news_source.name }}
      </span>
    </div>
    <p
      class="card-text text-wrap"
      :style="{ 'font-size': small ? '1px' : '15px' }"
    >
      {{ news.description }}
    </p>
    <div class="d-flex justify-content-between">
      <p
        class="card-subtitle mb-2 text-muted"
        :style="{ 'font-size': small ? '1px' : '15px' }"
      >
        {{ news.date }}
      </p>

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
    small: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    tagTextColor() {
      if (this.news.news_source) {
        function wc_hex_is_light(color) {
          const hex = color.replace("#", "");
          const c_r = parseInt(hex.substr(0, 2), 16);
          const c_g = parseInt(hex.substr(2, 2), 16);
          const c_b = parseInt(hex.substr(4, 2), 16);
          const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
          return brightness > 155;
        }
        if (wc_hex_is_light(this.news.news_source?.color)) return "black";
        else return "white";
      } else return "white";
    },
  },
};
</script>

<style lang=""></style>
