<template>
  <Head title="Information Snippets"></Head>

  <DashboardLayout>
    <div class="container flex flex-column">
      <div class="card p-0">
        <div style="overflow-x: auto">
          <BlueVoteTable title="Information" :columns="columns" :items="info">
            <template #info-content="{ item }">
              <MarkdownViewer :content="item.content" />
            </template>
            <template #actions="{ item }">
              <div class="justify-content-center d-flex">
                <div class="btn-group">
                  <div class="p-3">
                    <Link
                      :href="route('information.edit', item.id)"
                      class="btn btn-success"
                    >
                      <i class="bi-pencil-square"></i>
                    </Link>
                  </div>
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
                  <form @submit.prevent="submitDelete(item.id)">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div
                          class="modal-header"
                          style="background-color: #dadeee"
                        >
                          <h5
                            class="modal-title text-uppercase"
                            id="exampleModalLabel"
                          >
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
                          <h6 class="p-3">
                            Are you sure you want to delete item?
                          </h6>
                        </div>
                        <div
                          class="modal-footer"
                          style="background-color: #dadeee"
                        >
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            class="btn btn-danger"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </template>
            <template #footer>
              <Link
                class="btn btn-primary m-2 py-2 px-4"
                :href="route('information.create')"
                >Add</Link
              >
            </template>
          </BlueVoteTable>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import MarkdownViewer from "@/Components/MarkdownViewer.vue";
import { Inertia } from "@inertiajs/inertia";
import BlueVoteTable from "@/Components/BlueVoteTable.vue";

export default {
  props: {
    info: {
      type: Array,
      default: () => [
        {
          id: 0,
          title: "Default Title",
          content: "Defualt Content",
        },
      ],
    },
  },
  components: {
    Link,
    Head,
    DashboardLayout,
    MarkdownViewer,
    BlueVoteTable,
  },
  data: () => ({
    columns: [
      {
        value: "title",
        label: "Title",
        class: "text-center align-middle",
      },
      {
        value: "content",
        label: "Content",
        slotName: "info-content",
      },
    ],
  }),
  methods: {
    submitDelete(id) {
      Inertia.delete(`/dashboard/information/${id}`);
    },
  },
};
</script>

<style></style>
