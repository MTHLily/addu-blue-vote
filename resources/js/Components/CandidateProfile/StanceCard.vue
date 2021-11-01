<template lang="">
    <div class="col">
        <div class="card h-100">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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