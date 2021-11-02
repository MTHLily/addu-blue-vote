<template lang="">
    <div class="card text-white mb-3" style="max-width: 100%;" :style="{ 'background-color': background.bgcolor || 'blue' }">
        <div class="card-header fw-bold lh-sm">{{background.heading}}</div>
        <div class="card-body">
            <h5 class="card-title">
                <button type="button" class="btn btn-primary btn-lg" style="border-radius: 20px" :style="{ 'background-color': background.color || 'red' }" active>
                        {{ background.date }}
                </button>
            </h5>
            <ul class="card-text fw-bolder lh-sm">{{background.title}}</ul>
            <ul class="card-text lh-sm">{{background.description}}</ul>
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