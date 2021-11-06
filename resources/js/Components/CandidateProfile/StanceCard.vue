<template lang="">
  <div class="card m-3 text-primary" style="max-width: 540px">
    <div class="row g-0">
      <div class="col col-md-4">
        <i class="bi bi-question-circle-fill text-warning display-3 p-3"></i>
      </div>
      <div class="col col-md-8 ps-3">
        <div class="card-body d-flex flex-column h-100">
          <h5 class="card-title">{{ stance.title }}</h5>
          <p class="card-text text-truncate">{{ stance.description }}</p>
          <p class="card-text">
            <small class="text-white">
              <span class="badge bg-primary py-2 px-3 fs-6" style="border-radius: 20px">
                {{ stance.decision ? "Yes" : "No" }}
              </span>
            </small>
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- <div
    class="text-center bg-white p-3 text-primary m-2"
    style="border-radius: 20px"
  >
    <i class="bi bi-question-circle-fill text-warning display-3"></i>
    <div class="card-body">
      <h5 class="card-title">{{ stance.title }}</h5>
      <p class="card-text text-truncate">{{ stance.description }}</p>
      <p class="card-text">
        <small class="text-white">
          <span class="badge bg-primary py-2 px-3 fs-6" style="border-radius: 20px">
            {{ stance.decision ? "Yes" : "No" }}
          </span>
        </small>
      </p>
    </div>
  </div> -->
</template>
<script>
export default {
  props: {
    stance: {
      type: Object,
      default: () => ({
        title: "Default name",
        description: "Default Descriptions",
        decision: false,
      }),
    },
  },
};
</script>
<style lang=""></style>
