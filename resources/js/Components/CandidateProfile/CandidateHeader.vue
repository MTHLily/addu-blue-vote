<template>
    <!-- <div class="row text-primary align-self-center"> -->
        <div class="card mb-3 text-primary" style="max-width: 100%;">
            <div class="row g-0">
                <div class="col-md-4">
                <img :src="`${candidate.image}`" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body position-relative top-50 start-50 translate-middle">
                    <h1 class="card-title fw-bold lh-sm">{{ candidate.name }}</h1>
                    <h4 class="card-text text-muted">{{candidate.partylist}}</h4>
                    <button type="button" class="btn btn-lg text-white fw-bold lh-sm" style="border-radius: 20px;background-color:#FAA728" active>
                        {{ candidate.position }}
                    </button>
                </div>
                </div>
            </div>
        </div>
    <!-- </div> -->
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