<template>
  <div class="table-responsive">
    <table class="table rounded m-0" style="table-layout: fixed">
      <thead>
        <tr v-show="title" class="bg-primary text-white">
          <th :colspan="columns.length + 1">{{ title }}</th>
        </tr>
        <tr class="bg-info text-black text-center">
          <th v-for="column in columns" :key="column.value">
            {{ column.label }}
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, ind) in items" :key="ind">
          <tr>
            <template v-for="column in columns" :key="column.value">
              <td v-if="!column.slotName" :class="column.class">
                {{ item[column.value] }}
              </td>
              <td v-else>
                <slot :name="column.slotName" :item="item"></slot>
              </td>
            </template>
            <td>
              <slot name="actions" :item="item"></slot>
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot class="bg-light">
        <tr>
          <td :colspan="columns.length + 1">
            <slot name="footer"></slot>
          </td>
        </tr>
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
      type: Array,
      default: [],
    },
    items: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style></style>
