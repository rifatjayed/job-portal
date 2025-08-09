// import React, { useEffect, useRef, useState, useContext } from "react";
// import { NavLink, Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { AuthContext } from "../../../Context/AuthContext";

// export default function Navbar() {
//   const [signin, setSignin] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { user, logOut } = useContext(AuthContext);

//   const dropdownRef = useRef(null);

//   const activeClass = "border-b border-blue-600 text-blue-600";

//   const handleLogOut = () => {
//     logOut()
//       .then((result) => console.log(result))
//       .catch((error) => console.log(error));
//   };

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="fixed top-0 z-[60] w-full bg-white pb-4">
//       <header className="w-full max-w-[1170px] h-auto mx-auto mt-8 flex flex-nowrap justify-between items-center px-4 md:px-0 gap-y-4">
//         {/* Logo */}
//         <Link to="/" className=" flex items-center gap-2 font-bold text-lg">
//           <img src="/logo.svg" alt="logo" className="w-6 h-6" />
//           JobInto
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center justify-between w-full max-w-[800px]">
//           <nav className="flex items-center gap-7">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? activeClass : "hover:text-blue-600"
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 isActive ? activeClass : "hover:text-blue-600"
//               }
//             >
//               About Us
//             </NavLink>
//             <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 isActive ? activeClass : "hover:text-blue-600"
//               }
//             >
//               Contact Us
//             </NavLink>
//           </nav>

//           <div
//             className={`relative flex items-center transition-all ${
//               signin ? "gap-3" : "gap-8"
//             }`}
//             ref={dropdownRef}
//             onClick={() => setOpen(!open)}
//           >
//             {user ? (
//               <>
//                 <img
//                   className="w-12 h-12 rounded-full object-cover cursor-pointer"
//                   src="/avatar.png"
//                   alt=""
//                 />
//                 <div className="flex flex-col items-start cursor-pointer">
//                   <div className="text-lg font-medium">{user.name}</div>
//                 </div>
//                 {open && (
//                   <div className="absolute w-[300px] shadow-2xl bg-gray-100 bottom-0 right-0 translate-y-72 z-50 rounded-lg">
//                     <div className="relative flex gap-4 p-4 pb-6 cursor-pointer">
//                       <img
//                         className="w-12 h-12 rounded-full object-cover"
//                         src="/avatar.png"
//                         alt=""
//                       />
//                       <div className="flex flex-col justify-center items-start">
//                         <div className="text-lg font-medium">{user.name}</div>
//                       </div>
//                       <img
//                         className="absolute top-0 right-4 -translate-y-full z-22"
//                         src="/trigon.svg"
//                         alt=""
//                       />
//                     </div>
//                     <div>
//                       <Link
//                         to="/edit-profile"
//                         className="flex items-center gap-3 py-2 px-6 border-t border-b border-gray-400 hover:bg-white"
//                       >
//                         <img className="w-6 h-6" src="/setting.svg" alt="" /> My
//                         Profile
//                       </Link>
//                       <Link
//                         to="/jobs"
//                         className="flex items-center gap-3 py-2 px-6 hover:bg-white"
//                       >
//                         <img className="w-6 h-6" src="/setting.svg" alt="" /> My
//                         Jobs
//                       </Link>
//                       <Link
//                         to="/edit-profile"
//                         className="flex items-center gap-3 py-2 px-6 border-t border-b border-gray-400 hover:bg-white"
//                       >
//                         <img className="w-6 h-6" src="/setting.svg" alt="" />{" "}
//                         Settings
//                       </Link>
//                     </div>
//                     <div
//                       className="text-center cursor-pointer pt-6 pb-4 text-lg text-blue-600 font-medium"
//                       onClick={handleLogOut}
//                     >
//                       Sign Out
//                     </div>
//                   </div>
//                 )}
//               </>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   className="text-blue-600 px-9 py-3 border rounded border-gray-500"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/register"
//                   className="text-white px-9 py-3 rounded border-blue-600 bg-blue-600"
//                 >
//                   Register
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </header>

