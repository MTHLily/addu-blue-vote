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
/* .breadcrumb {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.37rem;
  line-height: 40px;
} */

.breadcrumb {
  border: 1px solid #cbd2d9;
  border-radius: 0.3rem;
  display: inline-flex;
  overflow: hidden;
}

.breadcrumb-item {
  background: #fff;
  color: #333;
  outline: none;
  padding: 0.75em 0.75em 0.75em 1.25em;
  position: relative;
  text-decoration: none;
  transition: background 0.2s linear;
}

.breadcrumb-item:hover:after,
.breadcrumb-item:hover {
  background: #edf1f5;
}

.breadcrumb-item:focus:after,
.breadcrumb-item:focus,
.breadcrumb-item.is-active:focus {
  background: #323f4a;
  color: #fff;
}

.breadcrumb-item:after,
.breadcrumb-item:before {
  background: white;
  bottom: 0;
  clip-path: polygon(50% 50%, -50% -50%, 0 100%);
  content: "";
  left: 100%;
  position: absolute;
  top: 0;
  transition: background 0.2s linear;
  width: 1em;
  z-index: 1;
}

.breadcrumb-item:before {
  background: #cbd2d9;
  margin-left: 1px;
}

.breadcrumb-item:last-child {
  border-right: none;
}

.breadcrumb-item.is-active {
  background: #edf1f5;
}

</style>
