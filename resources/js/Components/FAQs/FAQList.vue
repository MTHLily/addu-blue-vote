<template>
  <div id="faqs" class="page container-md mt-4" >
    <div class="body row" style="margin-top:3%">
      <div class="col-3 mx-auto text-primary">
        <div>VOTERS REGISTRATION</div>
        <div class="h1 fw-bolder">FAQs</div>
      </div>
      <div class="col-9 d-flex flex-column">
        <FAQItem
          v-for="faq in faqs"
          :key="faq.id"
          :faq="faq"
          class="mt-3"
        ></FAQItem>
      </div>
    </div>
  </div>
</template>

<script>
import FAQItem from "./FAQItem.vue";

export default {
  components: {
    FAQItem,
  },
  props: {
    faqs: {
      type: Array,
      default: () => [
        {
          question: "default question",
          answer: "default answer",
        },
      ],
    },
  },
};
</script>

<style>
.card-body {
  margin-left: 52px;
  margin-bottom: 15px;
}
.page{
  border-bottom: solid #08228D;
}
.body{
  margin-bottom: 5%;
}
</style>
