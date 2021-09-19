<template>
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

  <div class="container d-flex min-vh-100 my-4 gap-4">
    <aside class="w-25 flex-shrink-0">
      <nav>
        <ul class="list-group">
          <Link
            :href="route('information.index')"
            class="list-group-item list-group-item-action"
            >Information</Link
          >
          <Link
            :href="route('faqs.index')"
            class="list-group-item list-group-item-action"
            >FAQs</Link
          >
          <Link
            :href="route('districts.index')"
            class="list-group-item list-group-item-action"
            >Districts</Link
          >
          <Link
            :href="route('poi.index')"
            class="list-group-item list-group-item-action"
            >Points of Interest</Link
          >
          <Link href="/" class="list-group-item list-group-item-action"
            >Go Back</Link
          >
          <Link href="/logout" as="button" method="post">Log out</Link>
        </ul>
      </nav>
    </aside>
    <div class="flex-grow-1">
      {{ $page.props.flash }}
      <slot />
    </div>
  </div>
</template>

<script>
import { Head, Link } from "@inertiajs/inertia-vue3";
import { Toast } from "bootstrap";

export default {
  components: {
    Head,
    Link,
  },
  data: () => ({ toast: null }),
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
    this.toast = message;
  },
  watch: {
    "$page.props.flash": function () {
      this.toast.show();
    },
  },
};
</script>
