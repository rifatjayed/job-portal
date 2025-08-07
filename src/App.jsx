import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Description from "./components/pages/description/Description";
import Home from "./components/pages/home/Home";
import JobSearch from "./components/pages/jobSearch/JobSearch";
import About from "./components/pages/about/About";
import Layout from "./components/layout/Layout";
import Contact from "./components/pages/contact/Contact";
import Login from "./components/pages/login/Login";
import EditProfile from "./components/pages/editProfile/EditProfile";
import Register from "./components/pages/Register";

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
        path: "/job-description/:id",
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
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/edit-profile",
        element: <EditProfile></EditProfile>,
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
