<template>
    <div>
        <ul>
            <li class="btn btn-primary">{{ faqs.question }}</li>
            <li>{{ faqs.answer }}</li>
        </ul>
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
