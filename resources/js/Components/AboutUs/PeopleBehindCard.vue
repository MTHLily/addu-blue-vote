<template>
    <div class="m-3 text-primary bg-white">
        <div class="row g-0">
        <n-card 
            :bordered="false" 
            v-bind:title="people.name" 
            class="text-center"
            style="max-width:270px"
        >
            <template #cover>
                <img v-bind:src="people.img"/> 
            </template>
        </n-card>
        <!-- <div class="col col-md-4">
            <img v-bind:src="people.img"/> 
        </div>
        <div class="col col-md-8">
            <div class="card-body d-flex flex-column h-100">
                <h5 class="card-title text-uppercase fw-bold lh-sm">
                    {{ people.name }}
                </h5>
            </div>
        </div>
            <div class="card-action"></div> -->
        </div>
    </div>
</template>
<script>
import { Link } from "@inertiajs/inertia-vue3";
import { NCard } from "naive-ui";

export default {
    components: { Link, NCard },
    props: {
        people: {
        type: Object,
        default: () => ({
            person: "Default Person",
            name: "Default Name",
            img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde? ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        }),
        },
    },
};
</script>
<style lang=""></style>
