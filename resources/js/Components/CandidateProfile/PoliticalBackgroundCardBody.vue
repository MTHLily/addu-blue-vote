<template lang="">
    <div>
        <h5 class="card-title">
                <span class="badge py-2 px-3 fs-6 bg-primary" style="border-radius: 20px" :style="{ 'background-color': background.color || 'red' }">
                        <!-- {{ background.date }} -->
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
            <ul class="card-text fw-bolder lh-sm">{{background.place}}</ul>
            <ul class="card-text lh-sm mb-3">{{background.description}}</ul>
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
    },
}
</script>
<style lang="">
    
</style>