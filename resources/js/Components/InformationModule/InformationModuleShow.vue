<template lang="">
    <!-- for information modules -->
    <div class="container mx-auto">
        <!-- modules -->
        <InfoModule />
        <!-- module show -->
        <h1 class="text-primary fw-bold my-5">Information Modules > {{ module.title }}</h1>
        <!-- image header -->
        <div class="container">
            <img :src="module.img" class="img-fluid" alt="">
            <p class="p-3">{{module.description}}</p>
        </div>
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button text-white bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Downloadables
                    </button>
                </h2>

                <div id="collapseOne" class="accordion-collapse collapse show mx-8 gap-3" aria-labelledby="headingOne" data-bs-parent="#accordionExamples">
                    <!-- <template v-for="mod in modules" :key="mod.id"> -->
                        <a href="" target="_blank" class="text-decoration-none p-2">
                            <h2 class="accordion-header text-primary bg-warning " id="headingOnes">
                                <!-- 🎬 Video.mp4 -->
                                {{ module.icon }}{{ module.file }}
                            </h2>
                        </a>
                    <!-- </template> -->
                </div>
            </div>
        </div>
        <!-- Related videos -->
        
    </div>

</template>

<script>
import InfoModule from './InformationModules.vue'

export default {
    components: {
        InfoModule,
    },
    props:{
        module: {
            type: Object,
            default: () => ({
                title: "Default Module Title",
                img: "https://assets.tumblr.com/images/default_header/optica_pattern_01.png",
                description: "Header Module Description  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                icon:"🎬 ",
                file:"default.file"
            }),
        },
    },
}

</script>
<style lang="">
    
</style>