// TODO:fix bg color  
<template lang="">
    <div>
        <h5 class="card-title">
            <span
            class="badge py-2 px-3 fs-6"
            :style="{
                'background-color': background.color || '#FAA728',
                'border-radius': '20px',
            }"
            >
            <n-time 
                :time="background.start_date"
                format="yyyy"
            /> 
            -
            <n-time 
                :time="background.end_date"
                format="yyyy"
            /> 
            </span>
        </h5>
        <ul class="card-text mb-3 fw-bold">
            {{background.place}}
            <ul class="card-text mb-3 fw-normal">
            {{background.description}}
            </ul>
        </ul>
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
            bgcolor: "#CE2029",
            color: "#FAA728",
        }),
        },
    },
}
</script>
<style lang="">
    
</style>