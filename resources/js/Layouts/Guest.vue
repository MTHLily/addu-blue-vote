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
                        <nav class="navbar navbar-expand-lg navbar-dark bg-primary ">
                            <div class="container-fluid bg-primary">
                                <a class="navbar-brand img-fluid" href="#" >
                                    <img class="img-fluid" src="https://www.addu.edu.ph/wp-content/uploads/2020/08/UniversitySealWhite-1080x1076.png" alt="" width="50" height="50">
                                </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto me-auto mb-2 mb-lg-0 justify-content-end">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Voters Registration
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Frequently Asked Questions</a></li>
                                        <li><a class="dropdown-item" href="#">iRehistro</a></li>
                                        <li><a class="dropdown-item" href="#"> Voters Registration Sites</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link  dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-disabled="true">
                                        Voters Education
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Election Process Information</a></li>
                                        <li><a class="dropdown-item" href="#">Election News and Issues</a></li>
                                        <li><a class="dropdown-item" href="#">Voters Responsibility and Rights</a></li>
                                        </ul>
                                    </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Candidates Profile</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Election Results</a>
                                </li>
                                </ul>
                                <!-- <form class="d-flex">
                                <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-outline-success" type="submit">Search</button>
                                </form> -->
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
</style>