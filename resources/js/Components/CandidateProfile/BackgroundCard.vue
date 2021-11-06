<template lang="">
  <div
    class="card text-white mb-3"
    :style="{ 'background-color': background.bgcolor || 'blue' }"
  >
    <div class="card-header text-uppercase border-0 bg-primary fw-bold lh-sm p-3 fs-1">
      {{ background.heading }}
    </div>
    <div class="card-body">
      <h5 class="card-title">
        <!-- <button type="button" class="btn btn-primary btn-lg" style="border-radius: 20px" :style="{ 'background-color': background.color || 'red' }" active>
                        {{ background.date }}
                </button> -->
        <span
          class="badge py-2 px-3 fs-6"
          :style="{
            'background-color': background.color || 'red',
            'border-radius': '20px',
          }"
        >
          {{ background.date }}
        </span>
      </h5>
      <ul class="card-text mb-3">
        {{
          background.description
        }}
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: Object,
      default: () => ({
        heading: "DEFAULT BACKROUND",
        date: "default date",
        title: "default source",
        description: "default description",
        bgcolor: "#2365A1",
        color: "#CE2029",
      }),
    },
  },
};
</script>

<style lang=""></style>
