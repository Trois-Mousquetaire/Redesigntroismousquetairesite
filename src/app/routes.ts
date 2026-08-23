import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import YuFuKane from "./pages/YuFuKane";
import StackTower from "./pages/StackTower";
import Quotiv from "./pages/Quotiv";
import SubSettle from "./pages/SubSettle";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "contact", Component: Contact },
      { path: "portfolio", Component: Portfolio },
      { path: "privacy", Component: Privacy },
      { path: "terms", Component: Terms },
      { path: "YuFuKane", Component: YuFuKane },
      { path: "StackTower", Component: StackTower },
      { path: "Quotiv", Component: Quotiv },
      { path: "SubSettle", Component: SubSettle },
      { path: "*", Component: Home }, // Fallback to Home for now
    ],
  },
]);
