<template>
  <div>
    <div class="row d-flex flex-column align-items-center">
      <n-card
        :bordered="false"
        v-bind:title="people.name"
        class="text-center"
        style="max-width: 300px"
      >
        <template #cover>
          <img
            v-bind:src="people.profile_photo?.url || defaultImageUrl"
            class="rounded-circle"
          />
        </template>
      </n-card>
    </div>
  </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";
import { NCard } from "naive-ui";

export default {
  components: { Link, NCard },
  setup() {
    return {
      defaultImageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    };
  },
  props: {
    people: {
      type: Object,
      default: () => ({
        person: "Default Person",
        name: "Default Name",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde? ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      }),
    },
  },
};
</script>
<style lang=""></style>
