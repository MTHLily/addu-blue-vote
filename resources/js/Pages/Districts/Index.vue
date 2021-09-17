<template>
  <Head title="Districts"></Head>

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
              <Link :href="route('districts.create')" class="nav-link"
                >Add District</Link
              >
            </li>
          </ul>
        </div>
      </div>
      <table class="table w-100">
        <thead>
          <th scope="col">District</th>
          <th scope="col">Description</th>
          <th scope="col">Color</th>
          <th scope="col">Actions</th>
        </thead>
        <tbody>
          <tr v-for="district in districts" :key="district.id">
            <td>{{ district.name }}</td>
            <td>{{ district.description }}</td>
            <td>
              <i
                class="bi bi-circle-fill"
                :style="`color: ${district.color}`"
              ></i>
              {{ district.color }}
            </td>
            <td>
              <div class="btn-group">
                <Link
                  :href="route('districts.edit', district.id)"
                  class="btn btn-primary"
                >
                  <i class="bi-pencil-square"></i>
                </Link>
                <Link
                  as="button"
                  method="delete"
                  :href="route('districts.destroy', district.id)"
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
import Toast from "bootstrap/js/dist/toast";
import { Inertia } from "@inertiajs/inertia";

export default {
  props: {
    districts: {
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
  components: { Link, Head, DashboardLayout },
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
  data: () => ({
    toast: null,
  }),
  methods: {
    submitDelete(id) {
      Inertia.delete(route("districts.destroy", id));
    },
  },
};
</script>

<style></style>
