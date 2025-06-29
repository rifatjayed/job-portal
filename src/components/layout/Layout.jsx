import Footer from "../shared/footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center gap-20 ">
        <Outlet />
      </main>

      <div className="mt-[160px]">
        <Footer />
      </div>
    </>
  );
}
