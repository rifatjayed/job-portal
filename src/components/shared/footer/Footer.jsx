// import React from "react";

// function Footer() {
//   return (
//     <footer className="w-full bg-black text-white  flex flex-col items-center">
//       <div className="footer_top w-[1170px] flex gap-16 py-10">
//         <div className="description flex flex-col gap-4">
//           <div className="title flex items-center gap-2 text-[20px] font-medium">
//             <img src="/footerLogo.png" alt="" />
//             <p className="text-[24px] font-medium">Jobinto</p>
//           </div>
//           <div className="desc leading-[180%]">
//             Excellent resource for job seekers that have a strong interest in
//             startups. It's easier to land your ideal job.
//           </div>
//         </div>
//         <div className="links flex gap-11.5">
//           <div className="about">
//             <h6 className="text-[20px] font-medium pb-4">About</h6>
//             <ul className="leading-6">
//               <li className="leading-10 whitespace-nowrap">Companies</li>
//               <li className="leading-10 whitespace-nowrap">Courses</li>
//               <li className="leading-10 whitespace-nowrap">Featured Jobs</li>
//               <li className="leading-10 whitespace-nowrap">Hot Jobs</li>
//               <li className="leading-10 whitespace-nowrap">Privacy Policy</li>
//               <li className="leading-10 whitespace-nowrap">
//                 Terms and Conditions
//               </li>
//             </ul>
//           </div>
//           <div className="resources">
//             <h6 className="text-[20px] font-medium pb-4">Resources</h6>
//             <ul>
//               <li className="leading-10 whitespace-nowrap">Help Docs</li>
//               <li className="leading-10 whitespace-nowrap">Guide</li>
//               <li className="leading-10 whitespace-nowrap">Update</li>
//               <li className="leading-10 whitespace-nowrap">Contact Us</li>
//             </ul>
//           </div>
//         </div>
//         <div className="subscribe flex flex-col gap-10">
//           <div className="flex flex-col gap-6">
//             <div className="title text-[20px] font-medium">
//               Get job notifications
//             </div>
//             <div className="desc leading-[180%]">
//               The newest job news, and updates sent to your inbox daily.
//             </div>
//           </div>

//           <form className="flex gap-2">
//             <input
//               className="w-[223px] h-[48px] bg-white text-black px-4 py-3"
//               type="email"
//               placeholder="Enter your email"
//               required
//             />
//             <button className="bg-blue-600 font-medium px-6 py-3" type="submit">
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>
//       <hr className="w-full h-[1px] bg-gray-400 border-0" />
//       <div className="footer_bottom w-[1170px] flex justify-between items-center py-6">
//         <div className="footer_text">© 2025 JobInto. All rights reserved.</div>
//         <ul className="footer_links flex gap-6">
//           <li>
//             <a href="/fb">facebook</a>
//           </li>
//           <li>
//             <a href="/insta">instagram</a>
//           </li>
//           <li>
//             <a href="/x">x</a>
//           </li>
//         </ul>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-black text-white flex flex-col items-center">
      {/* Top Section */}
      <div className="footer_top w-full max-w-[1170px] px-4 sm:px-0 flex flex-col lg:flex-row gap-10 lg:gap-16 py-10">
        {/* Description */}
        <div className="description flex flex-col gap-4 lg:w-1/3">
          <div className="title flex items-center gap-2 text-[20px] font-medium">
            <img src="/footerLogo.png" alt="logo" />
            <p className="text-[24px] font-medium">Jobinto</p>
          </div>
          <div className="desc leading-[180%]">
            Excellent resource for job seekers that have a strong interest in
            startups. It's easier to land your ideal job.
          </div>
        </div>

        {/* Links */}
        <div className="links flex flex-col sm:flex-row gap-10 lg:gap-11.5 lg:w-1/3">
          <div className="about">
            <h6 className="text-[20px] font-medium pb-4">About</h6>
            <ul className="leading-6">
              <li className="leading-10 whitespace-nowrap">Companies</li>
              <li className="leading-10 whitespace-nowrap">Courses</li>
              <li className="leading-10 whitespace-nowrap">Featured Jobs</li>
              <li className="leading-10 whitespace-nowrap">Hot Jobs</li>
              <li className="leading-10 whitespace-nowrap">Privacy Policy</li>
              <li className="leading-10 whitespace-nowrap">
                Terms and Conditions
              </li>
            </ul>
          </div>
          <div className="resources">
            <h6 className="text-[20px] font-medium pb-4">Resources</h6>
            <ul>
              <li className="leading-10 whitespace-nowrap">Help Docs</li>
              <li className="leading-10 whitespace-nowrap">Guide</li>
              <li className="leading-10 whitespace-nowrap">Update</li>
              <li className="leading-10 whitespace-nowrap">Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Subscribe */}
        <div className="subscribe flex flex-col gap-10 lg:w-1/3">
          <div className="flex flex-col gap-6">
            <div className="title text-[20px] font-medium">
              Get job notifications
            </div>
            <div className="desc leading-[180%]">
              The newest job news, and updates sent to your inbox daily.
            </div>
          </div>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              className="w-full sm:w-[223px] h-[48px] bg-white text-black px-4 py-3"
              type="email"
              placeholder="Enter your email"
              required
            />
            <button
              className="bg-blue-600 font-medium px-6 py-3 w-full sm:w-auto"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full h-[1px] bg-gray-400 border-0" />

      {/* Bottom Section */}
      <div className="footer_bottom w-full max-w-[1170px] px-4 sm:px-0 flex flex-col sm:flex-row justify-between items-center gap-4 py-6">
        <div className="footer_text text-center sm:text-left">
          © 2025 JobInto. All rights reserved.
        </div>
        <ul className="footer_links flex gap-6">
          <li>
            <a href="/fb">facebook</a>
          </li>
          <li>
            <a href="/insta">instagram</a>
          </li>
          <li>
            <a href="/x">x</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
