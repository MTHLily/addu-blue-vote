<template>
  <Head title="Information Modules"></Head>
  <DashboardLayout>
    <div class="flex flex-column container">
      <BlueVoteTable
        :items="information_modules"
        :columns="columns"
        title="Information Modules"
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
            :href="route('information-modules.create')"
            >Add</Link
          >
        </template>
        <template #actions="{ item }">
          <div class="d-flex justify-content-center">
            <div class="btn-group">
              <Link
                :href="route('information-modules.edit', item.id)"
                class="btn btn-success"
              >
                <i class="bi-pencil-square"></i>
              </Link>
              <DeleteButton :item="item" route-name="information-modules.destroy" />
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
    information_modules: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    columns: [
      {
        label: "Description",
        value: "description",
      },
      {
        label: "Featured (NOT DONE)",
        value: "featured",
        slotName: "featured",
      },
    ],
  }),
  components: { Link, Head, DashboardLayout, BlueVoteTable, DeleteButton },
  methods: {
    handleCheckFeatured(item) {
      Inertia.patch(route("information-modules.check", item.id));
    },

    submitDelete(id) {
      Inertia.delete(route("candidates.destroy", id));
      Inertia.delete(route("candidates.unlink_video", id));

    },
  }
};
</script>

<style></style>
