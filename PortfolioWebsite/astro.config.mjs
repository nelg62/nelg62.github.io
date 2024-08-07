import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://nelg62.github.io",
  base: "/PortfolioWebsite",
  integrations: [tailwind(), react()]
});