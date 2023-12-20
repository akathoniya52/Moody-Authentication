import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      rewrites: [{ source: "/(.*)", destination: "/" }],
    },
  ],
});
