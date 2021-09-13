<template>
    <div id="FAQs">
        <div class="container p-5">
            <div class="row">
                <div class="col-3 mx-auto text-primary">
                    <div>VOTERS REGISTRATION</div>
                    <div class="h1 fw-bolder">FAQs</div>
                </div>                        
                <div class="col-9 d-flex flex-column">
                    <p>
                        <a class="btn btn-primary me-3" data-bs-toggle="collapse" href="#faq1" role="button" aria-expanded="false" aria-controls="faq1">
                            +
                        </a>
                        <button class="btn btn-primary w-75" style="text-align:left" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="collapseExample">
                            Who’s eligible to register?
                        </button>
                    </p>
                    <div class="collapse" id="faq1">
                        <div class="card card-body w-75">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Et pharetra pharetra massa massa ultricies mi quis hendrerit. Interdum posuere lorem ipsum dolor.
                        </div>
                    </div>

                    <p>
                        <a class="btn btn-primary me-3" data-bs-toggle="collapse" href="#faq2" role="button" aria-expanded="false" aria-controls="faq2">
                            +
                        </a>
                        <button class="btn btn-primary w-75" style="text-align:left" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="collapseExample">
                            If I registered in the 2019 elections, should I register again?
                        </button>
                    </p>
                    <div class="collapse" id="faq2">
                        <div class="card card-body w-75">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Et pharetra pharetra massa massa ultricies mi quis hendrerit. Interdum posuere lorem ipsum dolor.
                        </div>
                    </div>

                    <p>
                        <a class="btn btn-primary me-3" data-bs-toggle="collapse" href="#faq3" role="button" aria-expanded="false" aria-controls="faq3">
                            +
                        </a>
                        <button class="btn btn-primary w-75" style="text-align:left" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="collapseExample">
                            Can I register online?
                        </button>
                    </p>
                    <div class="collapse" id="faq3">
                        <div class="card card-body w-75">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Et pharetra pharetra massa massa ultricies mi quis hendrerit. Interdum posuere lorem ipsum dolor.
                        </div>
                    </div>

                    <p>
                        <a class="btn btn-primary me-3" data-bs-toggle="collapse" href="#faq4" role="button" aria-expanded="false" aria-controls="faq4">
                            +
                        </a>
                        <button class="btn btn-primary w-75" style="text-align:left" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="collapseExample">
                            What are the requirements needed by the COMELEC local office?
                        </button>
                    </p>
                    <div class="collapse" id="faq4">
                        <div class="card card-body w-75">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Et pharetra pharetra massa massa ultricies mi quis hendrerit. Interdum posuere lorem ipsum dolor.
                        </div>
                    </div>

                    <p>
                        <a class="btn btn-primary me-3" data-bs-toggle="collapse" href="#faq5" role="button" aria-expanded="false" aria-controls="faq5">
                            +
                        </a>
                        <button class="btn btn-primary w-75" style="text-align:left" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" aria-expanded="false" aria-controls="collapseExample">
                            Which IDs can I use for voter registration?
                        </button>
                    </p>
                    <div class="collapse" id="faq5">
                        <div class="card card-body w-75">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Et pharetra pharetra massa massa ultricies mi quis hendrerit. Interdum posuere lorem ipsum dolor.
                        </div>
                    </div>

                </div>               
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // props: {
    //     faqs: {
    //         type: Array,
    //         default: () => [
    //             {
    //                 question: "default question",
    //                 answer: "default answer",
    //             },
    //         ],
    //     },
    // },
};
</script>

<style>
    .card-body{
        margin-left:52px;
        margin-bottom:15px;
    }

    :target{
        padding-top:90px; 
        margin-top:-90px;
    }

    #FAQs{
        margin-left:150px;
    }
</style>
