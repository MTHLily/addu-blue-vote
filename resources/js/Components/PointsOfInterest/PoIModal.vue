<template>
  <n-modal
    :show="show"
    :on-update:show="(value) => $emit('update:show', value)"
  >
    <div class="card site-card p-4">
      <h1 class="card-title">{{ site.name }}</h1>
      <h2 class="card-subititle mb-2 text-muted">
        {{ site.location_name }} - {{ site.site_type }}
      </h2>
      <div class="card-text h-100">
        {{ site.description }}
      </div>
    </div>
  </n-modal>
</template>

<script>
import { defineComponent } from "vue";
import { NModal } from "naive-ui";

export default defineComponent({
  props: {
    site: {
      type: Object,
      default: undefined,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    NModal,
  },
});
</script>
