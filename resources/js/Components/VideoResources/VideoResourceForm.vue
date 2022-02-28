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
    <input
      v-model="form.description"
      type="text"
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
    <label for="videoInformation" class="form-label">Information</label>
    <textarea
      v-model="form.information"
      type="text"
      class="form-control"
      :class="{
        'is-invalid': form.errors.information,
      }"
      id="videoInformation"
      placeholder="Video Information"
    />
    <div class="invalid-feedback">{{ form.errors.information }}</div>
  </div>

    

   <div class="mb-3">
    <label for="videoLink" class="form-label">Link</label>
    <textarea
      v-model="form.link"
      type="string"
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
       // guests: "",
        link: "",
        errors: {
          title: "",
          description: "",
          //information: "",
          //guests: "",
          link: "",
        },
      }),
    },
  },
};
</script>

<style></style>
