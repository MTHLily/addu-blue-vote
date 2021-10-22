<template>
  <Head title="Points of Interest"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column h-100 w-75 mx-auto">
      <BlueVoteTable
        title="News Articles"
        :columns="tableColumns"
        :pagination="articles"
      >
        <template #newsTitle="{ item }">
          <td>
            <a :href="item.url">{{ item.title }}</a>
          </td>
        </template>
        <template #newsSource="{ item }">
          <td>
            {{ item.news_source.name }}
          </td>
        </template>
        <template #actions="{ item }">
          <div class="justify-content-center d-flex">
            <div class="btn-group">
              <div class="p-3">
                <button
                  class="btn btn-danger"
                  data-bs-toggle="modal"
                  :data-bs-target="`#modalDelete${item.id}`"
                >
                  <i class="bi-trash"></i>
                </button>
              </div>
            </div>
            <!-- Modal -->
            <div
              class="modal fade"
              :id="`modalDelete${item.id}`"
              tabindex="-1"
              :aria-labelledby="`modalDelete${item.id}`"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header" style="background-color: #dadeee">
                    <h5 class="modal-title text-uppercase">
                      <i
                        class="bi bi-exclamation-circle-fill"
                        style="color: #dc3545"
                      ></i>
                      Delete Item
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body text-start" style="height: 80px">
                    <h6 class="p-3">Are you sure you want to delete item?</h6>
                  </div>
                  <div class="modal-footer" style="background-color: #dadeee">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <Link
                      :href="route('news.destroy', item.id)"
                      method="delete"
                      as="button"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Delete
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template #footer> </template>
      </BlueVoteTable>
    </div>
  </DashboardLayout>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import { Link, Head } from "@inertiajs/inertia-vue3";
import BlueVoteTable from "../../Components/BlueVoteTable.vue";

export default defineComponent({
  props: {
    articles: {
      type: Object,
    },
  },
  components: {
    DashboardLayout,
    Link,
    Head,
    BlueVoteTable,
  },
  data: () => ({
    tableColumns: [
      {
        label: "Title",
        value: "title",
        slotName: "newsTitle",
      },
      {
        label: "Description",
        value: "description",
      },
      {
        label: "Source",
        value: "news_source_id",
        slotName: "newsSource",
      },
      {
        label: "Date",
        value: "date",
      },
    ],
  }),
});
</script>

<style></style>
