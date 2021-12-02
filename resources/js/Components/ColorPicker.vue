<template>
  <n-color-picker
    :value="color"
    :on-update:value="handleUpdate"
    size="large"
    :modes="['hex']"
    :show-alpha="false"
  ></n-color-picker>
</template>

<script>
import { NColorPicker } from "naive-ui";

export default {
  components: {
    NColorPicker,
  },
  props: {
    color: {
      type: String,
      default: "#FFF",
    },
  },
  methods: {
    handleUpdate(value) {
      this.$emit("update:color", value);
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
