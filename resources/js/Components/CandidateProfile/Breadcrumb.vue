<template>
  <nav style="--bs-breadcrumb-divider: '>'">
    <ol class="breadcrumb p-2">
      <li
        v-for="(location, item) in locations"
        :key="item"
        class="breadcrumb-item"
      >
        <template v-if="candidate.location">
          <a
            :href="route('candidate-profiles.index')"
            class="text-decoration-none"
            :class="{ disabled: isLast(item) }"
          >
            {{ location.name }}
          </a>
        </template>
        <template v-else>
          <a
            :href="route('candidate-profiles.index')"
            class="text-decoration-none"
            :class="{ disabled: isLast(item) }"
          >
            National
          </a>
        </template>
      </li>
      <li class="breadcrumb-item" aria-current="page">
        <a href="#" class="text-decoration-none">
          {{ candidate.running_position.name }}</a
        >

        <!-- <template v-else-if="candidate.running_position_id='9'">
                    <a href="#" class="text-decoration-none"> Vice-Presidential Candidates </a>
                </template>
                <template v-else-if="candidate.running_position_id='10'">
                    <a href="#" class="text-decoration-none"> Senatorial Candidates </a>
                </template> -->
      </li>
      <li class="breadcrumb-item" aria-current="page">
        <a href="#" class="text-decoration-none"> {{ candidate.name }}</a>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    locations: {
      type: Array,
      required: true,
      default: () => [{}],
    },
    candidate: {
      type: Object,
      default: () => [{}],
    },
    nationalPositions: {
      type: Array,
      default: () => [
        {
          name: "Default Name",
        },
      ],
    },
  },
  methods: {
    isLast(index) {
      return index === this.locations.length - 1;
    },
    selected(location) {
      this.$emit("selected", location);
    },
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
