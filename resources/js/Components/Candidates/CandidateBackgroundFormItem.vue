<template>
  <div class="row w-100 my-3 ms-3">
    <div class="row">
      <label :for="`bg-type-${index}`">Background Type</label>
      <select
        class="form-select"
        :id="`bg-type-${index}`"
        v-model="value.candidate_background_type_id"
        :class="{
          'is-invalid':
            errors[`${errorKey}.${index}.candidate_background_type_id`],
        }"
      >
        <option :value="null" disabled>Select Background Type</option>
        <template v-for="type in types" :key="type.id">
          <option :value="type.id">{{ type.name }}</option>
        </template>
      </select>
      <div class="invalid-feedback">
        {{ errors[`${errorKey}.${index}.candidate_background_type_id`] }}
      </div>
    </div>
    <div
      class="row row-cols-2"
      v-if="value.candidate_background_type_id != null"
    >
      <div class="col">
        <div class="row">
          <label :for="`bg-place-${index}`">{{
            inputLabels(value.candidate_background_type_id).place_label
          }}</label>
          <input
            type="text"
            class="form-control"
            :id="`bg-place-${index}`"
            v-model="value.place"
            :class="{
              'is-invalid': errors[`${errorKey}.${index}.place`],
            }"
          />
          <div class="invalid-feedback">
            {{ errors[`${errorKey}.${index}.place`] }}
          </div>
        </div>
        <div class="row">
          <label :for="`bg-occupation-${index}`">{{
            inputLabels(value.candidate_background_type_id).occupation_label
          }}</label>
          <input
            type="text"
            class="form-control"
            :id="`bg-occupation-${index}`"
            v-model="value.occupation"
            :class="{
              'is-invalid': errors[`${errorKey}.${index}.occupation`],
            }"
          />
          <div class="invalid-feedback">
            {{ errors[`${errorKey}.${index}.occupation`] }}
          </div>
        </div>
        <div class="row">
          <label :for="`bg-position-${index}`">{{
            inputLabels(value.candidate_background_type_id).position_label
          }}</label>
          <input
            type="text"
            class="form-control"
            :id="`bg-position-${index}`"
            v-model="value.position"
            :class="{
              'is-invalid': errors[`${errorKey}.${index}.position`],
            }"
          />
          <div class="invalid-feedback">
            {{ errors[`${errorKey}.${index}.position`] }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <label>Start Date</label>
          <n-date-picker
            v-model:value="value.start_date"
            type="month"
            clearable
            :class="{
              'is-invalid': errors[`${errorKey}.${index}.start_date`],
            }"
          />
          <div class="invalid-feedback">
            {{ errors[`${errorKey}.${index}.start_date`] }}
          </div>
        </div>
        <div class="row">
          <label>End Date</label>
          <n-date-picker
            v-model:value="value.end_date"
            type="month"
            clearable
            :class="{
              'is-invalid': errors[`${errorKey}.${index}.end_date`],
            }"
          />
          <div class="invalid-feedback">
            {{ errors[`${errorKey}.${index}.end_date`] }}
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label :for="`bg-description-${index}`">{{
              inputLabels(value.candidate_background_type_id).description_label
            }}</label>
            <textarea
              type="text"
              class="form-control"
              :id="`bg-description-${index}`"
              v-model="value.description"
              :class="{
                'is-invalid': errors[`${errorKey}.${index}.description`],
              }"
            />
            <div class="invalid-feedback">
              {{ errors[`${errorKey}.${index}.description`] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { NDatePicker } from "naive-ui";
import setup from "naive-ui/lib/radio/src/use-radio";

export default defineComponent({
  components: { NDatePicker },
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
  setup(props) {
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
    ][props.type];

    return {
      formLabels,
    };
  },
});
</script>
