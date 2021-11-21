<template>
    <div class="container">
        <n-collapse>
            <n-collapse-item title="Region XI - Davao Region" name="1">
            <n-collapse>
                <n-collapse-item title="Davao de Oro" name="1">
                <div>
                    <h2 class="text-primary fw-bold">GOVERNOR CANDIDATES</h2>
                    <h2 class="text-danger fw-bold">VICE-GOVERNOR CANDIDATES</h2>
                    <h2 class="text-warning fw-bold">BOARD MEMBERS CANDIDATES</h2>
                
                </div>
                <n-collapse>
                    <n-collapse-item title="District 1" name="1">
                    <div>
                        <h2 class="text-primary fw-bold">CONGRESSMAN CANDIDATES</h2>
                    </div>
                    <n-collapse>
                        <n-collapse-item title="Davao City" name="1">
                        <div>
                            <h2 class="text-primary fw-bold">MAYORAL CANDIDATES</h2>
                            <h2 class="text-danger fw-bold">VICE-MAYORAL CANDIDATES</h2>
                            <h2 class="text-warning fw-bold">COUNCILOR CANDIDATES</h2>
                        </div>
                        </n-collapse-item>
                    </n-collapse>
                    </n-collapse-item>  
                </n-collapse>
                </n-collapse-item>
                <n-collapse-item title="Davao Oriental" name="2">
                <div>XXXX</div>
                </n-collapse-item>
            </n-collapse>
            </n-collapse-item>
        </n-collapse>
    </div>
</template>

<script>
import { NCollapse, NCollapseItem } from "naive-ui";

export default{
    props: {
        locations: Array,
    },
    components: {
        NCollapse,
        NCollapseItem,
    },
};
</script>

<style scoped></style>
