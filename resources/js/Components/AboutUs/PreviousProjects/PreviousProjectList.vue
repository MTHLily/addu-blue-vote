<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-3">
    <div class="col">
      <Link
        :href="PoliticalEducation"
        class="text-white text-center text-decoration-none btn-primary btn-lg block p-4 mb-3"
        style="padding: 20px; border-radius: 10px"
      >
        Political Education
      </Link>
    </div>
    <div class="col">
      <Link
        :href="route('voters-education')"
        class="text-white text-center text-decoration-none btn-danger btn-lg block p-4 mb-3"
        style="padding: 20px; border-radius: 10px"
      >
        Voters Education
      </Link>
    </div>
    <div class="col">
      <Link
        :href="Surveys"
        class="text-white text-center text-decoration-none btn-warning btn-lg block p-4 mb-3"
        style="padding: 20px; border-radius: 10px"
      >
        Surveys
      </Link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({});
</script>
