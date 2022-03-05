<template>
  <Head title="Points of Interest"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column h-100 w-75 mx-auto">
      <BlueVoteTable
        title="News Articles"
        :columns="tableColumns"
        :pagination="articles"
      >
        <template #newsTitle="{ item }">
          <td>
            <a :href="item.url">{{ item.title }}</a>
          </td>
        </template>
        <template #newsSource="{ item }">
          <td>
            {{ item.news_source.name }}
          </td>
        </template>
        <template #related-candidates="{ item }">
          <div class="d-flex gap-2">
            <span>{{ item.related_candidates_count }} </span>
            <RelatedCandidates :candidates="item.related_candidates" />
          </div>
        </template>
        <template #actions="{ item }">
          <div class="justify-content-center d-flex">
            <div class="btn-group">
              <DeleteButton
                route-name="news.destroy"
                :item="item"
              ></DeleteButton>
            </div>
          </div>
        </template>
        <template #footer> </template>
      </BlueVoteTable>
    </div>
  </DashboardLayout>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import { Link, Head } from "@inertiajs/inertia-vue3";
import BlueVoteTable from "@/Components/BlueVoteTable.vue";
import DeleteButton from "@/Components/DeleteButton.vue";
import RelatedCandidates from "@/Components/News/RelatedCandidates.vue";

export default defineComponent({
  props: {
    articles: {
      type: Object,
    },
  },
  components: {
    DashboardLayout,
    Link,
    Head,
    BlueVoteTable,
    DeleteButton,
    RelatedCandidates,
  },
  data: () => ({
    tableColumns: [
      {
        label: "Title",
        value: "title",
        slotName: "newsTitle",
      },
      {
        label: "Description",
        value: "description",
      },
      {
        label: "Source",
        value: "news_source_id",
        slotName: "newsSource",
      },
      {
        label: "Related Candidates",
        value: "related_candidates_count",
        slotName: "related-candidates",
      },
      {
        label: "Date",
        value: "date",
      },
    ],
  }),
});
</script>

<style></style>
