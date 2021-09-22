<template>
  <div class="card mb-3 d-flex align-items-center" style="max-width: 540px">
    <button
      type="button"
      class="btn btn-light h-100"
      @click="$emit('poiClicked', poi)"
    >
      <div class="row g-0 mh-15">
        <div class="container col-md-3">
          <img
            v-if="poi.image_url"
            :src="poi.image_preview_url"
            class="img-fluid rounded-start"
            :alt="poi.image_preview_url"
            style="object-fit: cover"
          />
          <img
            v-else
            src="https://cf.shopee.ph/file/2dfba819d401bc834927518570cfc877"
            class="img-fluid rounded-start"
            alt="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            style="object-fit: cover"
          />
        </div>
        <div class="col-md-8 align-items-start">
          <div class="p-3 text-start">
            <div>
                <button @click="$emit('districtClicked', poi.district)">
                  <p class="card-title">District: {{ poi.district.name }}</p>
                </button>
            </div>
            <div>
              <h5 class="card-text">{{ poi.name }}</h5>
            </div>
            <div>
              <p class="card-text">
                <small class="text-muted" v-html="markedDescription"></small>
              </p>
            </div>
          </div>
        </div>
        <div
          class="col-md-1 row-2 text-white"
          :style="`background-color: ${poi.district.color}`"
        ></div>
      </div>
    </button>
  </div>
</template>

<script>
import marked from "marked";
export default {
  emits: ['poiClicked', 'districtClicked'],
  props: {
    poi: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    markedDescription() {
      return marked(this.poi.description);
    },
  },
};
</script>

<style lang=""></style>
