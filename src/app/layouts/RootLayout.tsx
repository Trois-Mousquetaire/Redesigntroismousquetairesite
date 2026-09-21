import { Outlet, ScrollRestoration } from "react-router";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ScrollToTop } from "../components/layout/ScrollToTop";
import { Toaster } from "../components/ui/sonner";
import { useIsWebview } from "../hooks/useIsWebview";

/**
 * App shell shared by every route: fixed navbar, routed page content,
 * footer, scroll-to-top button, and toast host. Scroll position resets
 * on navigation via ScrollRestoration.
 *
 * When loaded as `?webview=1` (the Sub Settle app embeds Privacy, Terms and
 * Delete account this way), the navbar and footer are hidden so the page
 * reads as in-app content rather than a page-within-a-page.
 */
export default function RootLayout() {
  const isWebview = useIsWebview();

  return (
    <div className="min-h-screen bg-[#08070b] text-white antialiased">
      <ScrollRestoration />
      {!isWebview && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!isWebview && <Footer />}
      {!isWebview && <ScrollToTop />}
      <Toaster />
    </div>
  );
}
