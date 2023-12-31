import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      formats: ["es"],
      name: "Picea",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          Vue: "vue",
        },
      },
    },
  },

  plugins: [vue(), dts()],
});
