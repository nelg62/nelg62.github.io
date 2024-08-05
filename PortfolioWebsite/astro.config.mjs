import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import rss from "@astrojs/rss";

export default defineConfig({
  site: "https://nelg62.github.io/",
  base: "/PortfolioWebsite/",
  integrations: [preact(), rss()],
});
