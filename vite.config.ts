import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        vacancies: resolve(__dirname, "src/vacancies/index.html"),
      },
    },
  },
});
