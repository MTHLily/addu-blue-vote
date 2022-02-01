<template>
  <Head title="Video Resources"></Head>
  <DashboardLayout>
    <div class="flex flex-column container">
      <BlueVoteTable
        :items="video_resources"
        :columns="columns"
        title="Video Resources"
      >
        <template #footer>
          <Link
            class="btn btn-primary m-2 py-2 px-4"
            :href="route('video-resources.create')"
            >Add</Link
          >
        </template>
        <template #actions="{ item }">
          <div class="d-flex justify-content-center">
            <div class="btn-group">
              <Link
                :href="route('video-resources.edit', item.id)"
                class="btn btn-success"
              >
                <i class="bi-pencil-square"></i>
              </Link>
              <DeleteButton
                :item="item"
                route-name="video-resources.destroy"
              />
            </div>
          </div>
        </template>
      </BlueVoteTable>
    </div>
  </DashboardLayout>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import BlueVoteTable from "@/Components/BlueVoteTable.vue";
import DeleteButton from "@/Components/DeleteButton.vue";

export default {
  props: {
    video_resources: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    columns: [
      {
        label: "Title",
        value: "title",
      },
      {
        label: "Description",
        value: "description",
      },
    ],
  }),
  components: { Link, Head, DashboardLayout, BlueVoteTable, DeleteButton },
};
</script>

<style></style>
