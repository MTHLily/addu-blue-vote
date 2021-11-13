<template>
    <nav style="--bs-breadcrumb-divider: '>';">
        <ol class="breadcrumb p-2">
            <li
            v-for="(crumb, item) in crumbs"
            :key="item"
            class="breadcrumb-item"
            >
            <button class="btn btn-link text-decoration-none" :class="{ disabled: isLast(item) }" @click="selected(crumb)">
                {{ crumb }} 
            </button>
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    props: {
        crumbs: {
            type: Array,
            required: true,
            default: () => ['Province', 'District', 'Name of Candidate']
        },
    },
    methods: {
        isLast(index) {
            return index === this.crumbs.length - 1;
        },
        selected(crumb) {
            this.$emit('selected', crumb);
        },
    },
};
</script>

<style scoped>
.breadcrumb {
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.37rem;
    line-height: 40px;
}
</style>