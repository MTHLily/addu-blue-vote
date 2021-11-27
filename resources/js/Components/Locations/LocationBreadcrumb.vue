<template>
  <nav style="--bs-breadcrumb-divider: '>'">
    <ol class="breadcrumb p-2">
      <li
        v-for="breadcrumb in breadcrumbs"
        :key="breadcrumb.label"
        class="breadcrumb-item"
      >
        <template v-if="breadcrumb.route">
          <a :href="breadcrumb.route" class="text-decoration-none">
            {{ breadcrumb.label }}
          </a>
        </template>
        <template v-else>
          {{ breadcrumb.label }}
        </template>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    breadcrumbs: Array,
  },
};
</script>

<style scoped>
.breadcrumb {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.37rem;
  line-height: 40px;
}
</style>
