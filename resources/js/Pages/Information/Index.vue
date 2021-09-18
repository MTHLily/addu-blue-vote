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
    <div class="flex flex-column">
      <div class="navbar navbar-dark bg-primary rounded shadow mb-4">
        <div class="container-fluid">
          <ul class="navbar-nav p-2">
            <li class="nav-item">
              <Link :href="route('information.create')" class="nav-link"
                >Add Information Snippet</Link
              >
            </li>
          </ul>
        </div>
      </div>
      <table class="table w-100">
        <thead>
          <th scope="col">Title</th>
          <th scope="col">Content</th>
          <th scope="col">Actions</th>
        </thead>
        <tbody>
          <tr v-for="title in info" :key="title.id">
            <td>{{ title.title }}</td>
            <td><MarkdownViewer :content="title.content"></MarkdownViewer></td>
            <td>
              <div class="btn-group">
                <Link
                  :href="route('information.edit', title.id)"
                  class="btn btn-primary"
                >
                  <i class="bi-pencil-square"></i>
                </Link>
                <Link
                  as="button"
                  method="delete"
                  :href="route('information.destroy', title.id)"
                  class="btn btn-danger"
                >
                  <i class="bi-trash"></i>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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
  watch: {
    "$page.props.flash": function () {
      this.toast.show();
    },
  },
  mounted() {
    const message = new Toast(this.$refs.messageToast);
    if (this.$page.props.flash.success || this.$page.props.flash.message)
      message.show();
    this.toast = message;
  },
  data: () => ({ toast: null }),
  methods: {
    submitDelete(id) {
      Inertia.delete(`/dashboard/information/${id}`);
    },
  },
};
</script>

<style></style>
