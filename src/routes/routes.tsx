import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

// Lazy-loaded pages
const HomePage = lazy(() => import("../pages/home/HomePage"));
const MentorshipPage = lazy(() => import("../pages/mentorship/MentorshipPage"));
const NotFoundPage = lazy(() => import("../pages/notFound/NotFoundPage"));

import RootLayout from "../pages/Root";
import { ErrorElement } from "../components/ui/ErrorElement";
import { PageLoader } from "../components/ui/PageLoader";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "mentorship",
        element: (
          <Suspense fallback={<PageLoader />}>
            <MentorshipPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<PageLoader />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default routes;
