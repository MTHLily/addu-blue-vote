<template>
  <Head title="Information Snippets"></Head>

  <div
    class="position-fixed mt-4 start-50 translate-middle"
    style="z-index: 11"
  >
    <div
      class="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      ref="messageToast"
    >
      <div class="toast-header">
        <i class="me-1" :class="toastMessage.icon"></i>
        <strong class="me-auto">{{ toastMessage.title }}</strong>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">{{ toastMessage.message }}</div>
    </div>
  </div>

  <DashboardLayout>
    <div class="container flex flex-column">
      <div class="card">
        <div class="card-header bg-primary text-white fw-bold" >
          Information
        </div>
        <!-- <div class="card-body" style="overflow-x:auto"> -->
        <div style="overflow-x:auto">
          <table class="table w-100 table align-middle table-hover table-responsive table-sm">
            <thead class="text-center  align-middle" style="background-color: #CCDFFF; height: 50px;">
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
                          :href="`/dashboard/information/${title.id}/edit`"
                          class="btn btn-primary"
                        >
                          <i class="bi bi-eye-fill"></i>
                        </Link>
                      </div>
                  </div>
                </td>
                <td class="fw-bold">{{ title.title }}</td>
                <td class="text-truncate fw-bold" style="max-width: 400px;">
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
              <div class="card-footer" >
                  <div class="bg-primary rounded shadow mb-4 ">
                    <Link href="/dashboard/information/create" class="nav-link text-white">Add</Link>
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
import Toast from "bootstrap/js/dist/toast";
import { Inertia } from "@inertiajs/inertia";

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
  },
  computed: {
    toastMessage() {
      return {
        icon: this.$page.props.flash.success
          ? "bi-check-circle text-success"
          : "bi-exclamation-circle text-warning",
        title: this.$page.props.flash.success ? "Success" : "Warning",
        message:
          this.$page.props.flash.success || this.$page.props.flash.message,
      };
    },
  },
  mounted() {
    const message = new Toast(this.$refs.messageToast);
    if (this.$page.props.flash.success || this.$page.props.flash.message)
      message.show();
  },
  methods: {
    submitDelete(id) {
      Inertia.delete(`/dashboard/information/${id}`);
    },
  },
};
</script>

<style></style>
