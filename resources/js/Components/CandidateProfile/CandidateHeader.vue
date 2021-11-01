<template>
    <div class="row">
        <div class="card mb-3" style="max-width: 100%;">
            <div class="row g-0">
                <div class="col-md-4">
                <img :src="`${candidate.image}`" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ candidate.name }}</h5>
                    <p class="card-text">{{candidate.partylist}}</p>
                    <button type="button" class="btn btn-primary btn-lg" style="border-radius: 20px" active>
                        {{ candidate.position }}
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        candidate: {
        type: Object,
        default: () => ({
            name: "Default name",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            partylist:"Default partylist",
            position:"Default Position",
        }),
        },
    },
}
</script>

<style lang="">
    
</style>