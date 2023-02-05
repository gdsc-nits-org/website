import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Team from "./pages/Team/Team";
import Footer from "./components/Footer/Footer";
import ProjectsShow from "./components/Projectsshow/Projectshow";
import Page404 from "./pages/PageNotFound/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    // element: <><Navbar/><Home /></>, // Putting the navbar in the pages
    element: <Page404 />,
  },
  {
    path: "/projects/",
    element: <Projects />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/projects/:projectID",
    element: <ProjectsShow />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
