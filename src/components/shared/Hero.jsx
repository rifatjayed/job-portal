import React from "react";
import hero_img from "../../assets/hero-image.png";
import Search from "./Search";
export default function Hero() {
  return (
    <div className="w-[1170px] flex justify-between mt-16">
      <div className="hero_left w-[435px] flex flex-col gap-4">
        <div className="flex flex-col gap-10">
          <div className="title text-[44px] font-medium leading-[54px]">
            Jobs Made Simple Dreams Made Real
          </div>
          <div className="description">
            The mission of transforming aspirations into tangible achievements
            through streamlined employment processes and opportunities.
          </div>
        </div>
        <div className="relative z-2">
          <Search bgColor="white" btnColor="blue" btnText="white" />
          <img
            className="absolute top-0 left-[460px] -translate-y-full"
            src="/cornerUp.svg"
            alt=""
          />
          <img
            className="absolute bottom-0 left-[460px] translate-y-full"
            src="/cornerDown.svg"
            alt=""
          />
        </div>
        <div className="hero_footer flex justify-between items-center">
          <div className="professoinals flex flex-col items-center">
            <div className="images pb-4 flex -space-x-3">
              <img
                className="w-[40px] h-[40px] rounded-full object- border-2 border-white"
                src="/1.png"
                alt="people"
              />
              <img
                className="w-[40px] h-[40px] rounded-full object- border-2 border-white"
                src="/2.png"
                alt="people"
              />
              <img
                className="w-[40px] h-[40px] rounded-full object- border-2 border-white"
                src="/3.png"
                alt="people"
              />
              <img
                className="w-[40px] h-[40px] rounded-full object- border-2 border-white"
                src="/4.png"
                alt="people"
              />
            </div>
            <div className="text-[20px] font-semibold">25k+</div>
            <div className="text-gray-600">professionals</div>
          </div>
          <div className="watchvideo px-16 py-6.5 flex items-center gap-2 border border-dotted border-blue-500 rounded-[16px]">
            <div className="video_icon">
              <img src="/video_icon.png" alt="video icon" />
            </div>
            <div className="video_text text-gray-500">Watch Video</div>
          </div>
        </div>
      </div>
      <div className="hero_right  rounded-2xl z-0">
        <img
          src={hero_img}
          alt="hero"
          className="hero_img w-[710px] rounded-2xl"
        />
      </div>
    </div>
  );
}

// import React from "react";
// import hero_img from "../../assets/hero-image.png";
// import Search from "./Search";

// export default function Hero() {
//   return (
//     <div className="container mx-auto px-4 mt-16 flex flex-col lg:flex-row items-center justify-between gap-10">
//       {/* Left Section */}
//       <div className="flex flex-col gap-8 max-w-full lg:max-w-md">
//         <div className="flex flex-col gap-6">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-snug">
//             Jobs Made Simple
//             <br />
//             Dreams Made Real
//           </h1>
//           <p className="text-gray-700 text-base md:text-lg">
//             The mission of transforming aspirations into tangible achievements
//             through streamlined employment processes and opportunities.
//           </p>
//         </div>

//         {/* Search Bar */}
//         <div className="relative">
//           <Search bgColor="white" btnColor="blue" btnText="white" />
//           <img
//             className="hidden sm:block absolute top-0 left-full -translate-y-full"
//             src="/cornerUp.svg"
//             alt=""
//           />
//           <img
//             className="hidden sm:block absolute bottom-0 left-full translate-y-full"
//             src="/cornerDown.svg"
//             alt=""
//           />
//         </div>

//         {/* Footer Info */}
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-6">
//           {/* Professionals */}
//           <div className="flex flex-col items-center">
//             <div className="flex -space-x-3 mb-2">
//               <img
//                 className="w-10 h-10 rounded-full border-2 border-white"
//                 src="/1.png"
//                 alt="people"
//               />
//               <img
//                 className="w-10 h-10 rounded-full border-2 border-white"
//                 src="/2.png"
//                 alt="people"
//               />
//               <img
//                 className="w-10 h-10 rounded-full border-2 border-white"
//                 src="/3.png"
//                 alt="people"
//               />
//               <img
//                 className="w-10 h-10 rounded-full border-2 border-white"
//                 src="/4.png"
//                 alt="people"
//               />
//             </div>
//             <div className="text-xl font-semibold">25k+</div>
//             <div className="text-gray-600 text-sm">professionals</div>
//           </div>

//           {/* Watch Video */}
//           <div className="flex items-center gap-2 px-6 py-3 border border-dotted border-blue-500 rounded-xl cursor-pointer hover:bg-blue-50 transition">
//             <img src="/video_icon.png" alt="video icon" className="w-6 h-6" />
//             <span className="text-gray-500">Watch Video</span>
//           </div>
//         </div>
//       </div>

//       {/* Right Image Section */}
//       <div className="w-full lg:w-[55%]">
//         <img
//           src={hero_img}
//           alt="hero"
//           className="w-full max-w-full rounded-2xl object-cover"
//         />
//       </div>
//     </div>
//   );
// }
