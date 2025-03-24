import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/Root";
import HomePage from "../pages/home/HomePage";
import MentorshipPage from "../pages/mentorship/MentorshipPage";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import { ErrorElement } from "../components/ui/ErrorElement";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "mentorship",
        element: <MentorshipPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default routes;
