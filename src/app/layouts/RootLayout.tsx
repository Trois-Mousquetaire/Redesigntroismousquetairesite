import { Outlet, ScrollRestoration } from "react-router";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ScrollToTop } from "../components/layout/ScrollToTop";
import { Toaster } from "../components/ui/sonner";

/**
 * App shell shared by every route: fixed navbar, routed page content,
 * footer, scroll-to-top button, and toast host. Scroll position resets
 * on navigation via ScrollRestoration.
 */
export default function RootLayout() {
  return (
    <div className="min-h-screen bg-[#08070b] text-white antialiased">
      <ScrollRestoration />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster />
    </div>
  );
}