//       {/* Mobile Menu */}
//       {/* {menuOpen && (
//         // <div className="md:hidden px-4 pb-4 space-y-4 bg-white shadow-md">
//         <div className="md:hidden px-4 pb-4 space-y-4 bg-white shadow-md animate-slideDown">
//           <nav className="flex flex-col gap-4 text-base">
//             <NavLink
//               to="/"
//               onClick={() => setMenuOpen(false)}
//               className={({ isActive }) => (isActive ? activeClass : "")}
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/about"
//               onClick={() => setMenuOpen(false)}
//               className={({ isActive }) => (isActive ? activeClass : "")}
//             >
//               About Us
//             </NavLink>
//             <NavLink
//               to="/contact"
//               onClick={() => setMenuOpen(false)}
//               className={({ isActive }) => (isActive ? activeClass : "")}
//             >
//               Contact Us
//             </NavLink>
//           </nav>
//           <div className="flex flex-col gap-3 pt-2">
//             {!user ? (
//               <>
//                 <Link
//                   to="/login"
//                   onClick={() => setMenuOpen(false)}
//                   className="text-blue-600 px-4 py-2 border rounded border-gray-500 text-center"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/register"
//                   onClick={() => setMenuOpen(false)}
//                   className="text-white px-4 py-2 rounded border-blue-600 bg-blue-600 text-center"
//                 >
//                   Register
//                 </Link>
//               </>
//             ) : (
//               <div className="flex flex-col gap-2">
//                 <div className="flex items-center gap-2">
//                   <img
//                     className="w-10 h-10 rounded-full object-cover"
//                     src="/avatar.png"
//                     alt=""
//                   />
//                   <div>
//                     <div className="text-base font-medium">{user.name}</div>
//                   </div>
//                 </div>
//                 <Link
//                   to="/edit-profile"
//                   onClick={() => setMenuOpen(false)}
//                   className="hover:underline"
//                 >
//                   My Profile
//                 </Link>
//                 <Link
//                   to="/jobs"
//                   onClick={() => setMenuOpen(false)}
//                   className="hover:underline"
//                 >
//                   My Jobs
//                 </Link>
//                 <Link
//                   to="/edit-profile"
//                   onClick={() => setMenuOpen(false)}
//                   className="hover:underline"
//                 >
//                   Settings
//                 </Link>
//                 <button
//                   onClick={() => {
//                     handleLogOut();
//                     setMenuOpen(false);
//                   }}
//                   className="text-blue-600 mt-2 text-left"
//                 >
//                   Sign Out
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )} */}
//       {/* Mobile Hamburger */}
//       <div className="md:hidden  flex justify-end">
//         <button onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform ${
//           menuOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 ease-in-out md:hidden z-50`}
//       >
//         <div className="flex justify-between items-center p-4 border-b">
//           <Link
//             to="/"
//             onClick={() => setMenuOpen(false)}
//             className="flex items-center gap-2 font-bold text-lg text-blue-600"
//           >
//             <img src="/logo.svg" alt="logo" className="w-6 h-6" />
//             JobInto
//           </Link>
//           <button onClick={() => setMenuOpen(false)}>
//             <X size={26} />
//           </button>
//         </div>

//         <nav className="flex flex-col p-4 gap-4 text-gray-700">
//           <NavLink
//             to="/"
//             onClick={() => setMenuOpen(false)}
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-600 font-medium border-l-4 border-blue-600 pl-2"
//                 : "hover:text-blue-600"
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             onClick={() => setMenuOpen(false)}
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-600 font-medium border-l-4 border-blue-600 pl-2"
//                 : "hover:text-blue-600"
//             }
//           >
//             About Us
//           </NavLink>
//           <NavLink
//             to="/contact"
//             onClick={() => setMenuOpen(false)}
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-600 font-medium border-l-4 border-blue-600 pl-2"
//                 : "hover:text-blue-600"
//             }
//           >
//             Contact Us
//           </NavLink>
//         </nav>

//         <div className="p-4 border-t mt-auto">
//           {!user ? (
//             <div className="flex flex-col gap-3">
//               <Link
//                 to="/login"
//                 onClick={() => setMenuOpen(false)}
//                 className="text-blue-600 px-4 py-2 border border-gray-400 rounded text-center hover:bg-blue-50 transition"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 onClick={() => setMenuOpen(false)}
//                 className="bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700 transition"
//               >
//                 Register
//               </Link>
//             </div>
//           ) : (
//             <div className="flex flex-col gap-3">
//               <div className="flex items-center gap-3">
//                 <img
//                   src="/avatar.png"
//                   className="w-10 h-10 rounded-full object-cover"
//                   alt=""
//                 />
//                 <span className="font-medium">{user.name}</span>
//               </div>
//               <Link
//                 to="/edit-profile"
//                 onClick={() => setMenuOpen(false)}
//                 className="hover:underline"
//               >
//                 My Profile
//               </Link>
//               <Link
//                 to="/jobs"
//                 onClick={() => setMenuOpen(false)}
//                 className="hover:underline"
//               >
//                 My Jobs
//               </Link>
//               <Link
//                 to="/settings"
//                 onClick={() => setMenuOpen(false)}
//                 className="hover:underline"
//               >
//                 Settings
//               </Link>
//               <button
//                 onClick={() => {
//                   handleLogOut();
//                   setMenuOpen(false);
//                 }}
//                 className="text-red-600 text-left hover:underline"
//               >
//                 Sign Out
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useRef, useState, useContext } from "react";
// import { NavLink, Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { AuthContext } from "../../../Context/AuthContext";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { user, logOut } = useContext(AuthContext);

