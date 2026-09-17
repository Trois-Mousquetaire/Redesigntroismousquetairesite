/**
 * Pre-renders the legal pages to real, static HTML.
 *
 * Why: the app is a client-rendered SPA. A crawler that does not run JavaScript
 * — including Google Play's automated privacy-policy check — receives an empty
 * shell. Google treats "privacy policy URL returns no privacy policy" as a
 * failed check, so /privacy must serve real markup on the first byte.
 *
 * Output: public/privacy/index.html and public/terms/index.html.
 * Cloudflare Pages serves a matching static file before falling back to the
 * SPA, so these take over those two routes automatically.
 *
 * Wire it up in package.json:
 *   "prebuild": "node scripts/build-legal.mjs"
 *
 * Run it manually with:  node scripts/build-legal.mjs
 */
import { build } from "esbuild";
import { mkdir, writeFile, rm } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://troismousquetaires.com";
const BRAND = "Trois Mousquetaires";

const PAGES = [
  { slug: "privacy", src: "src/app/data/privacy.ts",
    description: "How Trois Mousquetaires collects, uses and protects your data across Sub Settle, Yu > Fu x Kane, Quotiv and Stack Tower. GDPR and CCPA/CPRA compliant." },
  { slug: "terms", src: "src/app/data/terms.ts",
    description: "The terms of service governing your use of Sub Settle and the other Trois Mousquetaires apps." },
];

