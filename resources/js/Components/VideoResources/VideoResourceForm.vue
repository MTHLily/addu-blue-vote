<template>
  <div class="mb-2">
    <label for="videoTitle" class="form-label">Video Resource</label>
    <input
      v-model="form.title"
      type="string"
      class="form-control"
      :class="{
        'is-invalid': form.errors.title,
      }"
      id="videoTitle"
      placeholder="Video Title"
    />
    <div class="invalid-feedback">{{ form.errors.title }}</div>
  </div>

  <div class="mb-2">
    <label for="videoDescription" class="form-label">Description</label>
    <textarea
      v-model="form.description"
      class="form-control"
      :class="{
        'is-invalid': form.errors.description,
      }"
      id="videoDescription"
      placeholder="Video Description"
    />
    <div class="invalid-feedback">{{ form.errors.description }}</div>
  </div>

  <div class="mb-3">
    <label for="videoGuests" class="form-label">Guests</label>
    <textarea
      v-model="form.guests"
      type="text"
      class="form-control"
      :class="{
        'is-invalid': form.errors.guests,
      }"
      id="videoGuests"
      placeholder="Video Guests"
    />
    <div class="invalid-feedback">{{ form.errors.guests }}</div>
  </div>

  <div class="mb-3">
    <label for="videoLink" class="form-label">Link</label>
    <input
      v-model="form.link"
      type="text"
      class="form-control"
      :class="{
        'is-invalid': form.errors.link,
      }"
      id="videoLink"
      placeholder="Video Link"
    />
    <div class="invalid-feedback">{{ form.errors.link }}</div>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default: () => ({
        title: "",
        description: "",
        information: "",
        link: "",
        errors: {
          title: "",
          description: "",
          link: "",
        },
      }),
    },
  },
};
</script>
