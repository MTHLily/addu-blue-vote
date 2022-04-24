<template>
  <n-dynamic-input
    :value="value"
    :on-create="onCreate"
    :on-remove="onRemove"
    #="{ value, index }"
  >
    <div class="row w-100 my-3 ms-3">
      <div
        class="row row-cols-2"
        v-if="value.candidate_background_type_id != null"
      >
        <div class="col">
          <div class="row">
            <label :for="`bg-place-${index}`">{{
              formLabels.place_label
            }}</label>
            <input
              type="text"
              class="form-control"
              :id="`bg-place-${index}`"
              v-model="value.place"
            />
          </div>
          <div class="row">
            <label :for="`bg-occupation-${index}`">{{
              formLabels.occupation_label
            }}</label>
            <input
              type="text"
              class="form-control"
              :id="`bg-occupation-${index}`"
              v-model="value.occupation"
            />
          </div>
          <div class="row">
            <label :for="`bg-position-${index}`">{{
              formLabels.position_label
            }}</label>
            <input
              type="text"
              class="form-control"
              :id="`bg-position-${index}`"
              v-model="value.position"
            />
          </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="col">
              <label :for="`bg-timerange-${index}`">Time Range</label>
              <input
                :id="`bg-timerange-${index}`"
                type="text"
                class="form-control"
                v-model="value.time_range"
              />
            </div>
          </div>
          <div class="row">
            <label>Start Date</label>
            <n-date-picker
              v-model:value="value.start_date"
              type="month"
              clearable
            />
          </div>
          <div class="row">
            <label>End Date</label>
            <n-date-picker
              v-model:value="value.end_date"
              type="month"
              clearable
            />
          </div>
          <div class="row">
            <div class="col">
              <label :for="`bg-description-${index}`">{{
                formLabels.description_label
              }}</label>
              <textarea
                type="text"
                class="form-control"
                :id="`bg-description-${index}`"
                v-model="value.description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </n-dynamic-input>
</template>

<script>
import { computed, defineComponent, toRef } from "vue";
import { NDatePicker, NDynamicInput } from "naive-ui";
import _ from "lodash";

export default defineComponent({
  components: { NDatePicker, NDynamicInput },
  props: {
    type: {
      type: Number,
      required: true,
    },
    value: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const formLabels = [
      {
        id: 1,
        name: "Educational",
        place_label: "School/Academy/University",
        occupation_label: "Course",
        position_label: "College Degree",
        description_label: "Awards",
      },
      {
        id: 2,
        name: "Political",
        place_label: "Place",
        occupation_label: "Affiliation",
        position_label: "Position",
        description_label: "Additional Information",
      },
      {
        id: 3,
        name: "Professional",
        place_label: "Company/Organization",
        occupation_label: "Affiliation",
        position_label: "Position",
        description_label: "Additional Information",
      },
    ][props.type - 1];

    const onCreate = () => {
      emit("update:value", [
        ...props.value,
        {
          candidate_background_type_id: props.type,
          place: null,
          occupation: null,
          position: null,
          description: null,
          time_range: null,
        },
      ]);
    };
    const onRemove = (index) => {
      const items = [...props.value];
      items.splice(index, 1);
      emit("update:value", items);
    };

    return {
      formLabels,
      errors: {},
      onCreate,
      onRemove,
    };
  },
});
</script>
