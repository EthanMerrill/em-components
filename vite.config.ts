import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: "src/index.ts", // Entry point for the library
      name: "ethan-components",
      fileName: (format) => `ethan-components.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Exclude React from the bundle
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
