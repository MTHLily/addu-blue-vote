<template lang="">
    <div class="card text-white mb-3" style="max-width: 100%; background-color:#BF2234">
        <div class="card-header text-center">{{ stance.cardTitle }}</div>
        <div class="d-flex p-3">
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