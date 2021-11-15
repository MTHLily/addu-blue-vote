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
          <n-time 
            :time="candidate.educational_background[0].start_date"
            format="yyyy"
          /> 
          -
          <n-time 
            :time="candidate.educational_background[0].end_date"
            format="yyyy"
          /> 
          <!-- {{candidate.educational_background[0].start_date }}- {{ candidate.educational_background[0].end_date }} -->
          <!-- {{ candidate.educational_background[`${candidate.id}`].end_date }} -->
        </span>
      </h5>
      <ul class="card-text mb-3 fw-bold">
        {{candidate.educational_background[0].place}}
        <ul class="card-text mb-3 fw-normal">
          {{candidate.educational_background[0].description}}
        </ul>
      </ul>
      
    </div>
  </div>
</template>

<script>
import {NTime} from 'naive-ui'

export default {
  components:{NTime},
  props: {
    background: {
      type: Object,
      default: () => ({
        heading: "EDUCATIONAL BACKGROUND",
        title: "default source",
        date: "default date",
        description: "default description",
        bgcolor: "#2365A1",
        color: "#CE2029",
      }),
    },
    candidate:{
      type:Object,
      default:()=>({
        id:1,
      })
    }
  },
};
</script>

<style lang=""></style>
