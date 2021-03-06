require("./bootstrap");

import "bootstrap";
import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";

import VueGoogleMaps from "@fawmi/vue-google-maps";
import colorPicker from "vue3-colorpicker";

import AppProvider from "@/Layouts/Partials/AppProvider.vue";

const appName =
  window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => require(`./Pages/${name}.vue`),
  setup({ el, app, props, plugin }) {
    return createApp({
      render: () => h(AppProvider, null, () => h(app, props)),
    })
      .use(plugin)
      .use(VueGoogleMaps, {
        load: {
          key: process.env.MIX_GOOGLE_MAPS_API_KEY || "",
        },
      })
      .use(colorPicker)
      .mixin({ methods: { route } })
      .mount(el);
  },
});

InertiaProgress.init({ color: "#4B5563" });
