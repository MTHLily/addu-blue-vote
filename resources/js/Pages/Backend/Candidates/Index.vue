<template>
  <Head title="Candidates"></Head>

  <DashboardLayout>
    <div class="container flex flex-column">
      <div class="card p-0">
        <div style="overflow-x: auto">
          <BlueVoteTable
            title="Candidates"
            :columns="columns"
            :items="candidates"
          >
            <template #actions="{ item }">
              <div class="justify-content-center d-flex">
                <div class="btn-group">
                  <Link
                    :href="route('candidates.edit', item.id)"
                    class="btn btn-success"
                  >
                    <i class="bi-pencil-square"></i>
                  </Link>
                  <DeleteButton
                    route-name="candidates.destroy"
                    :item="item"
                  ></DeleteButton>
                </div>
              </div>
            </template>
            <template #related-articles="{ item }">
              <div class="d-flex gap-2">
                <span>{{ item.related_articles_count }} </span>
                <RelatedArticles :candidate="item" />
              </div>
            </template>
            <template #footer>
              <Link
                class="btn btn-primary m-2 py-2 px-4"
                :href="route('candidates.create')"
                >Add</Link
              >
            </template>
          </BlueVoteTable>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import { Inertia } from "@inertiajs/inertia";
import BlueVoteTable from "@/Components/BlueVoteTable.vue";
import DeleteButton from "@/Components/DeleteButton.vue";
import RelatedArticles from "@/Components/Candidates/RelatedArticles.vue";

export default {
  props: {
    candidates: {
      type: Array,
      default: () => [
        {
          id: 0,
        },
      ],
    },
  },
  components: {
    Link,
    Head,
    DashboardLayout,
    BlueVoteTable,
    DeleteButton,
    RelatedArticles,
  },
  data: () => ({
    columns: [
      {
        value: "name",
        label: "Name",
        class: "text-center align-middle",
      },
      {
        value: "slug",
        label: "Slug",
        class: "text-center align-middle",
      },
      {
        value: "id",
        label: "Related Articles",
        slotName: "related-articles",
      },
    ],
  }),
  methods: {
    submitDelete(id) {
      Inertia.delete(route("candidates.destroy", id));
    },
  },
};
</script>

<style></style>
