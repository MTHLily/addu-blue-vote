<template>
  <Head title="Districts"></Head>

  <AdminLayout>
    <DashboardLayout>
      <div class="container flex flex-column">
        <div class="card">
          <div class="card-header bg-primary text-white fw-bold">
            Information
          </div>
          <div style="overflow-x: auto">
            <table
              class="
                table
                w-100
                table
                align-middle
                table-hover table-responsive table-sm
              "
            >
              <thead
                class="text-center align-middle"
                style="background-color: #ccdfff; height: 50px"
              >
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">District</th>
                <th scope="col">Description</th>
                <th scope="col">Color</th>
                <th scope="col">Actions</th>
              </thead>
              <tbody>
                <tr v-for="district in districts" :key="district.id">
                  <td>
                    <div style="background-color: #369669; height: 50px"></div>
                  </td>
                  <td>
                    <div class="btn-group">
                      <div class="p-3">
                        <Link
                          :href="route('districts.edit', district.id)"
                          class="btn btn-primary"
                        >
                          <i class="bi bi-eye-fill"></i>
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td class="text-truncate fw-bold">{{ district.name }}</td>
                  <td class="text-truncate fw-bold">
                    {{ district.description }}
                  </td>
                  <td>
                    <i
                      class="bi bi-circle-fill"
                      :style="`color: ${district.color}`"
                    ></i>
                    {{ district.color }}
                  </td>
                  <td>
                    <form @submit.prevent="submitDelete(district.id)">
                      <div class="btn-group">
                        <div class="p-3">
                          <Link
                            :href="route('districts.edit', district.id)"
                            class="btn btn-primary"
                          >
                            <i class="bi-pencil-square"></i>
                          </Link>
                        </div>
                        <div class="p-3">
                          <button class="btn btn-danger">
                            <i class="bi-trash"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </td>
                </tr>
              </tbody>
              <td colspan="">
                <div class="card-footer">
                  <div class="bg-primary rounded shadow mb-4">
                    <Link
                      :href="route('districts.create')"
                      class="nav-link text-white"
                      >Add District</Link
                    >
                  </div>
                </div>
              </td>
              <td colspan="11" class="card-footer table-borderless"></td>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  </AdminLayout>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../../Layouts/DashboardLayout.vue";
import { Inertia } from "@inertiajs/inertia";
import AdminLayout from "../../Layouts/admin";

export default {
  props: {
    districts: {
      type: Array,
      default: () => [
        {
          id: 0,
          name: "Default Name",
          description: "Defualt Description",
        },
      ],
    },
  },
  components: { Link, Head, DashboardLayout, AdminLayout },
  methods: {
    submitDelete(id) {
      Inertia.delete(route("districts.destroy", id));
    },
  },
};
</script>

<style></style>
