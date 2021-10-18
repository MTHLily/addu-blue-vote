<template lang="">
    <div>
        <div class="p-3 mb-2 mt-2 mx-2" style="width: 50%;">
            <!-- <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ source }}</h6>
                <p class="card-text">{{ description }}</p>
                <p class="card-text">{{ date }}</p>
                <button
                    type="button"
                    class="btn btn-primary"
                >
                    <a href= {{ link }} class="card-text"> READ MORE </a>
                </button>
            </div> -->
            <!-- <div class="card p-3">
                <h5 class="card-title">title</h5>
                <button class="btn btn-primary btn-sm text-white card-subtitle mb-2 col-6" disabled>source </button>
                <p class="card-text text-wrap"> descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription</p>
                <div class="d-flex justify-content-between">
                    <p class="card-subtitle mb-2 text-muted"> date </p>
                    <button
                        type="button"
                        class="btn btn-primary"
                    >
                        <a href= "#" link  class="text-white text-decoration-none" > READ MORE </a>
                    </button>
                </div>
            </div> -->
            <div class="card p-3">
                <h5 class="card-title">{{ news.title }}</h5>
                <button class="btn btn-primary btn-sm text-white card-subtitle mb-2 col-6" disabled>{{ news.source }} </button>
                <p class="card-text text-wrap"> {{ news.description }}</p>
                <div class="d-flex justify-content-between">
                    <p class="card-subtitle mb-2 text-muted"> {{ news.date }} </p>
                    <button
                        type="button"
                        class="btn btn-primary"
                    >
                        <a href="#"  class="text-white text-decoration-none" > READ MORE </a>
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
            description:"descriptionsssss",
            date:"Oct 18,2021",
            // link:"https://news.abs-cbn.com/",
        }),
        },
    },
}
</script>

<style lang="">
    
</style>