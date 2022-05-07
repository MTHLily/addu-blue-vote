<template>
  <Head title="Frequently Asked Questions"></Head>

  <DashboardLayout>
    <div class="container flex flex-column">
      <div class="card">
        <div class="card-header bg-primary text-white fw-bold">
          Frequently Asked Questions
        </div>
        <BlueVoteTable :columns="columns" :items="faqs">
          <template #answer="{ item }">
            <MarkdownViewer :content="item.answer" size="sm" />

          </template>
          <template #actions="{ item }">
            <div class="d-flex justify-content-center">
              <div class="btn-group">
                <Link
                  :href="route('faqs.edit', item.id)"
                  class="btn btn-success"
                >
                  <i class="bi-pencil-square"></i>
                </Link>
                <DeleteButton :item="item" route-name="faqs.destroy" />
              </div>
            </div>
          </template>
          <template #footer>
            <Link class="btn btn-primary" :href="route('faqs.create')">
              Add
            </Link>
          </template>
        </BlueVoteTable>
      </div>
    </div>
  </DashboardLayout>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import MarkdownViewer from "@/Components/MarkdownViewer.vue";
import { Inertia } from "@inertiajs/inertia";
import BlueVoteTable from "@/Components/BlueVoteTable.vue";
import DeleteButton from "@/Components/DeleteButton.vue";

export default {
  props: {
    faqs: {
      type: Array,
      default: () => [
        {
          id: 0,
          type: "Choose Category",
          question: "Default Question",
          answer: "Defualt Answer",
        },
      ],
    },
  },
  components: {
    Link,
    Head,
    DashboardLayout,
    MarkdownViewer,
    BlueVoteTable,
    DeleteButton,
  },
  setup() {
    const columns = [
      {
        value: "question",
        label: "Question",
      },
      {
        value: "answer",
        label: "Answer",
        slotName: "answer",
      },
    ];

    return {
      columns,
    };
  },
  methods: {
    submitDelete(id) {
      Inertia.delete(`/dashboard/faqs/${id}`);
    },
  },
};
</script>

<style></style>
