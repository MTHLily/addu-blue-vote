<template lang="">
    <div
        class="card text-white mb-3"
        :style="{ 'background-color': background.bgcolor || '#CE2029' }"
    >
        <div class="card-header text-uppercase border-0 fw-bold lh-sm p-3 fs-1" style="background-color: #CE2029">
        {{ background.heading }}
        </div>
        <div class="card-body">
            <template v-for="professional in candidate.professional_background" :key="professional.id">
                <ProfessionalBackgroundCardBody :background="professional" class="col"></ProfessionalBackgroundCardBody>
            </template>
        </div>
    </div>
</template>

<script>
import {NTime} from 'naive-ui'
import ProfessionalBackgroundCardBody from './ProfessionalBackgroundCardBody.vue'
export default {
components:{NTime, ProfessionalBackgroundCardBody},
props: {
    background: {
    type: Object,
        default: () => ({
            heading: "PROFESSIONAL BACKGROUND",
            title: "default source",
            date: "default date",
            description: "default description",
            bgcolor: "#CE2029",
            color: "#FAA728",
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
