import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Analytics } from "./components/Analytics";
import { CookieConsent } from "./components/CookieConsent";

function App() {
  return (
    <>
      <Analytics />
      <RouterProvider router={router} />
      <CookieConsent />
    </>
  );
}

export default App;
