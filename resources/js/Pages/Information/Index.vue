<template>
  <Head title="Information Snippets"></Head>

  <AdminLayout>
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
              <tbody>
                <tr v-for="title in info" :key="title.id">
                  <td>
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
                    <form @submit.prevent="submitDelete(title.id)">
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
                          <button class="btn btn-danger">
                            <i class="bi-trash"></i>
                          </button>
                        </div>
                      </div>
                    </form>
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
  </AdminLayout>
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
