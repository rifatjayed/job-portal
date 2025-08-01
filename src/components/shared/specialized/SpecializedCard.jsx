// import React from "react";

// function SpecializedCard({ logo, title, count }) {
//   return (
//     <div className="card w-full sm:w-[270px] cursor-pointer flex items-center gap-2 p-3 bg-white rounded transition-all hover:text-white hover:bg-blue-600 group">
//       <div className="card_logo shrink-0">
//         <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
//       </div>
//       <p className="card_title text-[16px] sm:text-[20px] font-medium">
//         {title} |
//       </p>
//       <p className="card_count text-blue-700 group-hover:text-white text-[14px] sm:text-[16px]">
//         {count}
//       </p>
//     </div>
//   );
// }

// export default SpecializedCard;

// import React from "react";

// function SpecializedCard({ logo, title, count }) {
//   return (
//     <div className="card w-full sm:w-[48%] md:w-[48%] lg:w-[270px] cursor-pointer flex items-center gap-3 p-4 bg-white rounded-xl transition-all hover:text-white hover:bg-blue-600 group">
//       <div className="card_logo shrink-0">
//         <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
//       </div>
//       <div className="flex items-center flex-wrap gap-x-2">
//         <p className="card_title text-[16px] md:text-[18px] font-medium whitespace-nowrap">
//           {title} |
//         </p>
//         <p className="card_count text-blue-700 group-hover:text-white text-[14px] md:text-[16px]">
//           {count}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default SpecializedCard;

// import React from "react";

// function SpecializedCard({ logo, title, count }) {
//   return (
//     <div className="card w-full sm:w-[48%] lg:w-[270px] cursor-pointer flex items-center gap-3 p-4 bg-white rounded-xl transition-all hover:text-white hover:bg-blue-600 group shadow-md">
//       <div className="card_logo shrink-0">
//         <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
//       </div>
//       <div className="flex flex-wrap items-center gap-2">
//         <p className="card_title text-[16px] sm:text-[18px] font-medium whitespace-nowrap">
//           {title} |
//         </p>
//         <p className="card_count text-blue-700 group-hover:text-white text-[14px] sm:text-[16px]">
//           {count}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default SpecializedCard;

import React from "react";

function SpecializedCard({ logo, title, count }) {
  return (
    <div className="w-[270px] cursor-pointer flex items-center gap-3 p-4 bg-white rounded-xl transition-all hover:text-white hover:bg-blue-600 group shadow-md">
      <div className="shrink-0">
        <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-[16px] sm:text-[18px] font-medium whitespace-nowrap">
          {title} |
        </p>
        <p className="text-blue-700 group-hover:text-white text-[14px] sm:text-[16px]">
          {count}
        </p>
      </div>
    </div>
  );
}

export default SpecializedCard;
