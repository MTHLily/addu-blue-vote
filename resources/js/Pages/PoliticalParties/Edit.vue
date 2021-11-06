<template>
  <Head title="Edit Political Party"></Head>

  <DashboardLayout>
    <div class="d-flex flex-column container">
      <form
        @submit.prevent="
          form.put(route('political-parties.update', political_party.id))
        "
      >
        <h1>Edit Political Party: {{ political_party.name }}</h1>
        <PoliticalPartyForm v-model:form="form"></PoliticalPartyForm>
        <div class="btn-group mx-auto w-100" role="group">
          <button class="btn btn-primary">Save</button>
          <Link :href="route('political-parties.index')" class="btn btn-danger"
            >Cancel</Link
          >
        </div>
      </form>
    </div>
  </DashboardLayout>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import PoliticalPartyForm from "../../Components/PoliticalParties/PoliticalPartyForm.vue";
import { useForm } from "@inertiajs/inertia-vue3";

export default {
  components: { Link, Head, DashboardLayout, PoliticalPartyForm },
  data: () => ({
    form: useForm({
      name: "",
    }),
  }),
  props: {
    political_party: Object,
  },
  created() {
    this.form = useForm({
      name: this.political_party.name,
    });
  },
};
</script>

<style></style>
