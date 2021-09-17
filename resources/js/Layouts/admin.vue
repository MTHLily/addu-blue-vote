<template>
    <div class="min-vh-100 d-flex flex-column">
        <header>
        <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
            <div class="container-fluid mx-auto">
                <Link class="navbar-brand" href="/">
                    <img :src="image" width="230" height="70" />
                </Link>
            </div>
        </nav>
        </header>
        <main class="mt-4 flex-grow-1">
        <slot></slot>
        </main>
        <footer>
        <slot name="footer">
            <div class="text-center p-3 text-white bg-primary">
            <b>Ateneo de Davao University Blue Vote</b> Copyright © 2021 |
            Developed by <b>ARISEn Lab</b>
            </div>
        </slot>
        </footer>
    </div>
</template>

<script>
import BreezeApplicationLogo from "@/Components/ApplicationLogo.vue";
import { Link } from "@inertiajs/inertia-vue3";
import image from "@/Components/assets/addu-bv-logo.png";

export default {
    components: {
        BreezeApplicationLogo,
        Link,
    },
    data: function () {
        return {
        image: image,
        };
    },
};
</script>

<style lang="css" scoped>
/* ul{
    display: flex;

} */
    .navbar {
        padding-left: 220px;
        padding-right: 220px;
    }
    .dropdown-menu {
        background-color: #08228d;
    }

    .dropdown-item {
        color: white;
    }

    .dropdown-item:hover,
    .dropdown-item:focus {
        color: #dee2e6;
        background-color: #061b71;
    }

    .nav-link {
        color: white;
    }
    .nav-link:hover {
        color: #dee2e6;
    }
</style>
