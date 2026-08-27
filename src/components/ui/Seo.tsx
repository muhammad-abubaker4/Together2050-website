import { useEffect } from "react";
import { SITE } from "../../data/site";

const OG_IMAGE = `${SITE.url}/og-image.png`;

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
};

function setMeta(selector: string, attr: string, value: string) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    const match = selector.match(/\[(name|property)="([^"]+)"\]/);
    if (match) {
      el.setAttribute(match[1], match[2]);
    }
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export function Seo({
  title,
  description,
  path = "/",
  noindex = false,
}: SeoProps) {
  useEffect(() => {
    document.title = title;

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[property="og:image"]', "content", OG_IMAGE);
    setMeta('meta[name="twitter:image"]', "content", OG_IMAGE);
    setMeta('meta[property="og:image:width"]', "content", "1200");
    setMeta('meta[property="og:image:height"]', "content", "630");
    setMeta('meta[property="og:image:type"]', "content", "image/png");

    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }

    if (noindex) {
      robots.setAttribute("content", "noindex, nofollow");
      document.querySelector('link[rel="canonical"]')?.remove();
      return;
    }

    const url = `${SITE.url}${path === "/" ? "/" : path}`;
    robots.setAttribute("content", "index, follow");
    setMeta('meta[property="og:url"]', "content", url);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, path, noindex]);

  return null;
}
