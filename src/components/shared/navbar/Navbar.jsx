import React, { useState } from 'react'
import logo from '../../../assets/logo.png'

export default function Navbar() {

   const [signin ] = useState(false);
  return (
//     <div>
//         <header className="mt-8 w-[1170px] h-[48px] flex justify-between items-center">
// <div className='header flex gap-2 font-bold text-lg'>
//     <img src={logo} alt=""/> JobInto
// </div>
//  <ul className="nav flex justify-center items-center gap-7">
//           <li className="nav-item border-b border-blue-600 text-blue-600">
//             <a href="/">Home</a>
//           </li>
//           <li className="nav-item">
//             <a href="/about">About Us</a>
//           </li>
//           <li className="nav-item">
//             <a href="/contact">Contact Us</a>
//           </li>
//         </ul>
//         <div className='flex justify-center items-center gap-8'>
//              <div className="login text-blue-600 px-9 py-3 border rounded border-gray-500">
//                 Login
//               </div>
//               <div className="register text-white px-9 py-3 rounded border-blue-700 bg-blue-700">
//                 Register
//               </div>
//         </div>
//         </header>
//     </div>

 <div className='px-[135px] py-[32px]'>
      <header className=" flex justify-between items-center">
        <div className="header flex gap-2 font-bold text-lg">
          <img src={logo} alt="" /> JobInto{" "}
        </div>
        <ul className="nav flex justify-center items-center gap-7">
          <li className="nav-item border-b border-blue-600 text-blue-600">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">About Us</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
        <div
          className={`auth flex justify-center items-center ${
            signin ? " gap-3" : " gap-8"
          }`}
        >
          {!signin ? (
            <>
              <div className="login text-blue-600 px-9 py-3 border rounded border-gray-500">
                Login
              </div>
              <div className="register text-white px-9 py-3 rounded border-blue-700 bg-blue-700">
                Register
              </div>
            </>
          ) : (
            <>
              <div>
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="/avatar.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center items-start">
                <div className="text-lg font-medium">MD Rumon Khan</div>
                <div className="text-gray-500">Software Engineer</div>
              </div>
            </>
          )}
        </div>
      </header>
    </div>
  )
}
