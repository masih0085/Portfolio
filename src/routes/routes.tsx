import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/Root";
import HomePage from "../pages/home/HomePage";
import MentorshipPage from "../pages/mentorship/MentorshipPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "mentorship",
        element: <MentorshipPage />,
      },
    ],
  },
]);

export default routes;
