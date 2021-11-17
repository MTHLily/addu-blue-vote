<template lang="">
  <div
    class="card text-white mb-3"
    :style="{ 'background-color': background.bgcolor || 'blue' }"
  >
    <div class="card-header text-uppercase border-0 bg-primary fw-bold lh-sm p-3 fs-1">
      {{ background.heading }}
    </div>
    <div class="card-body">
      <template v-for="education in candidate.educational_background" :key="education.id">
        <EducationalBackgroundCardBody :background="education" class="col"></EducationalBackgroundCardBody>
    </template>
      
    </div>
  </div>
</template>

<script>
import {NTime} from 'naive-ui'
import EducationalBackgroundCardBody from './EducationalBackgroundCardBody.vue'

export default {
  components:{NTime,EducationalBackgroundCardBody},
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
