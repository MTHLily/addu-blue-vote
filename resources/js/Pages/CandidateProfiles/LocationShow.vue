<template>
  <Layout>
    <div class="container bod" style="margin-top: 5%">
      <LocationBreadcrumb
        :breadcrumbs="locationBreadcrumbs"
      ></LocationBreadcrumb>
      <span
        class="badge text-wrap text-white fw-bolder p-2 px-4 fs-5 mb-3"
        :style="{
          'background-color': '#CE2029',
          'border-radius': '30px',
        }"
      >
        {{ location.type?.name }}
      </span>
      <h2
        class="fw-bold"
        :class="{
          'text-danger': location.type?.name === 'Region',
          'text-warning': location.type?.name === 'Province',
          'text-primary': location.type?.name === 'District',
          'text-danger': location.type?.name === 'City',
        }"
      >
        {{ location.name }}
      </h2>

      <!-- Render candidates of location tree children -->
      <template v-if="location.candidates.length > 0">
        <h2>Candidates</h2>
        <!-- <template v-for="candidate in location.candidates" :key="candidate.id">
        <h1>{{candidate.running_position.name}}</h1> -->
        <template
          v-for="(positionCandidates, position) in candidatesByPosition"
          :key="position"
        >
          <div
            class="display-6"
            :class="{
              'text-primary': position === 'Governor',
              'text-danger': position === 'Vice Governor',
            }"
          >
            {{ position }}
          </div>
          <div class="row row-cols-3">
            <div
              v-for="candidate in positionCandidates"
              :key="candidate.id"
              class="col"
            >
              <CandidateNameCard :candidate="candidate"></CandidateNameCard>
            </div>
          </div>
        </template>
      </template>
      <template v-if="location.children.length > 0">
        <h2>{{ childrenType(location.children) }}</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          <template v-for="child in location.children" :key="child.id">
            <div class="col">
              <Link
                :href="
                  route(getLocationRoute(child), getLocationBreadCrumbs(child))
                "
                class="text-white btn-lg p-4 px-5 mt-3 w-100"
                :class="{
                  'btn btn-danger': location.children[0].type.name === 'Region',
                  'btn btn-warning':
                    location.children[0].type.name === 'Province',
                  'btn btn-primary':
                    location.children[0].type.name === 'District',
                  'btn btn-danger': location.children[0].type.name === 'City',
                }"
                style="padding: 20px; border-radius: 10px"
              >
                {{ child.name }}
              </Link>
            </div>
          </template>
        </div>
      </template>
    </div>
  </Layout>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import { Link } from "@inertiajs/inertia-vue3";
import _ from "lodash";
import Layout from "../../Layouts/CandidateProfileLayout.vue";
import CandidateNameCard from "../../Components/CandidateProfile/CandidateNameCard.vue";
import LocationBreadcrumb from "@/Components/Locations/LocationBreadcrumb.vue";

export default defineComponent({
  components: {
    Link,
    Layout,
    CandidateNameCard,
    LocationBreadcrumb,
  },
  props: {
    location: Object,
    breadcrumbs: {
      type: Array,
      default: [],
    },
  },
  methods: {
    // Returns the route for the location
    getLocationRoute(location) {
      // Check the location's type id
      if (location.location_type_id === 1) return "locations.region.show";
      if (location.location_type_id === 2) return "locations.province.show";
      if (location.location_type_id === 3) return "locations.district.show";
      if (location.location_type_id === 4) return "locations.city.show";
    },

    getLocationBreadCrumbs(location) {
      const breadcrumbs = {};
      switch (location.location_type_id) {
        case 1:
          breadcrumbs.region = location.id;
          break;
        case 2:
          breadcrumbs.province = location.id;
          break;
        case 3:
          breadcrumbs.district = location.id;
          break;
        case 4:
          breadcrumbs.city = location.id;
          break;
      }
      this.breadcrumbs.forEach((crumb) => {
        switch (crumb.location_type_id) {
          case 1:
            breadcrumbs.region = crumb.id;
            break;
          case 2:
            breadcrumbs.province = crumb.id;
            break;
          case 3:
            breadcrumbs.district = crumb.id;
            break;
          case 4:
            breadcrumbs.city = crumb.id;
            break;
        }
      });
      return breadcrumbs;
    },
    childrenType(children) {
      const child = children[0];

      switch (child.location_type_id) {
        case 1:
          return "Regions";
        case 2:
          return "Provinces";
        case 3:
          return "locations.district.show";
        case 4:
          return "locations.city.show";
      }
    },
  },
  computed: {
    locationBreadcrumbs() {
      const locationCrumbs = this.breadcrumbs.map((breadcrumb) => ({
        label: breadcrumb.name,
        route: route("locations.redirect", breadcrumb.id),
      }));
      return [
        {
          label: "Home",
          route: route("candidate-profiles.index"),
        },
        ...locationCrumbs,
      ];
    },
    candidatesByPosition() {
      console.log("Candidates: ", this.location.candidates);

      const grouped = _.groupBy(
        this.location.candidates,
        (candidate) => candidate.running_position.name
      );

      return grouped;
    },
  },
});
</script>

<style></style>
