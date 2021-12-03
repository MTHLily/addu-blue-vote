<template>
  <Head title="Locations"></Head>
  <DashboardLayout>
    <div class="container flex flex-column">
      <div class="card">
        <BlueVoteTable
          :pagination="locations"
          :columns="columns"
          title="Locations"
        >
          <template #location-color="{ item }">
            <i class="bi bi-circle-fill" :style="{ color: item.color }"></i
            >{{ item.color }}
          </template>
          <template #location-type="{ item }">
            {{ item.type.name }}
          </template>
          <template #location-media="{ item }">
            <div class="d-flex justify-content-center w-100">
              <n-image
                v-for="image in item.media"
                :key="image.key"
                width="50"
                :src="image.original_url"
              />
            </div>
          </template>

          <template #location-parent="{ item }">
            <div v-if="item.parent">
              {{ item.parent.name }}
            </div>
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
  </DashboardLayout>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import { Inertia } from "@inertiajs/inertia";
import BlueVoteTable from "@/Components/BlueVoteTable.vue";
import DeleteButton from "@/Components/DeleteButton.vue";
import { NImage } from "naive-ui";

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
      { value: "slug", label: "Slug" },
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
        slotName: "location-parent",
      },
      {
        value: "color",
        label: "Color",
        slotName: "location-color",
      },
      {
        value: "media",
        label: "Preview Image",
        slotName: "location-media",
      },
    ],
  }),
  components: {
    Link,
    Head,
    DashboardLayout,
    BlueVoteTable,
    DeleteButton,
    NImage,
  },
  methods: {
    submitDelete(id) {
      Inertia.delete(route("locations.destroy", id));
    },
  },
};
</script>

<style></style>
