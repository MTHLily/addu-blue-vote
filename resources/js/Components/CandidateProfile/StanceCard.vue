<template lang="">
    <div class="w-25 text-center bg-white p-3 text-primary" style="border-radius: 20px">
        <img :src="`${stance.image}`" class="card-img-top img-fluid" style="max-width: 15%;" :alt="`${stance.name}`">
        <div class="card-body">
            <h5 class="card-title">{{stance.title}}</h5>
            <p class="card-text text-truncate">{{ stance.description}}</p>
            <p class="card-text">
                <small class="text-white">
                    <button type="button" class="btn btn-primary btn-md" style="border-radius: 20px" active>
                        {{ stance.decision }}
                    </button>
                </small>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        stance: {
        type: Object,
        default: () => ({
            image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Lol_question_mark.png",
            title: "Default name",
            description:"Default Descriptions",
            decision:"No",
        }),
        },
    },
}
</script>
<style lang="">
    
</style>