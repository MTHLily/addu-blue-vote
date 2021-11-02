<template>
  <n-color-picker
    v-model:value="color"
    size="large"
    :modes="['hex']"
    :show-alpha="false"
  ></n-color-picker>
  <!-- <div class="input-group colorPicker">
    <span class="input-group-text">
      <i class="bi bi-circle-fill" :style="`color: ${color}`"></i>
    </span>
    <input
      type="text"
      class="form-control bg-white"
      v-bind="$attrs"
      v-model="color"
      placeholder="Choose a color for the district"
      readonly
    />
    <div class="modal-dialog colorPickerContainer" v-show="showPallete">
      <div class="modal-content">
        <div class="modal-body">
          <div ref="container"></div>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="btn btn-primary"
      @click="showPallete = !showPallete"
    >
      <i class="bi bi-eyedropper"></i>
    </button>
  </div> -->
</template>

<script>
// import colorPicker from "tui-color-picker";
// import "tui-color-picker/dist/tui-color-picker.css";
import { NColorPicker } from "naive-ui";

export default {
  components: {
    NColorPicker,
  },
  // data: () => ({
  //   colorPallete: null,
  //   showPallete: false,
  // }),
  props: {
    color: {
      type: String,
      default: "#FFF",
    },
  },
  // mounted() {
  //   this.colorPallete = colorPicker.create({
  //     container: this.$refs.container,
  //     color: "#FFF",
  //     preset: [],
  //     detailTxt: "Select",
  //   });
  //   this.colorPallete.setColor(this.color);
  //   this.colorPallete.on("selectColor", () => {
  //     console.log("COLOR SELECT");
  //     this.$emit("update:color", this.colorPallete.getColor());
  //   });
  // },
};
</script>

<style>
/* .colorPicker {
  position: relative;
}
.colorPickerContainer {
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 11;
} */
</style>
