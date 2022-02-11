<template>
  <div>
    <NButton
      v-if="candidate.related_articles.length > 0"
      @click="show = true"
      type="primary"
      text
    >
      <NIcon>
        <i class="bi bi-info-circle"></i>
      </NIcon>
    </NButton>
    <NModal
      v-model:show="show"
      title="Related Articles"
      preset="card"
      class="w-screen max-w-screen-md"
    >
      <div class="row row-cols-1 row-cols-md-2">
        <div
          v-for="article in candidate.related_articles"
          :key="article.id"
          class="d-flex gap-2 col mb-2"
        >
          <span class="w-20">{{ article.date }}</span>
          <a class="flex-grow" :href="article.url" target="_blank">
            {{ article.title }}
          </a>
          <NButton
            @click="unlinkArticle(article)"
            type="error"
            text
            class="text-lg"
          >
            <NIcon>
              <i class="bi bi-eraser"></i>
            </NIcon>
          </NButton>
        </div>
      </div>
    </NModal>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { NModal, NIcon, NButton, useDialog } from "naive-ui";
import { Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";

export default defineComponent({
  components: { NModal, NIcon, NButton, Link },
  props: {
    candidate: {
      type: Object,
      default: [],
    },
  },
  setup(props) {
    const show = ref(false);
    const dialog = useDialog();

    const unlinkArticle = (article) => {
      dialog.warning({
        title: "Unlinking Article",
        content: `Are you sure you want to remove the article:\n${article.title}\n from ${props.candidate.name}'s profile?`,
        positiveText: "Yes, I am sure.",
        onPositiveClick: () => {
          Inertia.patch(
            route("candidates.unlink-article", {
              candidate: props.candidate.id,
              article: article.id,
            })
          );
        },
      });
    };

    return {
      show,
      unlinkArticle,
    };
  },
});
</script>
