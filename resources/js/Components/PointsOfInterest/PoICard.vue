<template>
  <div class="card d-flex align-items-center" style="max-width: 540px">
    <div>
      <button
        type="button"
        class="btn h-100"
        @click="$emit('poiClicked', site)"
      >
        <div class="row g-0 mh-15">
          <div class="col-md-3 d-flex align-items-center">
            <img
              v-if="site.image_url"
              :src="site.image_preview_url"
              class="img-fluid rounded-start"
              :alt="`Logo of ${site.location_name}`"
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
                      @click.stop="$emit('districtClicked', site.location_id)"
                    >
                      <a href="#">{{ site.location_name }}</a>
                    </li>
                  </ol>
                </nav>
              </div>
              <div>
                <h5 class="card-text">{{ site.name }}</h5>
              </div>
              <div>
                <p class="card-text">
                  <small class="text-muted" v-html="description"></small>
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-md-1 row-2 text-white"
            :style="`background-color: ${site.location_color}`"
          />
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import image from "@/Components/assets/blue vote logo.png";
import { computed } from "vue";

export default {
  data: () => ({
    image,
  }),
  emits: ["poiClicked", "districtClicked"],
  props: {
    site: {
      type: Object,
      default: () => ({
        id: 64,
        name: "Kapalong",
        description:
          "Municipal Hall Building, Quezon Boulevard, Maniki, Kapalong, Davao Del Norte",
        point_of_interest_type_id: 1,
        longitude: "125.608962600000000",
        latitude: "7.605844931000000",
        created_at: "2021-12-04T09:28:14.000000Z",
        updated_at: "2021-12-04T09:28:14.000000Z",
        location_id: 107,
        location_name: "Davao del Norte - 1st District",
        location_color: "#ffffff",
        image_preview_url: null,
      }),
    },
    location: Object,
  },
  setup(props) {
    const description = computed(() => marked(props.site.description));

    return {
      description,
    };
  },
};
</script>
