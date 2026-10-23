import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { About } from "./pages/About";
import { AdvisoryCouncil } from "./pages/AdvisoryCouncil";
import { Collaborate } from "./pages/Collaborate";
import { CoreTeam } from "./pages/CoreTeam";
import { EventDetail } from "./pages/EventDetail";
import { GetInvolved } from "./pages/GetInvolved";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { RouteError } from "./pages/RouteError";
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
          { path: "team", element: <CoreTeam /> },
          { path: "team/core-team", element: <Navigate to="/team" replace /> },
          { path: "team/advisory-council", element: <AdvisoryCouncil /> },
          { path: "collaborate", element: <Collaborate /> },
          { path: "get-involved", element: <GetInvolved /> },
          { path: "events/the-cost-of-perfection", element: <EventDetail /> },
          { path: "contact", element: <Navigate to="/get-involved#contact" replace /> },
          { path: "*", element: <NotFound /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
