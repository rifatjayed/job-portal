import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Description from "./components/pages/description/Description"
import Home from "./components/pages/home/Home"
import JobSearch from "./components/pages/jobSearch/JobSearch"
import Navbar from "./components/shared/navbar/Navbar"

function App() {
 
const router = createBrowserRouter([
  {
    path: "/",
    element:  <>
    <Navbar></Navbar>
    <Home></Home>
   ,
    </>,
  },
   {
    path: "/job",
    element: <>
    <Navbar></Navbar>
    <JobSearch></JobSearch> ,
    </>
    
    
  },

   {
    path: "/jobDescrption",
    
    element: 
    <>
     <Navbar></Navbar>
    <Description></Description>,
    
    </>
    
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
   
  )
}

export default App
