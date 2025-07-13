// import React from "react";
// import hero_img from "../../assets/hero-image.png";
// import Search from "./Search";
// export default function Hero() {
//   return (
//     <div className="w-[1170px] flex justify-between mt-16">
//       <div className="hero_left w-[435px] flex flex-col gap-4">
//         <div className="flex flex-col gap-10">
//           <div className="title text-[44px] font-medium leading-[54px]">
//             Jobs Made Simple Dreams Made Real
//           </div>
//           <div className="description">
//             The mission of transforming aspirations into tangible achievements
//             through streamlined employment processes and opportunities.
//           </div>
//         </div>
//         <div className="relative z-2">
//           <Search bgColor="white" btnColor="blue" btnText="white" />
//           <img
//             className="absolute top-0 left-[460px] -translate-y-full"
//             src="/cornerUp.svg"
//             alt=""
//           />
//           <img
//             className="absolute bottom-0 left-[460px] translate-y-full"
//             src="/cornerDown.svg"
//             alt=""
//           />
//         </div>
//         <div className="hero_footer flex justify-between items-center">
//           <div className="professoinals flex flex-col items-center">
//             <div className="images pb-4 flex -space-x-3">
//               <img
//                 className="w-[40px] h-[40px] rounded-full object- border-2 border-white"
//                 src="/1.png"
//                 alt="people"
//               />
//               <img
//                 className="w-[40px] h-[40px] rounded-full object- border-2 border-white"
//                 src="/2.png"
//                 alt="people"
//               />
//               <img
//                 className="w-[40px] h-[40px] rounded-full object- border-2 border-white"
//                 src="/3.png"
//                 alt="people"
//               />
//               <img
//                 className="w-[40px] h-[40px] rounded-full object- border-2 border-white"
//                 src="/4.png"
//                 alt="people"
//               />
//             </div>
//             <div className="text-[20px] font-semibold">25k+</div>
//             <div className="text-gray-600">professionals</div>
//           </div>
//           <div className="watchvideo px-16 py-6.5 flex items-center gap-2 border border-dotted border-blue-500 rounded-[16px]">
//             <div className="video_icon">
//               <img src="/video_icon.png" alt="video icon" />
//             </div>
//             <div className="video_text text-gray-500">Watch Video</div>
//           </div>
//         </div>
//       </div>
//       <div className="hero_right  rounded-2xl z-0">
//         <img
//           src={hero_img}
//           alt="hero"
//           className="hero_img w-[710px] rounded-2xl"
//         />
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import hero_img from "../../assets/hero-image.png";
// import Search from "./Search";

// export default function Hero() {
//   return (
//     <div className="w-full px-4 sm:px-6 lg:px-0 flex flex-col-reverse lg:flex-row justify-between mt-16 max-w-[1170px] mx-auto">
//       {/* Left (Content) */}
//       <div className="hero_left w-[435px] flex flex-col gap-4">
//         <div className="flex flex-col gap-10">
//           <div className="title text-[44px] font-medium leading-[54px]">
//             Jobs Made Simple Dreams Made Real
//           </div>
//           <div className="description">
//             The mission of transforming aspirations into tangible achievements
//             through streamlined employment processes and opportunities.
//           </div>
//         </div>
//         <div className="relative z-2">
//           <Search bgColor="white" btnColor="blue" btnText="white" />
//           <img
//             className="absolute top-0 left-[460px] -translate-y-full"
//             src="/cornerUp.svg"
//             alt=""
//           />
//           <img
//             className="absolute bottom-0 left-[460px] translate-y-full"
//             src="/cornerDown.svg"
//             alt=""
//           />
//         </div>
//         <div className="hero_footer flex justify-between items-center">
//           <div className="professoinals flex flex-col items-center">
//             <div className="images pb-4 flex -space-x-3">
//               <img
//                 className="w-[40px] h-[40px] rounded-full object- border-2 border-white"
//                 src="/1.png"
//                 alt="people"
//               />
//               <img
//                 className="w-[40px] h-[40px] rounded-full object- border-2 border-white"
//                 src="/2.png"
//                 alt="people"
//               />
//               <img
//                 className="w-[40px] h-[40px] rounded-full object- border-2 border-white"
//                 src="/3.png"
//                 alt="people"
//               />
//               <img
//                 className="w-[40px] h-[40px] rounded-full object- border-2 border-white"
//                 src="/4.png"
//                 alt="people"
//               />
//             </div>
//             <div className="text-[20px] font-semibold">25k+</div>
//             <div className="text-gray-600">professionals</div>
//           </div>
//           <div className="watchvideo px-16 py-6.5 flex items-center gap-2 border border-dotted border-blue-500 rounded-[16px]">
//             <div className="video_icon">
//               <img src="/video_icon.png" alt="video icon" />
//             </div>
//             <div className="video_text text-gray-500">Watch Video</div>
//           </div>
//         </div>
//       </div>

//       {/* Right (Image) */}
//       <div className="hero_right rounded-2xl z-0">
//         <img
//           src={hero_img}
//           alt="hero"
//           className="hero_img w-[710px] rounded-2xl"
//         />
//       </div>
//     </div>
//   );
// }

import React from "react";
import hero_img from "../../assets/hero-image.png";
import Search from "./Search";

export default function Hero() {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-0">
      <div className="w-[1170px] flex flex-col-reverse lg:flex-row justify-between mt-16">
        {/* Left (Content) */}
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

        {/* Right (Image) */}
        <div className="hero_right rounded-2xl z-0 mb-6 lg:mb-0">
          <img
            src={hero_img}
            alt="hero"
            className="hero_img w-[710px] rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
