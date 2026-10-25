import { useSearchParams } from "react-router";

/**
 * True when the page was loaded with `?webview=1`. The NoGrudge app embeds
 * SPA pages (e.g. the invite page) inside an in-app
 * WebView and appends this flag so the site can hide its own chrome
 * (navbar/footer) instead of showing a page-within-a-page.
 */
export function useIsWebview(): boolean {
  const [searchParams] = useSearchParams();
  return searchParams.get("webview") === "1";
}
