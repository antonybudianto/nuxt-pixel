// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from "nuxt/config";
import commonjs from "vite-plugin-commonjs";

const vueEnv = process.env.NODE_ENV === "development" ? ".js" : ".prod.js";

export default defineNuxtConfig({
  ssr: false,
  telemetry: false,
  devtools: { enabled: false },
  plugins: ["~/plugins/moment.js", "~/plugins/mekari-pixel.js"],
  alias: {
    vue: `@vue/compat/dist/vue.esm-browser${vueEnv}`,
    "vue/server-renderer": "vue-server-renderer"
  },
  vite: {
    plugins: [
      commonjs({
        filter(id) {
          // `node_modules` is exclude by default, so we need to include it explicitly
          // https://github.com/vite-plugin/vite-plugin-commonjs/blob/v0.7.0/src/index.ts#L125-L127

          /**
           * Need to include this package since this pkg imports json file which
           * causes "require not defined" error on PRODUCTION build
           */
          if (id.includes("node_modules/@mekari/pixel-provider")) {
            return true;
          }
        }
      })
    ]
  },
  experimental: {
    noVueServer: true
  },

  modules: ["nuxt-vite-legacy"],
  // @ts-expect-error
  legacy: {
    targets: ["chrome 49"],
    additionalLegacyPolyfills: [
      "mdn-polyfills/Element.prototype.getAttributeNames"
    ]
  }
});