/** Load a .ts data module without a TypeScript runtime, using esbuild (already a Vite dependency). */
async function loadData(relPath) {
  const tmp = resolve(ROOT, ".legal-tmp.mjs");
  await build({ entryPoints: [resolve(ROOT, relPath)], outfile: tmp, bundle: true, format: "esm", platform: "node", logLevel: "silent" });
  const mod = await import(pathToFileURL(tmp).href + "?t=" + Date.now());
  await rm(tmp, { force: true });
  return mod.default;
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Turn bare URLs and email addresses into links, on already-escaped text. */
function linkify(text) {
  return esc(text).replace(
    /(https?:\/\/[^\s<]+|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g,
    (m) => m.includes("@") && !m.startsWith("http")
      ? `<a href="mailto:${m}">${m}</a>`
      : `<a href="${m}" target="_blank" rel="noopener noreferrer">${m}</a>`
  );
}

/** Render a section's blocks, collapsing consecutive bullets into one list. */
function renderBlocks(blocks = []) {
  const out = [];
  let bullets = [];
  const flush = () => {
    if (bullets.length) { out.push(`<ul>${bullets.map((b) => `<li>${linkify(b.text)}</li>`).join("")}</ul>`); bullets = []; }
  };
  for (const b of blocks) {
    if (b.type === "bullet") bullets.push(b);
    else { flush(); out.push(`<p>${linkify(b.text)}</p>`); }
  }
  flush();
  return out.join("\n        ");
}

function renderPage(data, page) {
  const title = `${data.title} · ${BRAND}`;
  const url = `${SITE}/${page.slug}`;
  const toc = data.sections
    .filter((s) => s.id && s.heading)
    .map((s) => `<li><a href="#${esc(s.id)}">${esc(s.heading)}</a></li>`).join("");
  const body = data.sections.map((s) => `
      <section id="${esc(s.id || "")}">
        <h2>${esc(s.heading)}</h2>
        ${renderBlocks(s.blocks)}
      </section>`).join("");

  return `<!doctype html>
<html lang="${esc(data.locale || "en")}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${esc(url)}">
<meta name="robots" content="index, follow">
<meta name="color-scheme" content="light dark">
<meta property="og:type" content="article">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${esc(url)}">
<script>
  // Runs before paint so the WebView never flashes the wrong chrome or theme.
  (function () {
    try {
      var q = new URLSearchParams(location.search);
      var r = document.documentElement;
      if (q.get("webview") === "1" || q.get("embed") === "1") r.setAttribute("data-embed", "1");
      var t = q.get("theme");                       // app passes its own current theme
      if (t === "light" || t === "dark") r.setAttribute("data-theme", t);
    } catch (e) {}
  })();
</script>
<style>
  :root{color-scheme:dark;--bg:#08070b;--fg:#e8eaed;--muted:#9aa0a6;--accent:#00a82d;--rule:#23222a;--maxw:46rem}
  /* No theme param -> follow the device. */
  @media (prefers-color-scheme: light){
    :root:not([data-theme="dark"]){color-scheme:light;--bg:#ffffff;--fg:#1a1c1e;--muted:#5f6368;--rule:#e3e5e8}
  }
  /* ?theme=light|dark from the app always wins, so the WebView matches the screen behind it. */
  :root[data-theme="light"]{color-scheme:light;--bg:#ffffff;--fg:#1a1c1e;--muted:#5f6368;--rule:#e3e5e8}
  :root[data-theme="dark"]{color-scheme:dark;--bg:#08070b;--fg:#e8eaed;--muted:#9aa0a6;--rule:#23222a}
  *{box-sizing:border-box}
  html,body{margin:0;padding:0}
  body{background:var(--bg);color:var(--fg);font:16px/1.65 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;-webkit-text-size-adjust:100%}
  .wrap{max-width:var(--maxw);margin:0 auto;padding:0 20px}
  header.site,footer.site{border-bottom:1px solid var(--rule)}
  footer.site{border-bottom:0;border-top:1px solid var(--rule);margin-top:56px}
  header.site .wrap,footer.site .wrap{display:flex;align-items:center;justify-content:space-between;gap:16px;padding-top:18px;padding-bottom:18px;flex-wrap:wrap}
  .brand{font-weight:700;letter-spacing:-.01em;color:var(--fg);text-decoration:none}
  .site nav a,footer.site a{color:var(--muted);text-decoration:none;font-size:14px;margin-left:18px}
  .site nav a:hover,footer.site a:hover{color:var(--fg)}
  footer.site small{color:var(--muted);font-size:13px}
  main{padding:44px 0 8px}
  h1{font-size:clamp(28px,5vw,38px);line-height:1.15;letter-spacing:-.02em;margin:0 0 10px}
  .subtitle{color:var(--muted);font-size:14px;margin:0 0 30px}
  h2{font-size:19px;line-height:1.3;margin:34px 0 8px;letter-spacing:-.01em;scroll-margin-top:20px}
  p{margin:10px 0;color:var(--fg);opacity:.86}
  ul{margin:10px 0;padding-left:0;list-style:none}
  li{position:relative;padding-left:20px;margin:7px 0;opacity:.86}
  li::before{content:"•";position:absolute;left:4px;color:var(--accent)}
  a{color:var(--accent);overflow-wrap:anywhere}
  .toc{border:1px solid var(--rule);border-radius:12px;padding:16px 18px;margin:8px 0 8px}
  .toc h2{margin:0 0 8px;font-size:13px;text-transform:uppercase;letter-spacing:.08em;color:var(--muted)}
  .toc ul{margin:0}
  .toc li{padding-left:0;margin:5px 0;font-size:14px}
  .toc li::before{content:none}
  .toc a{color:var(--fg);opacity:.8;text-decoration:none}
  .toc a:hover{opacity:1;text-decoration:underline}
  /* WebView: no site chrome, tighter gutters, no table of contents. */
  html[data-embed="1"] header.site,html[data-embed="1"] footer.site,html[data-embed="1"] .toc{display:none}
  html[data-embed="1"] main{padding-top:24px}
  html[data-embed="1"] .wrap{padding:0 16px}
</style>
</head>
<body>
<header class="site"><div class="wrap">
  <a class="brand" href="${esc(SITE)}/">${esc(BRAND)}</a>
  <nav><a href="${esc(SITE)}/privacy">Privacy</a><a href="${esc(SITE)}/terms">Terms</a></nav>
</div></header>

<main><div class="wrap">
  <h1>${esc(data.title)}</h1>
  ${data.subtitle ? `<p class="subtitle">${esc(data.subtitle)}</p>` : ""}
  ${toc ? `<nav class="toc"><h2>Contents</h2><ul>${toc}</ul></nav>` : ""}
  ${body}
</div></main>

<footer class="site"><div class="wrap">
  <small>© ${new Date().getFullYear()} ${esc(BRAND)}</small>
  <span><a href="${esc(SITE)}/privacy">Privacy</a><a href="${esc(SITE)}/terms">Terms</a></span>
</div></footer>
</body>
</html>
`;
}

for (const page of PAGES) {
  const data = await loadData(page.src);
  if (!data || !Array.isArray(data.sections)) throw new Error(`No sections in ${page.src}`);
  const dir = resolve(ROOT, "public", page.slug);
  await mkdir(dir, { recursive: true });
  const html = renderPage(data, page);
  await writeFile(resolve(dir, "index.html"), html, "utf8");
  console.log(`public/${page.slug}/index.html — ${data.sections.length} sections, ${(html.length / 1024).toFixed(1)} KB`);
}
