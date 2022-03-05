<template>
  <CandidateProfileLayout>
    <div class="container d-flex flex-column">
      <h1>Information Modules</h1>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        <template v-for="infoMod in information_modules" :key="infoMod.id">
          <div class="col">
            <ModuleCard :module="infoMod" />
          </div>
        </template>
      </div>
    </div>
  </CandidateProfileLayout>
</template>

<script>
import { defineComponent } from "vue";
import CandidateProfileLayout from "@/Layouts/CandidateProfileLayout.vue";
import InformationModuleCard from "@/Components/InformationModule/InformationModuleCard.vue";
import ModuleCard from "@/Components/InformationModule/ModuleCard.vue";

export default defineComponent({
  components: { CandidateProfileLayout, InformationModuleCard, ModuleCard },
  props: {
    information_modules: {
      type: Array,
      required: true,
    },
  },
});
</script>
