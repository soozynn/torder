import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@features": fileURLToPath(new URL("./src/features", import.meta.url)),
    },
  },
  server: {
    port: 8001, // 개발 서버 포트 (json-server는 8000)
    open: true,
  },
  preview: {
    port: 8001,
  },
  build: {
    outDir: "dist",
  },
});
