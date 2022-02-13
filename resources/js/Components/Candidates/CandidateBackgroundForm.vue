<template>
  <div>
    <div>
      <label class="form-label">Highest Attained Education</label>
      <CandidateBackgroundFormItem
        v-model:value="educationalBackground"
        :max="1"
        @update:value="handleUpdate($event, 0)"
        :type="1"
      />
    </div>
    <div>
      <label class="form-label">Political Achievements</label>
      <CandidateBackgroundFormItem
        v-model:value="politicalBackground"
        @update:value="handleUpdate($event, 1)"
        :type="2"
      />
    </div>
    <div>
      <label class="form-label">Professional Background</label>
      <CandidateBackgroundFormItem
        v-model:value="professionalBackground"
        @update:value="handleUpdate($event, 2)"
        :type="3"
      />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import CandidateBackgroundFormItem from "./CandidateBackgroundFormItem.vue";

export default defineComponent({
  props: {
    background: {
      type: Array,
      default: [],
    },
  },
  setup(props, { emit }) {
    const educationalBackground = computed({
      get: () =>
        props.background.filter((bg) => bg.candidate_background_type_id == 1),
      set: (val) => {
        emit("update:background", [
          ...val,
          ...politicalBackground.value,
          ...professionalBackground.value,
        ]);
      },
    });

    const politicalBackground = computed({
      get: () =>
        props.background.filter((bg) => bg.candidate_background_type_id == 2),
      set: (val) => {
        emit("update:background", [
          ...educationalBackground.value,
          ...val,
          ...professionalBackground.value,
        ]);
      },
    });
    const professionalBackground = computed({
      get: () =>
        props.background.filter((bg) => bg.candidate_background_type_id == 3),
      set: (val) => {
        emit("update:background", [
          ...educationalBackground.value,
          ...politicalBackground.value,
          ...val,
        ]);
      },
    });

    const handleUpdate = (val, type) => {
      console.log(val, type);
      [educationalBackground, politicalBackground, professionalBackground][
        type
      ].value = val;
    };

    return {
      educationalBackground,
      politicalBackground,
      professionalBackground,
      handleUpdate,
    };
  },
  components: { CandidateBackgroundFormItem },
});
</script>
