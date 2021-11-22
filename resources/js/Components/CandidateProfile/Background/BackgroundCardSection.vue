<template lang="">
  <div>
    <h5 class="card-title">
      <span
        class="badge py-2 px-3 fs-6"
        :style="{
          'background-color': secondaryColor || '#CE2029',
          'border-radius': '20px',
        }"
      >
        <n-time :time="background.start_date" format="yyyy" />
        -
        <n-time :time="background.end_date" format="yyyy" />
      </span>
    </h5>
    <ul class="card-text mb-3 fw-bold">
      {{
        background.place
      }}
      <ul class="card-text mb-3 fw-normal">
        {{
          background.description
        }}
      </ul>
    </ul>
  </div>
</template>
<script>
import { NTime } from "naive-ui";

export default {
  components: { NTime },
  props: {
    primaryColor: String,
    secondaryColor: String,
    background: {
      type: Object,
      default: () => ({
        title: "default source",
        date: "default date",
        description: "default description",
        bgcolor: "#2365A1",
        color: "#CE2029",
      }),
    },
  },
};
</script>
