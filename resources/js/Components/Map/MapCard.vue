<template>
  <div class="card d-flex align-items-center" style="max-width: 540px">
    <div>
      <button type="button" class="btn h-100" @click="$emit('poiClicked', poi)">
        <div class="row g-0 mh-15">
          <div class="col-md-3 d-flex align-items-center">
            <img
              v-if="poi.image_url"
              :src="poi.image_preview_url"
              class="img-fluid rounded-start"
              :alt="`Logo of ${poi.location.name}`"
              style="object-fit: cover"
            />
            <img
              v-else
              :src="image"
              class="img-fluid rounded-start"
              style="object-fit: cover"
            />
          </div>
          <div class="col-8 align-items-start">
            <div class="p-3 text-start">
              <div>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">City/Province</li>
                    <li
                      class="breadcrumb-item"
                      aria-current="page"
                      @click.stop="$emit('districtClicked', poi.location)"
                    >
                      <a href="#">{{ poi.location.name }}</a>
                    </li>
                  </ol>
                </nav>
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
            :style="`background-color: ${poi.location.color}`"
          />
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import image from "@/Components/assets/blue vote logo.png";

export default {
  data: () => ({
    image,
  }),
  emits: ["poiClicked", "districtClicked"],
  props: {
    poi: {
      type: Object,
      default: () => ({}),
    },
    location: Object,
  },
  computed: {
    markedDescription() {
      return marked(this.poi.description);
    },
  },
};
</script>

<style lang=""></style>
