<template>
  <Head title="Voters' Education">
    <meta
      name="description"
      content="Ateneo Blue Vote is a website dedicated to the election process of the Philippines. Developed by AdDU ARISEn Labs."
    />
    <meta
      name="keywords"
      content="philippines, election, 2022, election news, election process"
    />
  </Head>
  <GuestLayout>
    <div class="container-md overflow-auto">
      <VideoResources
        v-if="featuredVideos.length > 0 || videoResources.data.length > 0"
        :featured="featuredVideos"
        :videos="videoResources"
      />
      <ElectionProcessInfo></ElectionProcessInfo>
      <h1 class="text-primary fw-bold my-5">Election News and Issues</h1>
      <NewsDisplay :articles="articles"></NewsDisplay>
    </div>

    <!-- for information modules -->
      <div class="container mx-auto">
        <h1 class="text-primary fw-bold my-5">Information Modules</h1>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button text-white bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Category 111
              </button>
            </h2>

            <div id="collapseOne" class="accordion-collapse collapse show mx-8" aria-labelledby="headingOne" data-bs-parent="#accordionExamples">
              <h2 class="accordion-header" id="headingOnes">
                <button class="accordion-button text-white bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOnes" aria-expanded="true" aria-controls="collapseOnes">
                  Module Title
                </button>
              </h2>

              <div id="collapseOnes" class="accordion-collapse collapse show mx-12" aria-labelledby="headingOne" data-bs-parent="#accordionExampless">

                <h2 class="accordion-header" id="headingOnes">
                <button class="accordion-button text-white bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOness" aria-expanded="true" aria-controls="collapseOnes">
                  Downloadbles
                </button>
                </h2>

                  <div id="collapseOness" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExampless">
                    <div class="accordion-body">
                      <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula dapibus tincidunt.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula dapibus tincidunt. Mauris id placerat arcu, nec posuere nisl. Donec ut egestas elit, ut scelerisque sapien. Curabitur porta augue at pulvinar convallis. Aliquam iaculis et sem in imperdiet. Nullam quis metus tortor. Nullam sed eros vitae mi ultrices aliquet vel ut tellus. Phasellus egestas elit vehicula aliquam pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus quis neque nibh. Cras laoreet velit eros. <code>sdfsfdsf</code>, Lorem ipsum dolor sit aeros.
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
  </GuestLayout>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import NewsDisplay from "../Components/News/NewsDisplay.vue";
import ElectionProcessInfo from "../Components/ElectionProcessInfo.vue";
import { Head } from "@inertiajs/inertia-vue3";
import GuestLayout from "../Layouts/Guest.vue";
import VideoResources from "@/Components/VideoResources/VideoResources.vue";

export default defineComponent({
  components: {
    NewsDisplay,
    ElectionProcessInfo,
    GuestLayout,
    Head,
    VideoResources,
  },

  props: {
    articles: {
      type: Object,
      default: () => ({}),
    },
    featuredVideos: Array,
    videoResources: Object,
  },
});
</script>

<style>


</style>
