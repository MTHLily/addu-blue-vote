<template>
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
        </ul>
      </nav>
    </aside>
    <div class="flex-grow-1">
      <slot />
    </div>
  </div>
</template>

<script>
import { Head, Link } from "@inertiajs/inertia-vue3";

export default {
  components: {
    Head,
    Link,
  },
};
</script>
