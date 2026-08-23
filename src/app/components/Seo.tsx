import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  /** Path like "/portfolio" — used to build the canonical URL. */
  path?: string;
  image?: string;
}

const SITE_NAME = "Trois Mousquetaire";
const BASE_URL = "https://troismousquetaire.tech";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Lightweight document-head manager. Sets the page title, meta description,
 * canonical URL, and Open Graph / Twitter tags on mount and when props change.
 */
export function Seo({ title, description, path = "/", image }: SeoProps) {
  useEffect(() => {
    const fullTitle = `${title} · ${SITE_NAME}`;
    const url = `${BASE_URL}${path}`;

    document.title = fullTitle;
    setMeta("name", "description", description);

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", url);
    setMeta("property", "og:site_name", SITE_NAME);
    if (image) setMeta("property", "og:image", image);

    // Twitter
    setMeta("name", "twitter:card", image ? "summary_large_image" : "summary");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    if (image) setMeta("name", "twitter:image", image);

    setLink("canonical", url);
  }, [title, description, path, image]);

  return null;
}
