// import React from "react";

// import GearIcon from "../../../assets/gears.svg?react";

// function BannerProfile() {
//   return (
//     <div className="relative w-full h-[458px] flex justify-between">
//       <img
//         src="/typing.png"
//         alt=""
//         className="absolute inset-0 w-full h-full object-cover opacity-72 -z-2"
//       />
//       <div className="absolute flex justify-center items-center w-[180px] h-[200px] rounded bg-sky-100 left-[135px] -bottom-[70px]">
//         <div className="w-30 h-30 flex justify-center items-center  rounded-full bg-[linear-gradient(to_bottom,_#262261,_#90278E)]">
//           <GearIcon />
//         </div>
//       </div>
//       <div className="absolute inset-0 bg-blue-700 opacity-90 -z-2"></div>
//       <div className="w-[340px] text-[56px] font-bold text-white ml-[135px] pt-[116px]">
//         Fill Up The Application
//       </div>
//       <div className="w-1/2 object-cover">
//         <img
//           src="/pc.png"
//           alt=""
//           className="relative w-full h-full object-cover z-10"
//         />
//       </div>
//     </div>
//   );
// }

// export default BannerProfile;

import React from "react";
import GearIcon from "../../../assets/gears.svg?react";

function BannerProfile() {
  return (
    <div className="relative w-full h-auto lg:h-[458px] flex flex-col lg:flex-row justify-between">
      {/* Background Image */}
      <img
        src="/typing.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-72 -z-20"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-700 opacity-90 -z-10"></div>

      {/* Left side content */}
      <div className="flex flex-col items-start lg:ml-[135px] pt-[60px] lg:pt-[116px] px-4 lg:px-0 w-full lg:w-[340px]">
        <h1 className="text-3xl sm:text-4xl lg:text-[56px] font-bold text-white leading-tight">
          Fill Up The Application
        </h1>

        {/* Gear icon box */}
        <div className="relative lg:absolute lg:left-[135px] -bottom-[70px] mt-6 lg:mt-0 flex justify-center items-center w-[140px] h-[160px] sm:w-[160px] sm:h-[180px] lg:w-[180px] lg:h-[200px] rounded bg-sky-100">
          <div className="w-[80px] h-[80px] flex justify-center items-center rounded-full bg-[linear-gradient(to_bottom,_#262261,_#90278E)]">
            <GearIcon className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>

      {/* Right side image */}
      {/* <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
        <img
          src="/pc.png"
          alt=""
          className="relative w-full h-full object-cover z-10"
        />
      </div> */}

      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 hidden lg:block">
        <img
          src="/pc.png"
          alt=""
          className="relative w-full h-full object-cover z-10"
        />
      </div>
    </div>
  );
}

export default BannerProfile;
