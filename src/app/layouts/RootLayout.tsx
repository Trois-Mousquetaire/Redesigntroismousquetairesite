import { Outlet, ScrollRestoration } from "react-router";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ScrollToTop } from "../components/layout/ScrollToTop";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#08070b] text-[#f7f8f8] selection:bg-[#00A82D]/40 selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <ScrollRestoration />
    </div>
  );
}