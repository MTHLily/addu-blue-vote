<template>
  <Head title="News Sources"></Head>
  <DashboardLayout>
    <div class="flex flex-column container">
      <BlueVoteTable
        :items="newsSources"
        :columns="columns"
        title="News Sources"
      >
        <!-- <template #footer>
          <Link
            class="btn btn-primary m-2 py-2 px-4"
            :href="route('news-sources.create')"
            >Add</Link
          >
        </template> -->
        <template #actions="{ item }">
          <div class="d-flex justify-content-center">
            <div class="btn-group">
              <Link
                :href="route('news-sources.edit', item.id)"
                class="btn btn-success"
              >
                <i class="bi-pencil-square"></i>
              </Link>
              <!-- <DeleteButton :item="item" route-name="news-sources.destroy" /> -->
            </div>
          </div>
        </template>
      </BlueVoteTable>
    </div>
  </DashboardLayout>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import BlueVoteTable from "@/Components/BlueVoteTable.vue";
import DeleteButton from "@/Components/DeleteButton.vue";

export default {
  props: {
    newsSources: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    columns: [
      {
        label: "Source",
        value: "name",
      },
      {
        label: "Home URL",
        value: "home_url",
      },
      {
        label: "Color",
        value: "color",
      },
    ],
  }),
  components: { Link, Head, DashboardLayout, BlueVoteTable, DeleteButton },
};
</script>

<style></style>
