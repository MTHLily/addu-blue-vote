<template>
  <div class="table-responsive">
    <table class="table" style="table-layout: fixed">
      <thead>
        <tr v-show="title" class="bg-primary text-white">
          <th :colspan="columns">{{ title }}</th>
        </tr>
        <slot name="header"></slot>
      </thead>
      <tbody>
        <slot name="body"></slot>
      </tbody>
      <tfoot>
        <slot name="footer"></slot>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    columns: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style></style>