//   const dropdownRef = useRef(null);

//   const activeClass = "border-b border-blue-600 text-blue-600";

//   const handleLogOut = () => {
//     logOut()
//       .then((result) => console.log(result))
//       .catch((error) => console.log(error));
//   };

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="fixed top-0 z-[60] w-full bg-white pb-4">
//       <header className="w-full max-w-[1170px] h-auto mx-auto mt-8 flex justify-between items-center px-4 md:px-0 gap-y-4">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 font-bold text-lg">
//           <img src="/logo.svg" alt="logo" className="w-6 h-6" />
//           JobInto
//         </Link>

//         {/* Desktop and Mobile Menu Container */}
//         <div className="flex items-center gap-8">
//           {/* Desktop Nav */}
//           {/* <nav className="hidden md:flex items-center gap-7"> */}
//           <nav className="hidden md:flex flex-1 justify-center items-center gap-7">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? activeClass : "hover:text-blue-600"
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 isActive ? activeClass : "hover:text-blue-600"
//               }
//             >
//               About Us
//             </NavLink>
//             <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 isActive ? activeClass : "hover:text-blue-600"
//               }
//             >
//               Contact Us
//             </NavLink>
//           </nav>

//           {/* Desktop User/Auth */}
//           <div
//             className={`relative hidden md:flex items-center transition-all gap-8`}
//             ref={dropdownRef}
//             onClick={() => setOpen(!open)}
//           >
//             {user ? (
//               <>
//                 <img
//                   className="w-12 h-12 rounded-full object-cover cursor-pointer"
//                   src="/avatar.png"
//                   alt=""
//                 />
//                 <div className="flex flex-col items-start cursor-pointer">
//                   <div className="text-lg font-medium">{user.name}</div>
//                 </div>
//                 {open && (
//                   <div className="absolute w-[300px] shadow-2xl bg-gray-100 bottom-0 right-0 translate-y-72 z-50 rounded-lg">
//                     <div className="relative flex gap-4 p-4 pb-6 cursor-pointer">
//                       <img
//                         className="w-12 h-12 rounded-full object-cover"
//                         src="/avatar.png"
//                         alt=""
//                       />
//                       <div className="flex flex-col justify-center items-start">
//                         <div className="text-lg font-medium">{user.name}</div>
//                       </div>
//                       <img
//                         className="absolute top-0 right-4 -translate-y-full z-22"
//                         src="/trigon.svg"
//                         alt=""
//                       />
//                     </div>
//                     <div>
//                       <Link
//                         to="/edit-profile"
//                         className="flex items-center gap-3 py-2 px-6 border-t border-b border-gray-400 hover:bg-white"
//                       >
//                         <img className="w-6 h-6" src="/setting.svg" alt="" /> My
//                         Profile
//                       </Link>
//                       <Link
//                         to="/jobs"
//                         className="flex items-center gap-3 py-2 px-6 hover:bg-white"
//                       >
//                         <img className="w-6 h-6" src="/setting.svg" alt="" /> My
//                         Jobs
//                       </Link>
//                       <Link
//                         to="/edit-profile"
//                         className="flex items-center gap-3 py-2 px-6 border-t border-b border-gray-400 hover:bg-white"
//                       >
//                         <img className="w-6 h-6" src="/setting.svg" alt="" />{" "}
//                         Settings
//                       </Link>
//                     </div>
//                     <div
//                       className="text-center cursor-pointer pt-6 pb-4 text-lg text-blue-600 font-medium"
//                       onClick={handleLogOut}
//                     >
//                       Sign Out
//                     </div>
//                   </div>
//                 )}
//               </>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   className="text-blue-600 px-9 py-3 border rounded border-gray-500"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/register"
//                   className="text-white px-9 py-3 rounded border-blue-600 bg-blue-600"
//                 >
//                   Register
//                 </Link>
//               </>
//             )}
//           </div>
//           {/* Mobile Hamburger */}
//           <div className="md:hidden">
//             <button onClick={() => setMenuOpen(!menuOpen)}>
//               {menuOpen ? <X size={26} /> : <Menu size={26} />}
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform ${
//           menuOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 ease-in-out md:hidden z-50`}
//       >
//         <div className="flex justify-between items-center p-4 border-b">
//           <Link
//             to="/"
//             onClick={() => setMenuOpen(false)}
//             className="flex items-center gap-2 font-bold text-lg text-blue-600"
//           >
//             <img src="/logo.svg" alt="logo" className="w-6 h-6" />
//             JobInto
//           </Link>
//           <button onClick={() => setMenuOpen(false)}>
//             <X size={26} />
//           </button>
//         </div>

//         <nav className="flex flex-col p-4 gap-4 text-gray-700">
//           <NavLink
//             to="/"
//             onClick={() => setMenuOpen(false)}
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-600 font-medium border-l-4 border-blue-600 pl-2"
//                 : "hover:text-blue-600"
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             onClick={() => setMenuOpen(false)}
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-600 font-medium border-l-4 border-blue-600 pl-2"
//                 : "hover:text-blue-600"
//             }
//           >
//             About Us
//           </NavLink>
//           <NavLink
//             to="/contact"
//             onClick={() => setMenuOpen(false)}
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-600 font-medium border-l-4 border-blue-600 pl-2"
//                 : "hover:text-blue-600"
//             }
//           >
//             Contact Us
//           </NavLink>
//         </nav>

//         <div className="p-4 border-t mt-auto">
//           {!user ? (
//             <div className="flex flex-col gap-3">
//               <Link
//                 to="/login"
//                 onClick={() => setMenuOpen(false)}
//                 className="text-blue-600 px-4 py-2 border border-gray-400 rounded text-center hover:bg-blue-50 transition"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 onClick={() => setMenuOpen(false)}
//                 className="bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700 transition"
//               >
//                 Register
//               </Link>
//             </div>
//           ) : (
//             <div className="flex flex-col gap-3">
//               <div className="flex items-center gap-3">
//                 <img
//                   src="/avatar.png"
//                   className="w-10 h-10 rounded-full object-cover"
//                   alt=""
//                 />
//                 <span className="font-medium">{user.name}</span>
//               </div>
//               <Link
//                 to="/edit-profile"
//                 onClick={() => setMenuOpen(false)}
//                 className="hover:underline"
//               >
//                 My Profile
//               </Link>
//               <Link
//                 to="/jobs"
//                 onClick={() => setMenuOpen(false)}
//                 className="hover:underline"
//               >
//                 My Jobs
//               </Link>
//               <Link
//                 to="/settings"
//                 onClick={() => setMenuOpen(false)}
//                 className="hover:underline"
//               >
//                 Settings
//               </Link>
//               <button
//                 onClick={() => {
//                   handleLogOut();
//                   setMenuOpen(false);
//                 }}
//                 className="text-red-600 text-left hover:underline"
//               >
//                 Sign Out
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useRef, useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../../../Context/AuthContext";

export default function Navbar() {
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
    <div className="fixed top-0 z-[60] w-full bg-white pb-4">
      <header className="w-full max-w-[1170px] h-auto mx-auto mt-8 flex justify-between items-center px-4 md:px-0">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <img src="/logo.svg" alt="logo" className="w-6 h-6" />
          JobInto
        </Link>

        {/* Desktop and Mobile Menu Container */}
        <div className="flex items-center gap-8">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
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

          {/* Desktop User/Auth */}
          <div
            className={`relative hidden md:flex items-center transition-all gap-8`}
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
          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 font-bold text-lg text-blue-600"
          >
            <img src="/logo.svg" alt="logo" className="w-6 h-6" />
            JobInto
          </Link>
          <button onClick={() => setMenuOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-4 text-gray-700">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium border-l-4 border-blue-600 pl-2"
                : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium border-l-4 border-blue-600 pl-2"
                : "hover:text-blue-600"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium border-l-4 border-blue-600 pl-2"
                : "hover:text-blue-600"
            }
          >
            Contact Us
          </NavLink>
        </nav>

        <div className="p-4 border-t mt-auto">
          {!user ? (
            <div className="flex flex-col gap-3">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="text-blue-600 px-4 py-2 border border-gray-400 rounded text-center hover:bg-blue-50 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <img
                  src="/avatar.png"
                  className="w-10 h-10 rounded-full object-cover"
                  alt=""
                />
                <span className="font-medium">{user.name}</span>
              </div>
              <Link
                to="/edit-profile"
                onClick={() => setMenuOpen(false)}
                className="hover:underline"
              >
                My Profile
              </Link>
              <Link
                to="/jobs"
                onClick={() => setMenuOpen(false)}
                className="hover:underline"
              >
                My Jobs
              </Link>
              <Link
                to="/settings"
                onClick={() => setMenuOpen(false)}
                className="hover:underline"
              >
                Settings
              </Link>
              <button
                onClick={() => {
                  handleLogOut();
                  setMenuOpen(false);
                }}
                className="text-red-600 text-left hover:underline"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
