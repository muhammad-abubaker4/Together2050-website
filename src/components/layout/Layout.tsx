import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-red focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}
