<template>
  <div>
    <component :is="`h${heading}`">
      <div href="#map" @click.stop="$emit('location-clicked', location.id)">
        {{ location.name }}
      </div>
    </component>

    <div v-if="location.sites.length">
      <component :is="`h${heading + 1}`">
        {{ siteLabel }}
      </component>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <template v-for="site in location.sites" :key="site.id">
          <div class="col mb-4">
            <PoICard
              @location-clicked="$emit('location-clicked', $event)"
              @site-clicked="$emit('site-clicked', $event)"
              :site="site"
            />
          </div>
        </template>
      </div>
    </div>
    <div v-if="location.children.length">
      <template v-for="child in location.children" :key="child.id">
        <PoIMapStackSection
          @location-clicked="$emit('location-clicked', $event)"
          @site-clicked="$emit('site-clicked', $event)"
          :location="child"
          :depth="depth + 1"
          :heading="heading + 1"
        />
      </template>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import PoICard from "../PoICard.vue";

export default defineComponent({
  name: "PoIMapStackSection",
  components: { PoICard },
  emits: ["location-clicked", "site-clicked"],
  props: {
    location: {
      type: Object,
      required: true,
    },
    heading: {
      type: Number,
      default: 1,
    },
    depth: {
      type: Number,
      default: 0,
    },
    depthNames: {
      type: Array,
      default: ["Regions", "Provinces", "Districts", "Cities/Municipalities"],
    },
    siteLabel: {
      type: String,
      default: "Sites",
    },
  },
});
</script>
