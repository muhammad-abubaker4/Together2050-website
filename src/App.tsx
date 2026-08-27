import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { About } from "./pages/About";
import { Collaborate } from "./pages/Collaborate";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { RouteError } from "./pages/RouteError";
import { Team } from "./pages/Team";
import { VisionMission } from "./pages/VisionMission";
import { WhatWeDo } from "./pages/WhatWeDo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        errorElement: <RouteError />,
        children: [
          { index: true, element: <Home /> },
          { path: "about", element: <About /> },
          { path: "vision", element: <VisionMission /> },
          { path: "what-we-do", element: <WhatWeDo /> },
          { path: "team", element: <Team /> },
          { path: "collaborate", element: <Collaborate /> },
          { path: "contact", element: <Contact /> },
          { path: "*", element: <NotFound /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
