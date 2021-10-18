<template lang="">
    <div>
        <div class="p-3 mb-2 mt-2 mx-2 " style="width: 50%;">
            <div class="card p-3 mb-2" style="border-radius:20px">
                <h5 class="card-title">{{ news.title }}</h5>
                <button class="btn btn-primary btn-sm text-white card-subtitle mb-2 col-6" style="border-radius:20px" :style="{ 'background-color': news.color }"  disabled>{{ news.source }} </button>
                <p class="card-text text-wrap"> {{ news.description }}</p>
                <div class="d-flex justify-content-between">
                    <p class="card-subtitle mb-2 text-muted"> {{ news.date }} </p>
                    <button
                        type="button"
                        class="btn btn-primary"
                        style="border-radius:20px"
                    >
                        <a :href= "`${news.link}`" class="text-white text-decoration-none"> READ MORE </a>
                    </button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    props: {
        news: {
        type: Object,
        default: () => ({
            title: "titleeee",
            source: "ABS-CBN",
            description:"descriptionsssssdescriptionsssssdescriptionsssssdescriptionsssssdescriptionsssssdescriptionsssssdescriptionsssssdescriptionsssssdescriptionsssssdescriptionsssssdescriptionsssssdescriptionsssss",
            date:"Oct 18, 2021",
            link:"https://news.abs-cbn.com/",
            color:'#064205',
        }),
        },
    },

}
</script>

<style lang="">
    
</style>