<template lang="">
    <div class="card text-white mb-3" style="max-width: 18rem;" :style="{ 'background-color': background.bgcolor || 'blue' }">
        <div class="card-header">{{background.heading}}</div>
        <div class="card-body">
            <h5 class="card-title">
                <button type="button" class="btn btn-primary btn-lg" style="border-radius: 20px" :style="{ 'background-color': background.color || 'red' }" active>
                        {{ background.date }}
                </button>
            </h5>
            <ul class="card-text">{{background.description}}</ul>
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
                date: "default date",
                title: "default source",
                description:"default description",
                bgcolor: "#2365A1",
                color:"#CE2029",
            }),
        },
    },
}
</script>

<style lang="">
    
</style>