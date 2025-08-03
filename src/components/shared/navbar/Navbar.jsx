import React, { useEffect, useRef, useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../../../Context/AuthContext";

export default function Navbar() {
  const [signin, setSignin] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const dropdownRef = useRef(null);

  const activeClass = "border-b border-blue-600 text-blue-600";

  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="sticky top-0 z-[60] w-full bg-white pb-4">
      <header className="w-full max-w-[1170px] h-auto mx-auto mt-8 flex flex-wrap md:flex-nowrap justify-between items-center px-4 md:px-0 gap-y-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <img src="/logo.svg" alt="logo" className="w-6 h-6" />
          JobInto
        </Link>

        {/* Hamburger */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between w-full max-w-[800px]">
          <nav className="flex items-center gap-7">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClass : "hover:text-blue-600"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClass : "hover:text-blue-600"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeClass : "hover:text-blue-600"
              }
            >
              Contact Us
            </NavLink>
          </nav>

          <div
            className={`relative flex items-center transition-all ${
              signin ? "gap-3" : "gap-8"
            }`}
            ref={dropdownRef}
            onClick={() => setOpen(!open)}
          >
            {user ? (
              <>
                <img
                  className="w-12 h-12 rounded-full object-cover cursor-pointer"
                  src="/avatar.png"
                  alt=""
                />
                <div className="flex flex-col items-start cursor-pointer">
                  <div className="text-lg font-medium">{user.name}</div>
                </div>
                {open && (
                  <div className="absolute w-[300px] shadow-2xl bg-gray-100 bottom-0 right-0 translate-y-72 z-50 rounded-lg">
                    <div className="relative flex gap-4 p-4 pb-6 cursor-pointer">
                      <img
                        className="w-12 h-12 rounded-full object-cover"
                        src="/avatar.png"
                        alt=""
                      />
                      <div className="flex flex-col justify-center items-start">
                        <div className="text-lg font-medium">{user.name}</div>
                      </div>
                      <img
                        className="absolute top-0 right-4 -translate-y-full z-22"
                        src="/trigon.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <Link
                        to="/edit-profile"
                        className="flex items-center gap-3 py-2 px-6 border-t border-b border-gray-400 hover:bg-white"
                      >
                        <img className="w-6 h-6" src="/setting.svg" alt="" /> My
                        Profile
                      </Link>
                      <Link
                        to="/jobs"
                        className="flex items-center gap-3 py-2 px-6 hover:bg-white"
                      >
                        <img className="w-6 h-6" src="/setting.svg" alt="" /> My
                        Jobs
                      </Link>
                      <Link
                        to="/edit-profile"
                        className="flex items-center gap-3 py-2 px-6 border-t border-b border-gray-400 hover:bg-white"
                      >
                        <img className="w-6 h-6" src="/setting.svg" alt="" />{" "}
                        Settings
                      </Link>
                    </div>
                    <div
                      className="text-center cursor-pointer pt-6 pb-4 text-lg text-blue-600 font-medium"
                      onClick={handleLogOut}
                    >
                      Sign Out
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-blue-600 px-9 py-3 border rounded border-gray-500"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-white px-9 py-3 rounded border-blue-600 bg-blue-600"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-white shadow-md">
          <nav className="flex flex-col gap-4 text-base">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClass : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeClass : "")}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeClass : "")}
            >
              Contact Us
            </NavLink>
          </nav>
          <div className="flex flex-col gap-3 pt-2">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="text-blue-600 px-4 py-2 border rounded border-gray-500 text-center"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-white px-4 py-2 rounded border-blue-600 bg-blue-600 text-center"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src="/avatar.png"
                    alt=""
                  />
                  <div>
                    <div className="text-base font-medium">{user.name}</div>
                  </div>
                </div>
                <Link to="/edit-profile" className="hover:underline">
                  My Profile
                </Link>
                <Link to="/jobs" className="hover:underline">
                  My Jobs
                </Link>
                <Link to="/edit-profile" className="hover:underline">
                  Settings
                </Link>
                <button
                  onClick={handleLogOut}
                  className="text-blue-600 mt-2 text-left"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
