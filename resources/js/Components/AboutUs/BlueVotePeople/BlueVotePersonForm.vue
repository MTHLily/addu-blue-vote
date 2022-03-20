<template>
  <div class="d-flex w-full gap-2">
    <div class="w-min">
      <FileUploader
        v-model:value="form.profile_photo"
        :class="{ 'is-invalid': form.errors['profile_photo.file'] }"
      />
      <div class="invalid-feedback">
        {{ form.errors["profile_photo.file"] }}
      </div>
    </div>
    <div class="d-flex flex-column h-full w-full">
      <div class="input-group">
        <span class="input-group-text w-1/4" :id="`person-name`"> Name </span>
        <div class="invalid-feedback">{{ form.errors.name }}</div>
        <input
          :class="{ 'is-invalid': form.errors.name }"
          type="text"
          v-model="form.name"
          class="form-control"
          placeholder="Name"
          aria-label="Person Name"
          :aria-describedby="`person-name`"
        />
      </div>
      <div class="input-group">
        <span class="input-group-text w-1/4" :id="`person-position`">
          Position
        </span>
        <div class="invalid-feedback">{{ form.errors.position }}</div>
        <input
          :class="{ 'is-invalid': form.errors.position }"
          type="text"
          v-model="form.position"
          class="form-control"
          placeholder="Position"
          aria-label="Person Position"
          :aria-describedby="`person-position`"
        />
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <div class="form-check form-switch">
        <div class="invalid-feedback">{{ form.errors.volunteer }}</div>
        <input
          :class="{ 'is-invalid': form.errors.volunteer }"
          class="form-check-input"
          type="checkbox"
          v-model="form.volunteer"
          :id="`is-volunter`"
        />
        <label class="form-check-label" :for="`is-volunter`">
          Volunteer?
        </label>
      </div>
    </div>
  </div>
  <pre>{{ form }}</pre>
</template>

<script>
import { defineComponent } from "vue";
import FileUploader from "@/Components/FileUploader.vue";

export default defineComponent({
  components: { FileUploader },
  props: {
    form: {
      type: Object,
      required: true,
    },
  },
});
</script>
