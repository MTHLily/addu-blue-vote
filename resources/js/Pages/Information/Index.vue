<template>
  <Head title="Information Snippets"></Head>

    <DashboardLayout>
      <div class="container flex flex-column">
        <div class="card">
          <div class="card-header bg-primary text-white fw-bold">
            Information
          </div>
          <!-- <div class="card-body" style="overflow-x:auto"> -->
          <div style="overflow-x: auto">
            <table
              class="
                table
                w-100
                table
                align-middle
                table-hover table-responsive table-sm
              "
            >
              <thead
                class="text-center align-middle"
                style="background-color: #ccdfff; height: 50px"
              >
                <th scope="col"></th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Actions</th>
              </thead>
              <tbody class="text-center align-middle">
                <tr v-for="title in info" :key="title.id">
                  <td style="width:15%">
                    <div class="btn-group">
                      <div class="p-3">
                        <Link
                          :href="route('information.show',title.id)"
                          class="btn btn-primary"
                        >
                          <i class="bi bi-eye-fill"></i>
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td class="fw-bold">{{ title.title }}</td>
                  <td class="text-truncate fw-bold" style="max-width: 400px">
                    <MarkdownViewer :content="title.content"></MarkdownViewer>
                  </td>
                  <td>
                    <!-- <form @submit.prevent="submitDelete(title.id)"> -->
                      <div class="btn-group">
                        <div class="p-3">
                          <Link
                            :href="`/dashboard/information/${title.id}/edit`"                            
                            class="btn btn-success"
                          >
                            <i class="bi-pencil-square"></i>
                          </Link>
                        </div>
                        <div class="p-3">
                          <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i class="bi-trash"></i>
                          </button>
                        </div>
                      </div>
                      <!-- Modal -->
                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <form @submit.prevent="submitDelete(title.id)">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header" style="background-color:#DADEEE">
                                <h5 class="modal-title text-uppercase" id="exampleModalLabel"><i class="bi bi-exclamation-circle-fill" style="color:#DC3545" ></i> Delete Item</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body text-start" style="height:80px">
                                  <h6 class="p-3">
                                    Are you sure you want to delete item?
                                  </h6>
                              </div>
                              <div class="modal-footer" style="background-color:#DADEEE">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Delete</button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    <!-- </form> -->
                  </td>
                </tr>
              </tbody>
              <td colspan="">
                <div class="card-footer">
                  <div class="bg-primary rounded shadow mb-4">
                    <Link
                      href="/dashboard/information/create"
                      class="nav-link text-white"
                      >Add</Link
                    >
                  </div>
                </div>
              </td>
              <td colspan="11" class="card-footer table-borderless"></td>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import MarkdownViewer from "../../Components/MarkdownViewer.vue";
import { Inertia } from "@inertiajs/inertia";
import AdminLayout from "../../Layouts/admin";

export default {
  props: {
    info: {
      type: Array,
      default: () => [
        {
          id: 0,
          title: "Default Title",
          conrnt: "Defualt Content",
        },
      ],
    },
  },
  components: {
    Link,
    Head,
    DashboardLayout,
    MarkdownViewer,
    AdminLayout,
  },
  methods: {
    submitDelete(id) {
      Inertia.delete(`/dashboard/information/${id}`);
    },
  },
};
</script>

<style></style>
