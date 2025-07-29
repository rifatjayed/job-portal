// import React from "react";

// import jobIcon from "/Group.png";
// import { RxBookmark } from "react-icons/rx";
// import { TiBookmark } from "react-icons/ti";

// import { Link } from "react-router-dom";

// export default function JobItem() {
//   return (
//     <>
//       <Link
//         to="/job-description"
//         className="flex p-[24px] shadow-lg inset-shadow-sm  justify-between mt-[40px]"
//       >
//         <div className="">
//           <div className="flex">
//             <div>
//               <img className="" src={jobIcon} />
//             </div>
//             <div className="flex flex-col gap-2 ms-[24px]">
//               <h1 className="text-xl font-semibold">Senior UI Designer</h1>
//               <div className="flex font-normal text-[#5E6670]">
//                 <p className="text-base">Creative Solutions |</p>
//                 <p className="text-base">Uttara, Dhaka</p>
//               </div>

//               <div className="flex font-normal items-center gap-2">
//                 <p className=" text-[#9199A3] bg-[#F1F2F4] rounded-3xl px-[10px] py-[6px]">
//                   Full-Time{" "}
//                 </p>
//                 |
//                 <p className="text-base text-[#0A65CC] border border-[#0A65CC] rounded-3xl px-[10px] py-[6px]">
//                   $ 1500 - $ 2000
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col gap-[21px]">
//           <div className="text-right">
//             <div className="w-[215px] h-[6px] mb-2 bg-gray-200 ms-auto relative ">
//               <div
//                 className="absolute top-0 left-0 h-full bg-gray-500 "
//                 style={{ width: `${(10 / 200) * 100}%` }} // 5%
//               ></div>
//             </div>
//             <p className="font-normal text-base text-gray-600">
//               10 applicants on 200 posts
//             </p>
//           </div>

//           <div className="flex justify-between">
//             <button className="w-14 text-[#0A65CC] text-2xl border rounded border-[#0A65CC]">
//               <TiBookmark size={30} className="mx-auto" />
//             </button>
//             <button className="text-base text-white bg-[#0A65CC] px-[48px] py-[12px] ms-[8px] rounded">
//               Apply now
//             </button>
//           </div>
//         </div>
//       </Link>
//     </>
//   );
// }

import React from "react";
import jobIcon from "/Group.png";
import { RxBookmark } from "react-icons/rx";
import { TiBookmark } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function JobItem() {
  return (
    <Link
      to="/job-description"
      className="flex flex-col lg:flex-row p-6 shadow-lg inset-shadow-sm mt-10 gap-6"
    >
      {/* Left Part */}
      <div className="flex flex-col lg:flex-row flex-1">
        <div>
          <img src={jobIcon} alt="Company Logo" />
        </div>
        <div className="flex flex-col gap-2 mt-4 lg:mt-0 lg:ms-6">
          <h1 className="text-xl font-semibold">Senior UI Designer</h1>
          <div className="flex flex-wrap font-normal text-[#5E6670] gap-1">
            <p className="text-base">Creative Solutions |</p>
            <p className="text-base">Uttara, Dhaka</p>
          </div>

          <div className="flex flex-wrap font-normal items-center gap-2 mt-2">
            <p className="text-[#9199A3] bg-[#F1F2F4] rounded-3xl px-3 py-1">
              Full-Time
            </p>
            <span className="hidden lg:inline">|</span>
            <p className="text-base text-[#0A65CC] border border-[#0A65CC] rounded-3xl px-3 py-1">
              $1500 - $2000
            </p>
          </div>
        </div>
      </div>

      {/* Right Part */}
      <div className="flex flex-col gap-5 lg:items-end w-full lg:w-auto">
        <div className="w-full lg:w-[215px] text-left lg:text-right">
          <div className="w-full h-1.5 mb-2 bg-gray-200 relative">
            <div
              className="absolute top-0 left-0 h-full bg-gray-500"
              style={{ width: `${(10 / 200) * 100}%` }}
            />
          </div>
          <p className="font-normal text-base text-gray-600">
            10 applicants on 200 posts
          </p>
        </div>

        <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
          <button className="w-full sm:w-14 text-[#0A65CC] text-2xl border rounded border-[#0A65CC]">
            <TiBookmark size={30} className="mx-auto" />
          </button>
          <button className="w-full sm:w-auto text-base text-white bg-[#0A65CC] px-6 py-3 rounded">
            Apply now
          </button>
        </div>
      </div>
    </Link>
  );
}
