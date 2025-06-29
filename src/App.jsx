import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Description from "./components/pages/description/Description";
import Home from "./components/pages/home/Home";
import JobSearch from "./components/pages/jobSearch/JobSearch";
import About from "./components/pages/about/About";
import Layout from "./components/layout/Layout";
import Contact from "./components/pages/contact/Contact";
import Login from "./components/pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/jobs",
        element: <JobSearch />,
      },
      {
        path: "/job-description",
        element: <Description />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <main className="overflow-x-hidden">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
