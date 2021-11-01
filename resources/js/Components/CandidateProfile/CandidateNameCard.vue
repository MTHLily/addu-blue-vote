<template lang="">
    <div class="card mb-3 text-primary " style="max-width: 540px;" >
        <div class="row g-0">
            <div class="col-md-4">
            <img :src="`${prof.img}`" class="img-fluid rounded-start" :alt="`${prof.name}`">
            </div>
            <div class="col-md-8">
            <div class="card-body position-relative top-50 start-50 translate-middle">
                <h5 class="card-title">{{ prof.name }}</h5>
                <p class="card-text text-muted">{{ prof.partylist }}</p>
                <button type="button" class="btn btn-primary position-absolute bottom-0 end-0 translate-middle-x" style="border-radius: 20px">
                    <a
                    :href="`${prof.refProfile}`"
                    target="_blank"
                    class="text-white text-decoration-none"
                    >
                    KNOW MORE
                    </a>
                </button>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        prof: {
        type: Object,
        default: () => ({
            name:"Default Name",
            img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde? ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            partylist:"Default Partylist",
            refProfile:"",
        }),
        },
    },
}
</script>
<style lang="">
    
</style>