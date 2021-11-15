<template lang="">
    <div
        class="card text-white mb-3"
        :style="{ 'background-color': background.bgcolor || 'red' }"
    >
        <div class="card-header text-uppercase border-0 fw-bold lh-sm p-3 fs-1" style="background-color:#CE2029">
        {{ background.heading }}
        </div>
        <div class="card-body">
        <h5 class="card-title">
            <span
            class="badge py-2 px-3 fs-6"
            :style="{
                'background-color': background.color || 'yellow',
                'border-radius': '20px',
            }"
            >
            <n-time 
                :time="candidate.professional_background[0].start_date"
                format="yyyy"
            /> 
            -
            <n-time 
                :time="candidate.professional_background[0].end_date"
                format="yyyy"
            /> 
            </span>
        </h5>
        <ul class="card-text mb-3 fw-bold">
            {{candidate.professional_background[0].place}}
            <ul class="card-text mb-3 fw-normal">
            {{candidate.professional_background[0].description}}
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
