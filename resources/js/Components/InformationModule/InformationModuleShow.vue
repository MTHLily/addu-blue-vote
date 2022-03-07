<template>
  <!-- for information modules -->
  <div class="container mx-auto">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
      <template v-for="infoMod in informationModules" :key="infoMod">
        <div class="col">
          <ModuleCard :module="infoMod" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import InfoModule from "./InformationModules.vue";
import VideoResources from "@/Components/VideoResources/VideoResources.vue";
import ModuleCard from "./ModuleCard.vue";

export default {
  components: {
    InfoModule,
    VideoResources,
    ModuleCard,
  },
  props: {
    informationModules: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang=""></style>
