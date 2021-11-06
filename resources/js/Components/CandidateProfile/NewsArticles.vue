<template lang="">
  <div class="card col-6 text-white h-auto" style="background-color: #faa728">
    <div class="card-title p-3 text-uppercase fw-bold lh-sm fs-1">NEWS ARTICLES</div>
    <div class="card-body">
      <!-- <NewsCard></NewsCard> -->
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <!-- <NewsCard></NewsCard> -->
          </div>
          <div class="carousel-item p-3 mb-3">
            <div class="card-body bg-white" style="border-radius: 20px">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">SAAAAA.</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
            <div class="card-body bg-white" style="border-radius: 20px">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">SAAAAA.</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
            <div class="card-body bg-white" style="border-radius: 20px">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">SAAAAA.</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
          <div class="carousel-item p-3">
            <div class="card-body bg-white" style="border-radius: 20px">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">AAnt.</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";
// import NewsCard from "../../Components/News/NewsCard.vue";

export default defineComponent({
  props: {
    articles: Object,
  },
  components: {
    // NewsCard,
  },
});
</script>

<style></style>
