import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    cloudflare(),
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
  ],
});
