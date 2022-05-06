<template>
  <n-config-provider :theme-overrides="AdDUTheme">
    <!-- <n-theme-editor> -->
    <n-dialog-provider>
      <slot />
    </n-dialog-provider>
    <!-- </n-theme-editor> -->
  </n-config-provider>
</template>

<script>
import { defineComponent } from "vue";
import { NConfigProvider, NThemeEditor, NDialogProvider } from "naive-ui";

console.log(process.env);

export default defineComponent({
  components: {
    NConfigProvider,
    NThemeEditor,
    NDialogProvider,
  },
  setup() {
    const AdDUTheme = {
      common: {
        primaryColor: "#2080F0FF",
        primaryColorHover: "#4098FCFF",
        primaryColorPressed: "#1060C9FF",
        primaryColorSuppl: "#4098FCFF",
      },
    };

    return {
      AdDUTheme,
    };
  },
});
</script>
