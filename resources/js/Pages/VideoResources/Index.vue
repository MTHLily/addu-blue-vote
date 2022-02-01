<template>
  <Head title="Video Resources"></Head>
  <DashboardLayout>
    <div class="flex flex-column container">
      <BlueVoteTable
        :items="video_resources"
        :columns="columns"
        title="Video Resources"
      >
        <template #featured="{ item }">
          <div
            class="form-check h-100 w-100 d-flex justify-center align-items-center"
          >
            <input
              class="form-check-input"
              type="checkbox"
              v-model="item.featured"
              @click.prevent="handleCheckFeatured(item)"
              id="flexCheckDefault"
            />
          </div>
        </template>
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
              <DeleteButton :item="item" route-name="video-resources.destroy" />
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
import { Inertia } from "@inertiajs/inertia";

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
      {
        label: "Featured",
        value: "featured",
        slotName: "featured",
      },
    ],
  }),
  components: { Link, Head, DashboardLayout, BlueVoteTable, DeleteButton },
  methods: {
    handleCheckFeatured(item) {
      Inertia.patch(route("video-resources.check", item.id));
    },
  },
};
</script>

<style></style>
