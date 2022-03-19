<template>
  <div>
    <div class="input-group mb-3">
      <span class="input-group-text" :id="`Project Title ${index}`">
        Project Title
      </span>
      <input
        type="text"
        v-model="form.name"
        class="form-control"
        placeholder="Project Title"
        aria-label="Project Title"
        :aria-describedby="`Project Title ${index}`"
      />
      <span class="input-group-text" :id="`Project Link ${index}`">
        Project Link
      </span>
      <input
        type="text"
        v-model="form.link"
        class="form-control"
        placeholder="Project Link"
        aria-label="Project Link"
        :aria-describedby="`Project Link ${index}`"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DashboardLayout from "@/Layouts/DashboardLayout.vue";

export default defineComponent({
  components: { DashboardLayout },
  props: {
    form: { type: Object, required: true },
  },
});
</script>
