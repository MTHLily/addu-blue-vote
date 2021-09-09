<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <!-- <div>
            <Link href="/">
                <BreezeApplicationLogo class="w-20 h-20 fill-current text-gray-500" />
            </Link>
        </div> -->
        <!-- <div class="container"> -->
            <header>
                <!-- We want header content here -->
                <slot name="header">
                    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                    <div class="container-fluid mx-auto">
                        <a class="navbar-brand" href="#">
                            <img src="https://www.addu.edu.ph/wp-content/uploads/2020/08/UniversitySealWhite-1024x1020.png" class="me-2" width="60" height="60">
                            Ateneo de Davao University | Blue Vote
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Voters Registration
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">FAQs</a></li>
                                <li><a class="dropdown-item" href="#">iRehistro</a></li>
                                <li><a class="dropdown-item" href="#">Registration Sites</a></li>
                            </ul>
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Voters Education
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Election Process Information</a></li>
                                <li><a class="dropdown-item" href="#">Election News and Issues</a></li>
                                <li><a class="dropdown-item" href="#">Voters Responsibility and Rights</a></li>
                            </ul>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Candidate's Profile</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Election Results</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                </slot> 
            </header>
            <!-- <main> -->
                <!-- We want main content here -->
                <!-- <slot name="content"></slot> -->
            <!-- </main> -->
            <!-- <footer> -->
                <!-- We want footer content here -->
                <!-- <slot name="footer"></slot> -->
            <!-- </footer> -->
        <!-- </div>   -->
        <!-- <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
           <main><slot></slot></main>
        </div> -->
            <footer> 
            <!-- We want footer content here -->
            <slot name="footer">
                <div class="text-center p-3 text-white bg-primary">
                    <b>Ateneo de Davao University Blue Vote</b> Copyright © 2021 | Developed by <b>ARISEn Lab</b>
                </div>
            </slot>
            </footer>
    </div>
</template>

<script>
import BreezeApplicationLogo from '@/Components/ApplicationLogo.vue'
import { Link } from '@inertiajs/inertia-vue3';


export default {
    components: {
        BreezeApplicationLogo,
        Link,
    }
}
</script>

<style lang="css" scoped>
/* ul{
    display: flex;

} */
.navbar{
    padding-left: 250px;
    padding-right: 250px;
}
</style>