import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/convention-2025-belgium-fam-van-hese",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
