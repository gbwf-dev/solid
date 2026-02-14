import { defineConfig, loadEnv } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, import.meta.dirname);

  return {
    build: { outDir: "api/vite/build" },
    server: {
      proxy: { "/api": { target: env.VITE_API_URL, changeOrigin: true } },
    },
    clearScreen: false,
    plugins: [solid()],
  };
});
