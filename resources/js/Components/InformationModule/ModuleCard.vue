<template lang="">
    <div class="card" style="width: 18rem;">
        <img :src="module.img" class="card-img-top" :alt="module.title">
        <div class="card-body">
            <h5 class="card-title">{{module.title}}</h5>
            <p class="card-text">{{ module.description }}</p>
            <a href="#" target="_blank" class="btn btn-primary text-white text-decoration-none">Learn More...</a>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        module: {
            type: Object,
            default: () => ({
                title: "Default Module Title",
                img: "https://assets.tumblr.com/images/default_header/optica_pattern_01.png",
                description: "Default description",
                
            }),
        },
    },
    
}
</script>
<style lang="">
    
</style>