<template lang="">
    <div class="card text-white mb-3" style="max-width: 100%; background-color:#BF2234">
        <div class="card-header text-center">{{ stance.cardTitle }}</div>
        <div class="row col-12 d-flex m-2 justify-content-evenly row-cols-1 row-cols-sm-1 row-cols-md-6 row-cols-lg-12 "> 
                <StanceCard></StanceCard>
                <StanceCard></StanceCard>
                <StanceCard></StanceCard>
                <StanceCard></StanceCard>
        </div>
    </div>
</template>
<script>
import StanceCard from "./StanceCard.vue"
export default {
    components: {
        StanceCard,
    },
    props: {
        stance: {
        type: Object,
        default: () => ({
            cardTitle: "DEFAULT NAME",
        }),
        },
    },
}
</script>
<style lang="">
    
</style>