<template>
  <n-config-provider :theme-overrides="AdDUTheme">
    <n-theme-editor>
      <slot />
    </n-theme-editor>
  </n-config-provider>
</template>

<script>
import { defineComponent } from "vue";
import { NConfigProvider, NThemeEditor } from "naive-ui";

export default defineComponent({
  components: {
    NConfigProvider,
    NThemeEditor,
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
