<template>
  <button
    class="btn btn-danger"
    data-bs-toggle="modal"
    :data-bs-target="`#modalDelete-${item.id}`"
    :attrs="$attrs"
  >
    <i class="bi-trash"></i>
  </button>
  <div
    class="modal fade"
    :id="`modalDelete-${item.id}`"
    tabindex="-1"
    :aria-labelledby="`modalDelete-${item.id}`"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header" style="background-color: #dadeee">
          <h5 class="modal-title text-uppercase">
            <i class="bi bi-exclamation-circle-fill" style="color: #dc3545"></i>
            Delete Item
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
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
            as="button"
            class="btn btn-danger"
            method="delete"
            :href="route(routeName, item.id)"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
  components: { Link },
  props: {
    routeName: String,
    item: Object,
  },
});
</script>
