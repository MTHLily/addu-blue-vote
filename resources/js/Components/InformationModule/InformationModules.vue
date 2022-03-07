<template>
  <div class="flex flex-column">
    <h1 id="video-resources">
      <span
        class="badge text-wrap text-white fw-bolder p-3 fs-5"
        :style="{
          'background-color': '#CE2029',
          'border-radius': '30px',
        }"
      >
    Information Modules      </span>
    </h1>
    <div class="row">
      <div class="col-12 col-md-8 d-flex flex-column" ref="currentVideoEl">
        <h2>{{ currentModule.description }}</h2>
        <div class="ratio ratio-16x9">
          <iframe
            :src="currentModule.link"
            :description="currentModule.description"
            allowfullscreen
          />
        </div>
        <p class="lead">{{ currentModule.information }}</p>
        <p v-if="currentModule.speakers != ''" class="lead italic fs-6">
          Speakers: {{ currentModule.speakers }}
        </p>
      </div>
      <div class="col-12 col-md-4 h-100">
        <h2>Featured Modules</h2>
        <div
          class="d-flex flex-column gap-2 overflow-y-scroll"
          style="max-height: 29rem"
        >
          <template
            v-for="featuredResource in featuredModules"
            :key="featuredResource.id"
          >
            <a
              href="#information-modules"
              class="text-decoration-none text-black"
              @click="setCurrentModule(featuredResource)"
            >
              <InformationModuleCard
                :video-resource="featuredResource"
                :active="featuredResource.id === currentModule.id"
              />
            </a>
          </template>
        </div>
      </div>
    </div>
    <div class="row">
      <h2>More Modules</h2>
      <PaginatedList :pagination="modules" page-key="modules">
        <template #list-item="{ item }">
          <a
            href="#information-modules"
            class="list-group-item list-group-item-action"
            :class="{ active: item.id === currentModule.id }"
            @click="setCurrentModule(item)"
          >
            {{ item.description }} -
            <span class="italic">{{ item.description }}</span>
          </a>
        </template>
      </PaginatedList>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import InformationModuleCard from "./InformationModuleCard.vue";
import PaginatedList from "../PaginatedList.vue";

export default defineComponent({
  components: { InformationModuleCard, PaginatedList },
  props: {
    featured: {
      type: Array,
    },
    modules: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const featuredModules = computed(() =>
      !!props.featured && props.featured.length > 0
        ? props.featured
        : props.modules.data.slice(0, 3)
    );

    const currentModule = ref(featuredModules.value[0]);
    const currentVideoEl = ref();

    const setCurrentModule = (module) => {
      currentModule.value = module;
    };

    return { currentModule, currentVideoEl, setCurrentVideo, featuredModules };
  },
});
</script>
