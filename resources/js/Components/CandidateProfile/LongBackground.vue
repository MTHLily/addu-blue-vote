<template lang="">
    <div class="card text-white mb-3" style="max-width: 100%;" :style="{ 'background-color': background.bgcolor || 'blue' }">
        <div class="card-header text-uppercase border-0 fw-bold lh-sm p-3 fs-1" :style="{ 'background-color': background.bgcolor || 'blue' }">{{background.heading}}</div>
        <div class="card-body">
            <h5 class="card-title">
                <span class="badge py-2 px-3 fs-6 bg-primary" style="border-radius: 20px" :style="{ 'background-color': background.color || 'red' }">
                        <!-- {{ background.date }} -->
                    <n-time 
                        :time="candidate.political_background[0].start_date"
                        format="yyyy"
                    /> 
                    -
                    <n-time 
                        :time="candidate.political_background[0].end_date"
                        format="yyyy"
                    /> 
                </span>
            </h5>
            <ul class="card-text fw-bolder lh-sm">{{candidate.political_background[0].place}}</ul>
            <ul class="card-text lh-sm mb-3">{{candidate.political_background[0].description}}</ul>
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
                heading: "POLITICAL BACKGROUND",
                date: "Default date",
                title: "Default source",
                description:"Default description",
                bgcolor: "#FAA728",
                color:"#185EA9",
            }),
        },
        candidate:{
            type:Object,
        },
    },
}
</script>

<style lang="">
    
</style>