import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Analytics } from "./components/Analytics";

function App() {
  return (
    <>
      <Analytics />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
