<template>
  <div class="container">
    <template v-for="region in locationTree" :key="region.id">
      <div class="d-flex flex-column mt-4">
        <h1>{{ region.name }}</h1>
        <template v-if="region.sites">
          <h6>Sites</h6>
        </template>
        <template v-if="region.children">
          <h6>Provinces</h6>
          <template v-for="province in region.children" :key="province.id">
            <h3>{{ province.name }}</h3>
            <template v-if="province.children">
              <h6>Districts</h6>
              <template
                v-for="district in province.children"
                :key="district.id"
              >
                <h5>{{ district.name }}</h5>
                <template v-if="district.sites.length > 0">
                  <h6>Sites</h6>
                  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 w-100">
                    <template v-for="site in district.sites" :key="site.id">
                      <div class="col mb-2">
                        <Card
                          :poi="site"
                          :location="district"
                          @poi-clicked="$emit('poiClicked', $event)"
                          @district-clicked="$emit('districtClicked', $event)"
                        />
                      </div>
                    </template>
                  </div>
                </template>
              </template>
            </template>
          </template>
        </template>
      </div>
    </template>
    <!-- <div
      class="row mt-4"
      v-for="districtSection in districtAndPoi"
      :key="districtSection.id"
    >
      <div class="d-flex gap-2 flex-column" v-if="districtSection.sites.length">
        <h3 class="text-primary text-uppercase">
          <a href="#map" @click="$emit('districtClicked', districtSection)">{{
            districtSection.name
          }}</a>
        </h3>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
          <div class="col" v-for="poi in districtSection.sites" :key="poi.id">
            <Card
              :poi="poi"
              class="h-100"
              @poi-clicked="$emit('poiClicked', $event)"
              @district-clicked="$emit('districtClicked', $event)"
            />
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Card from "./MapCard";

export default {
  emits: ["poiClicked", "districtClicked"],
  props: {
    pois: {
      type: Array,
      default: [],
    },
    districts: {
      type: Array,
      default: [],
    },
    locationTree: Array,
  },
  computed: {
    districtAndPoi() {
      return this.districts.map((district) => {
        return {
          ...district,
          sites: this.pois.filter((poi) => poi.district_id == district.id),
        };
      });
    },
  },
  components: {
    Card,
  },
  data: () => ({
    slideIndex: 1,
  }),
};
</script>

<style></style>
