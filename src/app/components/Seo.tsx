import { useEffect } from "react";
import faviconUrl from "../../imports/troismousquetaires-favicon.png";

interface SeoProps {
  /** Page-specific title, e.g. "Services". Combined as "Title | Trois Mousquetaires". */
  title: string;
  description: string;
  /** Path like "/portfolio" — used to build the canonical URL. */
  path?: string;
  image?: string;
  /** When set, used verbatim as the <title> instead of "title | brand". */
  fullTitle?: string;
}

const SITE_NAME = "Trois Mousquetaires";
const BASE_URL = "https://troismousquetaires.com";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string, type?: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
  if (type) el.setAttribute("type", type);
}

/** Injects the Organization JSON-LD schema once for the whole site. */
function setOrganizationSchema(logo: string) {
  const id = "ld-organization";
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}${logo}`,
    description:
      "We design, build, and scale enterprise digital solutions. A dedicated product design and engineering team specializing in cloud tech, web development, and IT consulting.",
    email: "contact@troismousquetaires.com",
    sameAs: [] as string[],
  });
}

/**
 * Lightweight document-head manager. Sets the page title, robots directive,
 * meta description, canonical URL, favicon, lang, Open Graph / Twitter tags,
 * and Organization structured data on mount and when props change.
 */
export function Seo({ title, description, path = "/", image, fullTitle }: SeoProps) {
  useEffect(() => {
    const pageTitle = fullTitle ?? `${title} | ${SITE_NAME}`;
    const url = `${BASE_URL}${path}`;
    const ogImage = image ?? faviconUrl;

    document.documentElement.lang = "en";
    document.title = pageTitle;

    // Let search engines index the site (overrides any leftover noindex).
    setMeta("name", "robots", "index, follow");
    setMeta("name", "description", description);

    // Open Graph
    setMeta("property", "og:title", pageTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", url);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:image", ogImage);

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", pageTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);

    setLink("canonical", url);
    setLink("icon", faviconUrl, "image/png");
    setLink("apple-touch-icon", faviconUrl);

    setOrganizationSchema(faviconUrl);
  }, [title, description, path, image, fullTitle]);

  return null;
}
