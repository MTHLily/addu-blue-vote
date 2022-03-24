<template>
  <Head title="Volunteer Process"></Head>
  <DashboardLayout>
    <div class="flex flex-column container">
      <BlueVoteTable
        :draggable-rows="canReorder"
        :on-drag-drop="onReorder"
        :items="steps"
        :columns="columns"
        title="Volunteer Process Steps"
      >
        <template #header-extra>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="changeOrder"
              v-model="canReorder"
            />
            <label class="form-check-label" for="changeOrder">
              Change Order
            </label>
          </div>
        </template>
        <template #footer>
          <Link
            class="btn btn-primary m-2 py-2 px-4"
            :href="route('volunteer-process-steps.create')"
            >Add</Link
          >
        </template>
        <template #actions="{ item }">
          <div class="d-flex justify-content-center">
            <div class="btn-group">
              <Link
                :href="route('volunteer-process-steps.edit', item.id)"
                class="btn btn-success"
              >
                <i class="bi-pencil-square"></i>
              </Link>
              <DeleteButton
                :item="item"
                route-name="volunteer-process-steps.destroy"
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
    steps: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const columns = [
      {
        label: "Title",
        value: "title",
      },
      {
        label: "Description",
        value: "description",
      },
      // {
      //   label: "Position",
      //   value: "position",
      // },
    ];

    const canReorder = ref(false);
    const onReorder = (item1, item2) => {
      Inertia.patch(
        route("volunteer-process-steps.reorder", {
          item1: item1.id,
          item2: item2.id,
        })
      );
    };

    return {
      columns,
      onReorder,
      canReorder,
    };
  },
  components: { Link, Head, DashboardLayout, BlueVoteTable, DeleteButton },
};
</script>

<style></style>
