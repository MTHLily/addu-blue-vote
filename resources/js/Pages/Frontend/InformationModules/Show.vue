<template>
  <!-- for information modules -->
  <CandidateProfileLayout>
    <div class="container mx-auto">
      <Breadcrumb :breadcrumbs="breadcrumbs" />
      <h1 class="text-primary fw-bold my-4">{{ information_module.title }}</h1>
      <!-- image header -->
      <div class="container">
        <h2>Description</h2>
        <p class="p-3">{{ information_module.description }}</p>
      </div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button text-white bg-primary fs-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Downloadables
            </button>
          </h2>

          <div
            id="collapseOne"
            class="accordion-collapse collapse show mx-8 gap-3"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExamples"
          >
            <ul class="list-group my-4">
              <template
                v-for="downloadable in information_module.downloadables"
                :key="downloadable.id"
              >
                <li class="list-group-item">
                  <a :href="downloadable.url" class="text-decoration-none">
                    <MimeTypeIcon :mime-type="downloadable.mime_type" />
                    {{ downloadable.file_name }}
                  </a>
                </li>
              </template>
            </ul>
            <!-- </template> -->
          </div>
        </div>
      </div>
      <!-- Related videos -->
      <div v-if="videos?.total > 0">
        <div class="mt-3">
          <span class="badge bg-danger w-100 p-3 fs-4"> Related Videos </span>
        </div>
        <div class="container">
          <VideoResources :videos="videos" no-featured no-title />
        </div>
      </div>
    </div>
  </CandidateProfileLayout>
</template>

<script>
import VideoResources from "@/Components/VideoResources/VideoResources.vue";
import CandidateProfileLayout from "@/Layouts/CandidateProfileLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";
import Breadcrumb from "@/Components/Common/Breadcrumb.vue";
import { defineComponent } from "vue";
import MimeTypeIcon from "@/Components/Common/MimeTypeIcon.vue";

export default defineComponent({
  components: {
    VideoResources,
    CandidateProfileLayout,
    Link,
    Breadcrumb,
    MimeTypeIcon,
  },
  props: {
    information_module: {
      type: Object,
      default: () => ({
        title: "Default Module Title",
        img: "https://assets.tumblr.com/images/default_header/optica_pattern_01.png",
        description:
          "Header Module Description  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        icon: "🎬 ",
        file: "default.file",
      }),
    },
    videos: {
      type: Object,
      default: null,
    },
  },
  setup(props) {
    const breadcrumbs = [
      {
        label: "Information Modules",
        route: route("modules.index"),
      },
      {
        label: props.information_module.title,
      },
    ];

    return {
      breadcrumbs,
    };
  },
});
</script>
