// import React from "react";

// function CategoryCard({ logo, name, jobsPosted }) {
//   return (
//     <div class="card w-[270px] h-[94px] flex gap-3 px-6 py-4 border border-gray-400/40 rounded shadow-lg bg-white">
//       <div class="logo">
//         <img src={logo} alt="" />
//       </div>
//       <div className="flex flex-col gap-2">
//         <h2 className="text-lg font-medium">{name}</h2>
//         <p className="text-blue-700 text-base font-semibold">{jobsPosted}</p>
//       </div>
//     </div>
//   );
// }

// export default CategoryCard;

import React from "react";

function CategoryCard({ logo, name, jobsPosted }) {
  return (
    <div className="card w-full max-w-[270px] h-[94px] flex gap-3 px-4 sm:px-6 py-4 border border-gray-400/40 rounded shadow-lg bg-white">
      <div className="logo flex-shrink-0">
        <img src={logo} alt="" className="w-12 h-12 object-contain" />
      </div>
      <div className="flex flex-col justify-center gap-1">
        <h2 className="text-base sm:text-lg font-medium">{name}</h2>
        <p className="text-blue-700 text-sm sm:text-base font-semibold">
          {jobsPosted}
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;
