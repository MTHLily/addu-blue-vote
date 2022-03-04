<template lang="">
    <!-- for information modules -->
    <div class="container mx-auto">
    <h1 class="text-primary fw-bold my-5">Information Modules</h1>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button text-white bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#catCollapse" aria-expanded="true" aria-controls="catCollapse">
                {{ category.title }}
                </button>
            </h2>

                <div id="catCollapse" class="accordion-collapse collapse show mx-8 row row-cols-1 row-cols-sm-2 row-cols-md-3" aria-labelledby="headingOne" data-bs-parent="#accordionExamples">
                    <!-- <template v-for="mod in modules" :key="mod.id"> -->
                        <div class="col">
                            <ModuleCard class="m-3" :mod="mod"></ModuleCard>
                        </div>
                    <!-- </template> -->
                    <!-- <div class="col">
                        <ModuleCard class="m-3" :mod="mod"></ModuleCard>
                    </div> -->
                </div>
        </div>
        
        

        
    </div>
    </div>
</template>

<script>
import ModuleCard from './ModuleCard.vue'

export default {
    props:{
        category: {
            type: Object,
            default: () => ({
                title: "Default Category Title",
            }),
        },
        modules: {
            type: Object,
            default: () => ({
                title: "Default Module Title",
                img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde? ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
                description: "Default description",
            }),
        },
    },
    components: {
        ModuleCard,
    },
}

</script>
<style lang="">
    
</style>