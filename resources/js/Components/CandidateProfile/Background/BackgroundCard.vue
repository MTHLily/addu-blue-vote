<template>
  <div
    class="card text-white mb-3"
    :style="{ 'background-color': primaryColor || 'blue' }"
  >
    <div class="card-header text-uppercase border-0 fw-bold lh-sm p-3 fs-1">
      {{ title }}
    </div>
    <div class="card-body">
      <div
        class="row row-cols-1"
        :class="{
          'row-cols-md-3': horizontal,
          'row-cols-md-1': !horizontal,
        }"
      >
        <template v-for="background in background" :key="background.id">
          <div class="col">
            <CardSection
              :primary-color="primaryColor"
              :secondary-color="secondaryColor"
              :class="{ col: horizontal, row: !horizontal }"
              :background="background"
            ></CardSection>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import CardSection from "./BackgroundCardSection.vue";

export default defineComponent({
  components: { CardSection },
  props: {
    background: Array,
    primaryColor: String,
    secondaryColor: String,
    title: String,
    horizontal: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style></style>
