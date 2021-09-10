<template>
    <div>
        <h1>FAQ Admin Edit Page</h1>
        <ul>
            <li >{{ faqs.question }}</li>
            <li>{{ faqs.answer }}</li>
        </ul>
    </div>
    <div
        id="carouselExampleControlsNoTouching"
        class="carousel slide"
        data-bs-touch="false"
        data-bs-interval="false"
    >
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img
                    src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                    class="d-block w-100"
                    alt="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                />
            </div>
            <div class="carousel-item">
                <img
                    src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                    class="d-block w-100"
                    alt="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                />
            </div>
            <div class="carousel-item">
                <img
                    src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                    class="d-block w-100"
                    alt="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                />
            </div>
        </div>
        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        faqs: {
            type: Array,
            default: () => [
                {
                    question: "default question",
                    answer: "default answer",
                },
            ],
        },
    },
};
</script>

<style></style>
