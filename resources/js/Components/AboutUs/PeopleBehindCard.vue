<template>
  <div class="w-full d-flex justify-content-center">
    <a
      v-if="people.link"
      :href="people.link"
      class="w-full d-flex justify-content-center"
    >
      <n-card :bordered="false" class="text-center" style="max-width: 300px">
        <template #header>
          {{ people.name }}
        </template>
        <template #cover>
          <div class="d-flex w-full justify-content-center h-64">
            <img
              class="bluevote-people-img"
              v-bind:src="people.profile_photo?.url || defaultImageUrl"
            />
          </div>
        </template>
      </n-card>
    </a>
    <n-card
      v-else
      :bordered="false"
      class="text-center w-full"
      style="max-width: 300px"
    >
      <template #header>
        <div class="d-flex flex-column">
          <span>{{ people.name }}</span>
          <span v-if="people.position" class="text-muted">
            {{ people.position }}
          </span>
        </div>
      </template>
      <template #cover>
        <div class="d-flex w-full justify-content-center h-64">
          <img
            class="bluevote-people-img"
            v-bind:src="people.profile_photo?.url || defaultImageUrl"
          />
        </div>
      </template>
    </n-card>
  </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";
import { NCard, NAvatar } from "naive-ui";

export default {
  components: { Link, NCard, NAvatar },
  setup() {
    return {
      defaultImageUrl: "/images/adduLogo.png",
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
