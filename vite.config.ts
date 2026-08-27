import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { PAGE_SEO, SITE } from "./src/data/site";

const INDEXABLE_PAGES = [
  PAGE_SEO.about,
  PAGE_SEO.vision,
  PAGE_SEO.whatWeDo,
  PAGE_SEO.team,
  PAGE_SEO.collaborate,
  PAGE_SEO.contact,
] as const;

function escapeAttr(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function replaceAttr(html: string, pattern: RegExp, value: string) {
  return html.replace(pattern, `$1${escapeAttr(value)}$2`);
}

function prerenderRouteMeta(): Plugin {
  return {
    name: "prerender-route-meta",
    apply: "build",
    closeBundle() {
      const dist = join(process.cwd(), "dist");
      const template = readFileSync(join(dist, "index.html"), "utf8");

      for (const page of INDEXABLE_PAGES) {
        const url = `${SITE.url}${page.path}`;
        let html = template.replace(
          /<title>[^<]*<\/title>/,
          `<title>${escapeAttr(page.title)}</title>`,
        );
        html = replaceAttr(
          html,
          /(<meta name="description" content=")[^"]*(")/,
          page.description,
        );
        html = replaceAttr(
          html,
          /(<link rel="canonical" href=")[^"]*(")/,
          url,
        );
        html = replaceAttr(
          html,
          /(<meta property="og:title" content=")[^"]*(")/,
          page.title,
        );
        html = replaceAttr(
          html,
          /(<meta property="og:description" content=")[^"]*(")/,
          page.description,
        );
        html = replaceAttr(
          html,
          /(<meta property="og:url" content=")[^"]*(")/,
          url,
        );
        html = replaceAttr(
          html,
          /(<meta name="twitter:title" content=")[^"]*(")/,
          page.title,
        );
        html = replaceAttr(
          html,
          /(<meta name="twitter:description" content=")[^"]*(")/,
          page.description,
        );
        html = html.replace(
          /<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/,
          "",
        );

        const out = join(dist, page.path.slice(1), "index.html");
        mkdirSync(dirname(out), { recursive: true });
        writeFileSync(out, html);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), prerenderRouteMeta()],
});
