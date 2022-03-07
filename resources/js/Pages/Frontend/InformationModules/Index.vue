<template>
  <CandidateProfileLayout>
    <div class="container d-flex flex-column mt-2">
      <h1 class="text-primary fw-bold my-2">Information Modules</h1>
      <InformationModuleShow :information-modules="information_modules" />
    </div>
  </CandidateProfileLayout>
</template>

<script>
import { defineComponent } from "vue";
import CandidateProfileLayout from "@/Layouts/CandidateProfileLayout.vue";
import InformationModuleCard from "@/Components/InformationModule/InformationModuleCard.vue";
import ModuleCard from "@/Components/InformationModule/ModuleCard.vue";
import InformationModuleShow from "@/Components/InformationModule/InformationModuleShow.vue";

export default defineComponent({
  components: {
    CandidateProfileLayout,
    InformationModuleCard,
    ModuleCard,
    InformationModuleShow,
  },
  props: {
    information_modules: {
      type: Array,
      required: true,
    },
  },
});
</script>
