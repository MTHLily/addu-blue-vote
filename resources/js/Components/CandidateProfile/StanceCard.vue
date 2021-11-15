<template lang="">
  <div class="container bg-white mb-3 text-primary p-3" style="max-width: 540px;border-radius: 20px">
    <div class="row g-0">
      <div class="d-flex col-md-4 align-self-center justify-content-center">
        <i class="bi bi-question-circle-fill text-warning display-1 p-3"></i>
      </div>
      <div class="col col-md-8 ps-3">
        <div class="card-body d-flex flex-column h-100">
          <h5 class="card-title">{{ candidate.stances[0].name}}</h5>
          <p class="card-text text-truncate">{{ stance.description }}</p>
          <p class="card-text">
            <small class="text-white">
              <span class="badge bg-primary py-2 px-3 fs-6" style="border-radius: 20px">
                {{ candidate.stances[0].pivot.positive ? "Yes" : "No" }}
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
    candidate:{
      type:Object,
    },
  },
};
</script>
<style lang=""></style>
