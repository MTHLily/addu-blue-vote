<template>
  <Slide>
    <div
      class="
        d-flex
        flex-column
        justify-content-center
        bg-primary
        text-white
        vw-100
        p-5
        info-slide
      "
    >
      <h1 class="text-uppercase display-1" style="font-family: Montserrat">
        {{ info.title }}
      </h1>
      <div
        v-html="markedContent"
        style="font-family: 'Josefin Sans'"
        class="fs-4"
      ></div>

      <div>
        <a href="https://www.facebook.com/AdDUBlueVote" target="_blank">
          <button class="btn btn-primary btn-lg" role="button">
            Learn More
          </button>
        </a>
      </div>
    </div>
  </Slide>
</template>

<script>
import { Slide } from "vue3-carousel";
import marked from "marked";

export default {
  components: { Slide },
  props: {
    info: {
      type: Object,
      default: () => ({
        title: "Defualt title",
        content: "Default content",
      }),
    },
  },
  computed: {
    markedContent() {
      return marked(this.info.content);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&family=Montserrat:wght@700&display=swap");

.info-slide {
  height: clamp(200px, 100vh, 1000px);
  background: linear-gradient(rgba(8, 34, 141, 0.7), rgba(8, 34, 141, 0.7)),
    url(https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-9/65932238_2354332941290721_9038293276070772736_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=973b4a&_nc_ohc=zGMPHZYV8E8AX-EcwRS&_nc_ht=scontent.fmnl8-2.fna&oh=fe3f8b351ab6dd028e4bc323b591cce1&oe=616D8039);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
