<template>
  <Head title="Districts"></Head>
  <DashboardLayout>
    <div class="container flex flex-column">
      <div class="card">
        <div class="card-header bg-primary text-white fw-bold">Information</div>
        <BlueVoteTable :pagination="locations" :columns="columns">
          <template #location-color="{ item }">
            <i class="bi bi-circle-fill" :style="{ color: item.color }"></i
            >{{ item.color }}
          </template>
          <template #location-type="{ item }">
            {{ item.type.name }}
          </template>
          <template #actions="{ item }">
            <div class="d-flex justify-content-center">
              <div class="btn-group">
                <Link
                  :href="route('locations.edit', item.id)"
                  class="btn btn-success"
                >
                  <i class="bi-pencil-square"></i>
                </Link>
                <DeleteButton :item="item" route-name="locations.destroy" />
              </div>
            </div>
          </template>
          <template #footer>
            <Link
              class="btn btn-primary m-2 py-2 px-4"
              :href="route('locations.create')"
              >Add</Link
            >
          </template>
        </BlueVoteTable>
      </div>
    </div>
    <pre>{{ locations }}</pre>
  </DashboardLayout>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import { Inertia } from "@inertiajs/inertia";
import BlueVoteTable from "@/Components/BlueVoteTable.vue";
import DeleteButton from "@/Components/DeleteButton.vue";

export default {
  props: {
    locations: {
      type: Array,
      default: () => [
        {
          id: 0,
          name: "Default Name",
          description: "Defualt Description",
        },
      ],
    },
  },
  data: () => ({
    columns: [
      { value: "name", label: "Name" },
      {
        value: "description",
        label: "Description",
      },
      {
        value: "type",
        label: "Type",
        slotName: "location-type",
      },
      {
        value: "parent_location_id",
        label: "Parent Location",
      },
      {
        value: "color",
        label: "Color",
        slotName: "location-color",
      },
    ],
  }),
  components: { Link, Head, DashboardLayout, BlueVoteTable, DeleteButton },
  methods: {
    submitDelete(id) {
      Inertia.delete(route("locations.destroy", id));
    },
  },
};
</script>

<style></style>
