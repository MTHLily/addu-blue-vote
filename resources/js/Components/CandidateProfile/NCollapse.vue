<template>
  <div class="container">
    <div>
      <!-- Render the regions -->
      <template v-for="region in locations" :key="region.id">
        <div :title="region.name" :name="region.id">
          <n-collapse>
            <!-- Render the provinces -->
            <template v-for="province in region.children" :key="province.id">
              <n-collapse-item :title="province.name" :name="province.id">
                <h1>Candidates</h1>
                <n-collapse title="Candidates">
                  <template
                    v-for="(
                      positionCandidates, position
                    ) in groupCandidatesByPosition(province.candidates)"
                    :key="position"
                  >
                    <n-collapse-item :title="position" :name="position">
                      <template #header
                        ><div
                          class="display-6"
                          :class="{
                            'text-primary': position === 'Governor',
                            'text-danger': position === 'Vice Governor',
                          }"
                        >
                          {{ position }}
                        </div>
                      </template>
                      <div class="row row-cols-3">
                        <div
                          v-for="candidate in positionCandidates"
                          :key="candidate.id"
                          class="col"
                        >
                          <!-- {{ candidate.name }} -->
                          <CandidateNameCard
                            :candidate="candidate"
                          ></CandidateNameCard>
                        </div>
                      </div>
                    </n-collapse-item>
                  </template>
                </n-collapse>
                <h1>Districts</h1>
                <n-collapse>
                  <template
                    v-for="district in province.children"
                    :key="district.id"
                  >
                    <n-collapse-item :title="district.name" :name="district.id">
                      <div>
                        <h2 class="text-primary fw-bold">
                          CONGRESSMAN CANDIDATES
                        </h2>
                      </div>
                      <n-collapse>
                        <template
                          v-for="city in district.children"
                          :key="city.id"
                        >
                          <n-collapse-item :title="city.name" :name="city.id">
                            <div>
                              <h2 class="text-primary fw-bold">
                                MAYORAL CANDIDATES
                              </h2>
                              <h2 class="text-danger fw-bold">
                                VICE-MAYORAL CANDIDATES
                              </h2>
                              <h2 class="text-warning fw-bold">
                                COUNCILOR CANDIDATES
                              </h2>
                            </div>
                          </n-collapse-item>
                        </template>
                      </n-collapse>
                    </n-collapse-item>
                  </template>
                </n-collapse>
              </n-collapse-item>
            </template>
          </n-collapse>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { NCollapse, NCollapseItem } from "naive-ui";
import _ from "lodash";
import CandidateNameCard from "./CandidateNameCard.vue";

export default {
  props: {
    locations: Array,
  },
  components: {
    NCollapse,
    NCollapseItem,
    CandidateNameCard,
  },
  methods: {
    groupCandidatesByPosition: (candidates) => {
      console.log("Candidates: ", candidates);

      const grouped = _.groupBy(
        candidates,
        (candidate) => candidate.running_position.name
      );

      return grouped;
    },
  },
};
</script>

<style scoped></style>
