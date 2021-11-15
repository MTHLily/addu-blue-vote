<template>
  <n-tree-select
    clearable
    :value="value"
    :on-update:value="handleUpdate"
    :options="locationOptions"
  ></n-tree-select>
</template>

<script>
import { computed, defineComponent } from "@vue/runtime-core";
import { NTreeSelect } from "naive-ui";

export default defineComponent({
  components: {
    NTreeSelect,
  },
  props: {
    value: Number,
    options: Array,
  },
  setup(props, { emit }) {
    const locationOptions = computed(() => {
      return props.options.map((region) => ({
        key: region.id,
        label: region.name,
        children: [
          // {
          //   key: -1,
          //   label: "Provinces",
          //   disabled: true,
          // },
          ...region.children.map((province) => ({
            key: province.id,
            label: province.name,
            children: [
              // {
              //   key: -1,
              //   label: "Districts",
              //   disabled: true,
              // },
              ...province.children.map((district) => ({
                key: district.id,
                label: district.name,
                children: [
                  // {
                  //   key: -1,
                  //   label: "Cities/Municipalities",
                  //   disabled: true,
                  // },
                  ...district.children.map((city) => ({
                    key: city.id,
                    label: city.name,
                  })),
                ],
              })),
            ],
          })),
        ],
      }));
    });

    const handleUpdate = (value) => {
      emit("update:value", value);
    };

    return {
      locationOptions,
      handleUpdate,
    };
  },
  computed: {
    locationOptions() {},
  },
});
</script>
