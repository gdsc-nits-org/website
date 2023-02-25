import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Events from "./pages/Events/Events";
import Footer from "./components/Footer/Footer";
import ProjectsShow from "./components/ProjectsCard/Projectshow";
import Page404 from "./pages/PageNotFound/Page404";
import Navbar from "./components/Navbar/Navbar";
// import { Router } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ), // Putting the navbar in the pages
    // element: <Home />,
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
    element: <Events />,
  },
  {
    path: "/projects/:projectID",
    element: <ProjectsShow />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
