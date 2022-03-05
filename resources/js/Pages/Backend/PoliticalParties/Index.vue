<template>
  <Head title="Political Parties"></Head>
  <DashboardLayout>
    <div class="flex flex-column container">
      <BlueVoteTable
        :items="political_parties"
        :columns="columns"
        title="Political Parties"
      >
        <template #footer>
          <Link
            class="btn btn-primary m-2 py-2 px-4"
            :href="route('political-parties.create')"
            >Add</Link
          >
        </template>
        <template #actions="{ item }">
          <div class="d-flex justify-content-center">
            <div class="btn-group">
              <Link
                :href="route('political-parties.edit', item.id)"
                class="btn btn-success"
              >
                <i class="bi-pencil-square"></i>
              </Link>
              <DeleteButton
                :item="item"
                route-name="political-parties.destroy"
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
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import BlueVoteTable from "@/Components/BlueVoteTable.vue";
import DeleteButton from "@/Components/DeleteButton.vue";

export default {
  props: {
    political_parties: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    columns: [
      {
        label: "Party",
        value: "name",
      },
    ],
  }),
  components: { Link, Head, DashboardLayout, BlueVoteTable, DeleteButton },
};
</script>

<style></style>
