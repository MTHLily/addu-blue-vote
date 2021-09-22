<template>
  <Slide>
    <div
      class="bg-primary text-white vw-100 p-5"
      style="height: clamp(200px, 100vh, 1000px);background: linear-gradient( rgba(8, 34, 141, 0.7), rgba(8, 34, 141, 0.7) ), url('https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-9/65932238_2354332941290721_9038293276070772736_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=973b4a&_nc_ohc=zGMPHZYV8E8AX-EcwRS&_nc_ht=scontent.fmnl8-2.fna&oh=fe3f8b351ab6dd028e4bc323b591cce1&oe=616D8039'); background-size:cover; background-repeat: no-repeat; background-position: center;"
      
    >
      <h1 style="margin-top:15%;font-size: 5em;font-weight:bold">{{ info.title }}</h1>
      <!-- <div class="text-white">
        <MarkdownViewer
          :content="info.content"
          class="text-white"
        ></MarkdownViewer>
      </div> -->
      <!-- <p class="lead">{{ info.content }}</p> -->
      <div v-html="markedContent" style="font-size: 2em;"></div>

      <div>
        <a href="https://www.facebook.com/AdDUBlueVote" target="_blank">
          <button class="btn btn-primary btn-lg" role="button">Learn More</button>  
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

<style></style>
