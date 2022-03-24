<template>
  <Head title="Partner Offices"></Head>
  <DashboardLayout>
    <div class="flex flex-column container">
      <BlueVoteTable
        :items="partner_offices"
        :columns="columns"
        title="Partner Offices"
      >
  
        <template #footer>
          <Link
            class="btn btn-primary m-2 py-2 px-4"
            :href="route('partner-offices.create')"
            >Add</Link
          >
        </template>
        <template #actions="{ item }">
          <div class="d-flex justify-content-center">
            <div class="btn-group">
              <Link
                :href="route('partner-offices.edit', item.id)"
                class="btn btn-success"
              >
                <i class="bi-pencil-square"></i>
              </Link>
              <DeleteButton
                :item="item"
                route-name="partner-offices.destroy"
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
import { Inertia } from "@inertiajs/inertia";
import { ref } from "vue";

export default {
  props: {
    partner_offices: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const columns = [
      {
        label: "Name",
        value: "name",
      },
      {
        label: "Office Link",
        value: "link",
      },
      // {
      //   label: "Position",
      //   value: "position",
      // },
    ];

    return {
      columns,
   
    };
  },
  components: { Link, Head, DashboardLayout, BlueVoteTable, DeleteButton },
};
</script>

<style></style>
