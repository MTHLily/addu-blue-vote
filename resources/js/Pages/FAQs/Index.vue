<template>
  <Head title="Frequently Asked Questions"></Head>

  <DashboardLayout>
    <div class="flex flex-column">
      <div class="navbar navbar-dark bg-primary rounded shadow mb-4">
        <div class="container-fluid">
          <ul class="navbar-nav p-2">
            <li class="nav-item">
              <Link href="/dashboard/faqs/create" class="nav-link"
                >Add FAQ</Link
              >
            </li>
          </ul>
        </div>
      </div>
      <table class="table w-100">
        <thead>
          <th scope="col">Question</th>
          <th scope="col">Answer</th>
          <th scope="col">Actions</th>
        </thead>
        <tbody>
          <tr v-for="question in faqs" :key="question.id">
            <td>{{ question.question }}</td>
            <td>{{ question.answer }}</td>
            <td>Actions Go here</td>
          </tr>
        </tbody>
      </table>
    </div>
  </DashboardLayout>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";

export default {
  props: {
    faqs: {
      type: Array,
      default: () => [
        {
          id: 0,
          question: "Default Question",
          answer: "Defualt Answer",
        },
      ],
    },
  },
  components: { Link, Head, DashboardLayout },
};
</script>

<style></style>
