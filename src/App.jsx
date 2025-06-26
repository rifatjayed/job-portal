import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Description from "./components/pages/description/Description";
import Home from "./components/pages/home/Home";
import JobSearch from "./components/pages/jobSearch/JobSearch";
import Navbar from "./components/shared/navbar/Navbar";
import About from "./components/pages/about/About";
import Footer from "./components/shared/footer/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar></Navbar>
          <Home></Home>,<Footer></Footer>
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar></Navbar>
          <About></About>,<Footer></Footer>
        </>
      ),
    },
    {
      path: "/job",
      element: (
        <>
          <Navbar></Navbar>
          <JobSearch></JobSearch> ,<Footer></Footer>
        </>
      ),
    },

    {
      path: "/jobDescrption",

      element: (
        <>
          <Navbar></Navbar>
          <Description></Description>,<Footer></Footer>
        </>
      ),
    },
  ]);
  return (
    //       <div className="">
    //          {/* <div className="flex flex-col items-center gap-20"></div> */}
    //  {/* <Home></Home> */}
    //  <Navbar></Navbar>
    //  {/* <JobSearch></JobSearch> */}
    //  <Description></Description>
    //     </div>
    <div>
      <main className="overflow-x-hidden">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
